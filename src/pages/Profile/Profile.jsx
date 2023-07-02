import React from "react";
import styled from "styled-components";

const Img = styled.img`
  content: url("blue.jpg");
  border-radius: 100%;
  width: 100px;
  margin-right: 20px;
`;

const Profile = () => {
  return <Img />;
};

export default Profile;
