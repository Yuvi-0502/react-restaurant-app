import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>Profile Component</h1>
      <h2> Name : {props.name}</h2>
    </div>
  );
};

export default Profile;
