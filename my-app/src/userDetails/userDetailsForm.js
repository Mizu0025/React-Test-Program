import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

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
      <TextInput
        name="name"
        label="UserName"
        value={userDetails.name}
        onChange={onChange}
        error={errors.name}
      />

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

      <TextInput
        name="avatarURL"
        label="Avatar URL"
        value={userDetails.avatarURL}
        onChange={onChange}
        error={errors.avatarURL}
      />

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
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserDetailsForm;
