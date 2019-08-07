import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadAllUsersDetails,
  saveSingleUsersDetails
} from "../redux/actions/userDetailsActions";
import { loadGenders } from "../redux/actions/genderActions";
import PropTypes from "prop-types";
import UserDetailsForm from "./userDetailsForm";
import { newUserDetails } from "../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import URLValidator from "url-regex";

function UserDetailsManagement({
  allUsersDetails,
  genders,
  loadAllUsersDetails,
  loadGenders,
  saveSingleUsersDetails,
  history,
  ...props
}) {
  const [singleUserDetails, setSingleUserDetails] = useState({
    ...props.singleUserDetails
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  useEffect(() => {
    if (allUsersDetails.length == 0) {
      loadAllUsersDetails();
    } else {
      setSingleUserDetails({ ...props.singleUserDetails });
    }

    if (genders.length == 0) {
      loadGenders().catch(error => {
        console.log("Loading genders failed: " + error.message);
      });
    }
  }, [props.singleUserDetails]);

  //handling input for the form
  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value =
      name == "genderID" ? parseInt(target.value, 10) : target.value;

    if (name == "avatarFile") {
      setFileUploaded(true);
    }

    setSingleUserDetails(singleUserDetails => ({
      ...singleUserDetails,
      [name]: value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveSingleUsersDetails(singleUserDetails)
      .then(() => {
        toast.success("User details saved.");
        history.push("/accountsServer");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  function InputStringIsNotInUse(inputString) {
    var inputList = [];
    var inputFound = false;

    for (var pos = 0; pos < allUsersDetails.length; pos++) {
      if (inputString.includes("@")) {
        inputList.push(allUsersDetails[pos].emailAddress);
      } else {
        inputList.push(allUsersDetails[pos].name);
      }
    }

    if (inputList.includes(inputString)) {
      inputFound = true;
    }

    if (!inputFound) {
      return true;
    } else return false;
  }

  function AvatarURLIsValid(URLString) {
    const validImageTypes = ["jpg", "jpeg", "png", "gif"];
    var isValidURL = URLValidator({ exact: true }).test(URLString);
    var isValidImage = false;

    for (var pos = 0; pos < validImageTypes.length; pos++) {
      if (URLString.includes(validImageTypes[pos])) {
        isValidImage = true;
      }
    }

    if (isValidURL && isValidImage) {
      return true;
    } else {
      return false;
    }
  }

  function FileTypeIsValid(file) {
    const validFileTypes = ["image/jpg", "image/png", "image/gif"];
    var isValidImage = false;

    for (var pos = 0; pos < validFileTypes.length; pos++) {
      if (file == validFileTypes[pos]) {
        isValidImage = true;
      }
    }

    if (isValidImage) {
      return true;
    } else {
      return false;
    }
  }

  //server-side error checking
  function formIsValid() {
    const {
      name,
      editName,
      genderID,
      editGenderID,
      slug,
      editSlug,
      emailAddress,
      editEmailAddress,
      avatarURL,
      editAvatarURL,
      avatarFile,
      editAvatarFile
    } = singleUserDetails;
    const errors = {};
    const newEditName = name;
    const newEditGender = genderID;
    const newEditSlug = emailAddress;
    const newEditEmail = emailAddress;
    const newEditAvatar = avatarURL;
    const newEditAvatarFile = avatarFile;

    debugger;

    if (avatarFile != editAvatarFile) {
      singleUserDetails.editAvatarFile = newEditAvatarFile;
      if (!FileTypeIsValid(avatarFile.type))
        errors.avatarFile = "Filetype is invalid";
    }

    //check data is unchanged and not already in use
    if (name != editName || name == "") {
      singleUserDetails.editName = newEditName;
      if (!name) errors.name = "Name is required";
      if (!InputStringIsNotInUse(name)) errors.name = "Name already in use";
    }

    if (genderID != editGenderID || genderID == null) {
      singleUserDetails.editGenderID = newEditGender;
      if (!genderID) errors.gender = "Gender is required";
    }

    if (slug == "") {
      singleUserDetails.slug = newEditName;
    }

    if (slug != editSlug || slug == "") {
      singleUserDetails.editSlug = newEditSlug;
    }

    if (emailAddress != editEmailAddress || emailAddress == "") {
      singleUserDetails.editEmailAddress = newEditEmail;
      if (!emailAddress) errors.emailAddress = "Email is required";
      if (!InputStringIsNotInUse(emailAddress))
        errors.emailAddress = "Email already in use";
    }

    if (avatarURL != editAvatarURL || avatarURL == "") {
      singleUserDetails.editAvatarURL = newEditAvatar;
      if (avatarURL != "") {
        if (!AvatarURLIsValid(avatarURL)) errors.avatarURL = "Invalid URL";
      }
    }

    setErrors(errors);
    //form is valid if the errors object still has no properties
    //keys returns an array of an object
    return Object.keys(errors).length == 0;
  }

  return genders.length == 0 || allUsersDetails.length == 0 ? (
    <Spinner />
  ) : (
    <UserDetailsForm
      userDetails={singleUserDetails}
      errors={errors}
      genders={genders}
      onChange={handleChange}
      fileIsUploaded={fileUploaded}
      onSave={handleSave}
      saving={saving}
    />
  );
}

UserDetailsManagement.propTypes = {
  allUsersDetails: PropTypes.array.isRequired,
  singleUserDetails: PropTypes.object.isRequired,
  genders: PropTypes.array.isRequired,
  loadAllUsersDetails: PropTypes.func.isRequired,
  loadGenders: PropTypes.func.isRequired,
  saveSingleUsersDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getUserDetailsBySlug(allUsersDetails, slug) {
  const findSlug =
    allUsersDetails.find(singleUserDetails => singleUserDetails.slug == slug) ||
    null;

  return findSlug;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const checkUserDetails =
    slug && state.userDetails.length > 0
      ? getUserDetailsBySlug(state.userDetails, slug)
      : newUserDetails;

  return {
    singleUserDetails: checkUserDetails,
    allUsersDetails: state.userDetails,
    genders: state.genders
  };
}

const mapDispatchToProps = {
  loadAllUsersDetails: loadAllUsersDetails,
  loadGenders: loadGenders,
  saveSingleUsersDetails: saveSingleUsersDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsManagement);
