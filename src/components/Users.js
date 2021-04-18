import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}>
        User Name: {user.username}
        <br></br>
        User Hometown: {user.hometown}
      </li>
    ));

    return (
      <div>
        <ul>
          <h2>{users}</h2>
          <p>Number of users: {users.length}</p>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps)(Users);
