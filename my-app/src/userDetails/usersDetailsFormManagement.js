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

    setSingleUserDetails(singleUserDetails => ({
      ...singleUserDetails,
      [name]: value
    }));
  }

  function AvatarURLIsValid(URLString) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(URLString);
  }

  //server-side error checking
  function formIsValid() {
    const { name, genderID, avatarURL } = singleUserDetails;
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!genderID) errors.gender = "Gender is required";
    if (!AvatarURLIsValid(avatarURL)) errors.avatarURL = "Invalid URL";

    console.log(singleUserDetails);

    setErrors(errors);
    //form is valid if the errors object still has no properties
    //keys returns an array of an object
    return Object.keys(errors).length == 0;
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

  return genders.length == 0 || allUsersDetails.length == 0 ? (
    <Spinner />
  ) : (
    <UserDetailsForm
      userDetails={singleUserDetails}
      errors={errors}
      genders={genders}
      onChange={handleChange}
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
  return (
    allUsersDetails.find(singleUserDetails => singleUserDetails.slug == slug) ||
    null
  );
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
