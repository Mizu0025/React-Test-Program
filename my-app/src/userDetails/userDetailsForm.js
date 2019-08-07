import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import EmailInput from "../common/EmailInput";
import NoAvatarLoaded from "./MissingAvatar.png";
import "./userDetailsForm.css";

const userUploadedFile = React.createRef();

const UserDetailsForm = ({
  userDetails,
  genders,
  onSave,
  onChange,
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
        <div className="file-upload-wrapper">
          <button className="file-upload-btn">
            {fileIsUploaded
              ? userUploadedFile.current.files[0].name
              : "Upload a File"}
          </button>

          <input
            type="file"
            name="avatarFile"
            className="form-control"
            id="input"
            onChange={onChange}
            ref={userUploadedFile}
          />

          <img
            className="avatar-preview"
            src={
              fileIsUploaded
                ? userUploadedFile.current.files[0]
                : NoAvatarLoaded
            }
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
  saving: PropTypes.bool
};

export default UserDetailsForm;
