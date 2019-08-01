import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import EmailInput from "../common/EmailInput";
import NoAvatarLoaded from "./404Image.png";

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

      <table>
        <tbody>
          <column className="labels">
            <label>UserName</label>
            <label>Gender</label>
            <label>Email Address</label>
            <label>Avatar URL</label>
            <label> </label>
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

            <tr>
              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </tr>
          </column>
        </tbody>
      </table>
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
