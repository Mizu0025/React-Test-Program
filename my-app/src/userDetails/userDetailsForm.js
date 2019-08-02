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
    <form onSubmit={onSave}>
      <h2>
        {userDetails.id ? "Edit " : "Add "}
        {userDetails.name || "User"}
      </h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <table className="userDetailsEdit-table">
        <tbody>
          <column className="labels">
            <tr>
              <label>UserName</label>
            </tr>
            <tr>
              <label>Gender</label>
            </tr>
            <tr>
              <label>Email Address</label>
            </tr>
            <tr>
              <label>Avatar URL</label>
            </tr>
          </column>

          <column className="input-fields">
            <tr>
              <TextInput
                name="name"
                value={userDetails.name}
                onChange={onChange}
                error={errors.name}
              />
            </tr>

            <tr>
              <SelectInput
                name="genderID"
                value={userDetails.genderID || ""}
                defaultOption="Select Gender"
                options={genders.map(userGender => ({
                  value: userGender.id,
                  text: userGender.name
                }))}
                onChange={onChange}
                error={errors.gender}
              />
            </tr>

            <tr>
              <EmailInput
                name="emailAddress"
                value={userDetails.emailAddress}
                onChange={onChange}
                error={errors.emailAddress}
              />
            </tr>

            <tr>
              <TextInput
                name="avatarURL"
                value={userDetails.avatarURL}
                onChange={onChange}
                error={errors.avatarURL}
              />
            </tr>
          </column>

          <column className="avatar preview">
            <tr> </tr>
            <tr> </tr>
            <tr> </tr>
            <tr>
              <img
                className="avatar-preview"
                src={userDetails.avatarURL}
                onError={e => {
                  if (e.target.src !== userDetails.avatarURL) {
                    e.target.src = NoAvatarLoaded;
                  }
                }}
              />
            </tr>
          </column>
        </tbody>
      </table>
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
