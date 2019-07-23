import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const checkAvatar = ({ userDetail }) => {
  const noAvatarURL = "./MissingAvatar.png";

  if (userDetail.avatarURL !== "") {
    return userDetail.avatarURL;
  } else {
    return noAvatarURL;
  }
};

const userDetailList = ({ userDetails, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Avatar</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Date of Birth</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {userDetails.map(userDetail => {
        return (
          <tr key={userDetail.id}>
            <td>
              <img
                href={checkAvatar(userDetail.avatarURL)}
                alt="Missing Avatar"
              />
            </td>
            <td>
              <Link to={"/userDetails/" + userDetail.slug}>
                {userDetail.userName}
              </Link>
            </td>
            <td>{userDetail.gender}</td>
            <td>{userDetail.dateOfBirth}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(userDetail)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

userDetailList.propTypes = {
  userDetails: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default userDetailList;
