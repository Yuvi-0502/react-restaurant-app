import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClassComponent from "../components/ProfileClass"

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p> This is my ABOUT US page</p>
      <Outlet  />
      <ProfileClassComponent name={"Yuvi"} />
    </div>
  );
};

export default About;
