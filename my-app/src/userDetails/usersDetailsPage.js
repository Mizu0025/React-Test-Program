import React from "react";
import { connect } from "react-redux";
import * as userDetailActions from "../redux/actions/userDetailsActions";
import * as genderActions from "../redux/actions/genderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import userDetailsList from "./userDetailList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function usersDetailsPage() {
  return (
    <div>
      <h1>Under construction</h1>
    </div>
  );
}

export default usersDetailsPage;
