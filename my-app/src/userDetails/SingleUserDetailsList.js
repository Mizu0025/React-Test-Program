import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SingleUserDetailsList.css";
import MissingAvatar from "./MissingAvatar.png";

const checkAvatar = singleUserDetails => {
  const avatarURL = singleUserDetails.avatarURL;

  if (avatarURL !== "") {
    return avatarURL;
  } else {
    return MissingAvatar;
  }
};

const userDetailList = ({ userDetails, onDeleteClick }) => (
  <table className="singleUserDetails-table">
    <thead>
      <tr className="singleUserDetails-tr">
        <th className="singleUserDetails-th">Avatar</th>
        <th className="singleUserDetails-th">Name</th>
        <th className="singleUserDetails-th">Gender</th>
        <th className="singleUserDetails-th"> </th>
      </tr>
    </thead>
    <tbody>
      {userDetails.map(singleUserDetails => {
        return (
          <tr key={singleUserDetails.id} className="singleUserDetails-tr">
            <td className="singleUserDetails-td">
              <Link to={"/accountManagement/" + singleUserDetails.slug}>
                <img
                  src={checkAvatar(singleUserDetails)}
                  alt="Missing Avatar"
                  className="avatar-image"
                />
              </Link>
            </td>
            <td className="singleUserDetails-td">
              <Link
                to={"/accountManagement/" + singleUserDetails.slug}
                className="userName"
              >
                {singleUserDetails.name}
              </Link>
            </td>
            <td className="singleUserDetails-td">{singleUserDetails.gender}</td>
            <td className="singleUserDetails-td">
              <button
                className="delete-user"
                onClick={() => onDeleteClick(singleUserDetails)}
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
