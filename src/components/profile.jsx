import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const handleClick = e => {
    props.handleButtonClick(123647656);
    // myStore.setUserID(123647656);
  };

  return (
    <div className="Profile">
      <h4>Profile page</h4>
      {props.userName}
      <button onClick={event => handleClick(event)}>Click ME</button>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string,
  handleButtonClick: PropTypes.func
};

export default Profile;
