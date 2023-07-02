import React, { useEffect, useState } from "react";
import Intro from "./Intro/Intro";
import Profile from "./Profile/Profile";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 210px);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 10px;
`;

const ImgText = styled.p`
  color: gray;
  font-size: 14px;
`;

const Div = styled.div`
  background-color: white;
  width: 770px;
  margin: 0 auto;
`;

const BackgroundHandler = styled.div`
  background-color: #b1d0f1;
`;

const ImgDiv = styled.div`
  width: 200px;
`;

const ImgName = styled.p`
  font-weight: bold;
  font-size: 17px;
`;

const Main = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`https://gallery.jmoomin.com/imageAll`).then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <BackgroundHandler>
      <Div>
        <Container>
          <Profile />
          <Intro />
        </Container>
        <ImgContainer>
          {articles.map((i) => {
            const displayedName =
              i.imageName.length > 13
                ? i.imageName.slice(0, 13) + "..."
                : i.imageName;
            const displayedText =
              i.imageText.length > 15
                ? i.imageText.slice(0, 15) + "..."
                : i.imageText;
            return (
              <ImgDiv>
                <Link to={`/article/${i.id}`}>
                  <Img src={i.imageURL} />
                </Link>
                <ImgName>{displayedName}</ImgName>
                <ImgText>{displayedText}</ImgText>
              </ImgDiv>
            );
          })}
        </ImgContainer>
      </Div>
    </BackgroundHandler>
  );
};

export default Main;
