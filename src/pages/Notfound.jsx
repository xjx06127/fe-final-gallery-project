import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  width: 770px;
  padding-top: 250px;
  padding-bottom: 250px;
  margin: 0 auto;
`;

const BackgroundColor = styled.div`
  background-color: #b1d0f1;
`;

const Notfound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <BackgroundColor>
      <Div>
        <div>
          <h1>여기는 어디..?</h1>
          <br />
          <button onClick={goBack}>돌아갈래</button>
        </div>
      </Div>
    </BackgroundColor>
  );
};

export default Notfound;
