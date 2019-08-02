import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import EmailInput from "../common/EmailInput";
import NoAvatarLoaded from "./MissingAvatar.png";
import "./userDetailsForm.css";

const UserDetailsForm = ({
  userDetails,
  genders,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave} className="userDetailsEdit-form">
      <h2>
        {userDetails.id ? "Edit " : "Add "}
        {userDetails.name || "User"}
      </h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <container className="userDetailsEdit-container">
        <div>
          <TextInput
            name="name"
            label="UserName"
            value={userDetails.name}
            onChange={onChange}
            error={errors.name}
          />
        </div>
      </container>

      <container className="userDetailsEdit-container">
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
      </container>

      <container className="userDetailsEdit-container">
        <div>
          <EmailInput
            name="emailAddress"
            label="Email Address"
            value={userDetails.emailAddress}
            onChange={onChange}
            error={errors.emailAddress}
          />
        </div>
      </container>

      <container className="userDetailsEdit-container">
        <div className="userDetailsEdit-finalDiv">
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
      </container>

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>

    // <div className="clearfix">
    //   <form onSubmit={onSave}>
    //     <h2>
    //       {userDetails.id ? "Edit " : "Add "}
    //       {userDetails.name || "User"}
    //     </h2>
    //     {errors.onSave && (
    //       <div className="alert alert-danger" role="alert">
    //         {errors.onSave}
    //       </div>
    //     )}

    //     <div className="avatarPreview-container">
    //       <img
    //         className="avatar-preview"
    //         src={userDetails.avatarURL}
    //         onError={e => {
    //           if (e.target.src !== userDetails.avatarURL) {
    //             e.target.src = NoAvatarLoaded;
    //           }
    //         }}
    //       />
    //     </div>

    //     <button type="submit" disabled={saving} className="btn btn-primary">
    //       {saving ? "Saving..." : "Save"}
    //     </button>
    //   </form>
    // </div>
  );
};

UserDetailsForm.propTypes = {
  userDetails: PropTypes.object.isRequired,
  genders: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserDetailsForm;
