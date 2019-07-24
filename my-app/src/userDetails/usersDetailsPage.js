import React from "react";
import { connect } from "react-redux";
import * as userDetailActions from "../redux/actions/userDetailsActions";
import * as genderActions from "../redux/actions/genderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import UserDetailsList from "./userDetailList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class UserDetailsPage extends React.Component {
  state = {
    redirectToAddUserPage: false
  };

  componentDidMount() {
    const { userDetails, genders, actions } = this.props;

    if (userDetails.length == 0) {
      actions.loadAllUsersDetails().catch(error => {
        alert("Loading all user details failed" + error);
      });
    }

    if (genders.length == 0) {
      actions.loadGenders().catch(error => {
        alert("Loading genders failed" + error);
      });
    }
  }

  handleDeleteUserDetails = async userDetails => {
    const toastUpdate = (toastId, message, updateType, autoclose) => {
      toast.update(toastId, {
        render: message,
        type: updateType,
        autoClose: autoclose
      });
    };

    try {
      var toastDeleteNotify = (this.toastId = toast(
        "User Details are being deleted..."
      ));
      await this.props.actions.deleteSingleUsersDetails(userDetails);
      toastUpdate(
        toastDeleteNotify,
        "User details successfully deleted!",
        toast.TYPE.SUCCESS,
        true
      );
    } catch (error) {
      toastUpdate(
        toastDeleteNotify,
        "Delete failed: " + error.message,
        toast.TYPE.ERROR,
        false
      );
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddUserPage && (
          <Redirect to="/accountManagement" />
        )}
        <h2>List of Users</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginbottom: 20 }}
              className="btn btn-primary add-user"
              onClick={() => this.setState({ redirectToAddUserPage: true })}
            >
              Add User
            </button>
            <UserDetailsList
              onDeleteClick={this.handleDeleteUserDetails}
              userDetails={this.props.userDetails}
            />
          </>
        )}
      </>
    );
  }
}

UserDetailsPage.propTypes = {
  userDetails: PropTypes.array.isRequired,
  genders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    allUserDetails:
      state.genders.length == 0
        ? []
        : state.allUserDetails.map(userDetails => {
            return {
              ...userDetails,
              gender: state.genders.find(a => a.id == userDetails.genderId).name
            };
          }),
    genders: state.genders,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAllUsersDetails: bindActionCreators(
        userDetailActions.loadAllUsersDetails,
        dispatch
      ),
      loadGenders: bindActionCreators(genderActions.loadGenders, dispatch),
      deleteSingleUsersDetails: bindActionCreators(
        userDetailActions.deleteSingleUsersDetails,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsPage);
