import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import EmailInput from "../common/EmailInput";
import NoAvatarLoaded from "./MissingAvatar.png";
import "./userDetailsForm.css";
import FileInput from "../common/FileInput";

//const userUploadedFile = React.createRef();
var currentAvatarPreviewURL = null;

const displayUploadedFiles = file => {
  if (file == null) {
    return NoAvatarLoaded;
  } else {
    const fileType = file.type;
    const allowedImageTypes = ["image/png", "image/jpg", "image/gif"];

    for (var pos = 0; pos < allowedImageTypes.length; pos++) {
      if (fileType == allowedImageTypes[pos]) {
        currentAvatarPreviewURL = URL.createObjectURL(file);
        return currentAvatarPreviewURL;
      }
    }
    return NoAvatarLoaded;
  }
};

const UserDetailsForm = ({
  userDetails,
  genders,
  onSave,
  onChange,
  onUpload,
  fileIsUploaded = false,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave} className="userDetailsEdit-form">
      <h2>
        {userDetails.id ? "Edit " : "Add "}
        {userDetails.editName || "User"}
      </h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <div className="userDetailsEdit-div">
        <div>
          <TextInput
            name="name"
            label="UserName"
            value={userDetails.name}
            onChange={onChange}
            error={errors.name}
          />
        </div>
      </div>

      <div className="userDetailsEdit-div">
        <div>
          <SelectInput
            name="genderID"
            label="Gender"
            value={userDetails.genderID || ""}
            defaultOption="Select Gender"
            options={genders.map(userGender => ({
              value: userGender.id,
              text: userGender.name
            }))}
            onChange={onChange}
            error={errors.gender}
          />
        </div>
      </div>

      <div className="userDetailsEdit-div">
        <div>
          <EmailInput
            name="emailAddress"
            label="Email Address"
            value={userDetails.emailAddress}
            onChange={onChange}
            error={errors.emailAddress}
          />
        </div>
      </div>

      <div className="userDetailsEdit-div">
        <div className="userDetailsEdit-avatarPreviewDiv">
          <TextInput
            name="avatarURL"
            label="Avatar URL"
            value={userDetails.avatarURL}
            onChange={onChange}
            error={errors.avatarURL}
          />
          <img
            className="avatar-preview"
            src={userDetails.avatarURL}
            onError={e => {
              if (e.target.src !== userDetails.avatarURL) {
                e.target.src = NoAvatarLoaded;
              }
            }}
          />
        </div>
      </div>

      <div className="userDetailsEdit-div">
        <div className="userDetailsEdit-avatarPreviewDiv">
          <FileInput
            name="avatarFile"
            id="fileID"
            className="inputFile"
            onChange={onUpload}
          />
          <label className="userDetailsEdit-avatarFileLabel" htmlFor="fileID">
            {fileIsUploaded ? "Change Avatar" : "Upload Avatar"}
          </label>
          <img
            className="avatar-preview"
            src={displayUploadedFiles(userDetails.avatarFile)}
          />
        </div>
      </div>

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

UserDetailsForm.propTypes = {
  userDetails: PropTypes.object.isRequired,
  genders: PropTypes.array.isRequired,
  errors: PropTypes.object,
  fileIsUploaded: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserDetailsForm;
