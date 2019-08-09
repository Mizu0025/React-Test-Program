import React from "react";
import PropTypes from "prop-types";

const userUploadedFile = React.createRef();

const FileInput = ({ name, id, className, onChange, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    //eslint-disable-next-line
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <div className="field">
        <input
          type="file"
          name={name}
          id={id}
          className={className}
          onChange={onChange}
          ref={userUploadedFile}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default FileInput;
