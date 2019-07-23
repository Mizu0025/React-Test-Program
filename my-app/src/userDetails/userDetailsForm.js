import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const FileForm = ({
  //info is userId, userName, gender, dateOfBirth (string/dropdown/calander/
  //profileImage/nickName/signUpDate)
  userDetails,
  Genders,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{userDetails.id ? "Edit" : "Add"}Name</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="userName"
        label="UserName"
        value={userDetails.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="userGender"
        label="Gender"
        value={userDetails.gender || ""}
        defaultOption="Select Gender"
        options={Genders.map(gender => ({
          value: gender.id,
          text: gender.name
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

FileForm.propTypes = {
  Genders: PropTypes.array.isRequired,
  userDetails: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default FileForm;
