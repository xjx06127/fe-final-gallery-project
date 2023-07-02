import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Title = styled.h2``;

const Introduction = styled.p``;

const Postcount = styled.h5`
  margin-top: 10px;
`;

const Intro = () => {
  const [articleNum, setArticleNum] = useState(0);

  useEffect(() => {
    axios.get(`https://gallery.jmoomin.com/imageSize`).then((res) => {
      setArticleNum(res.data);
    });
  }, []);

  return (
    <div>
      <Title>likelion_11th_frontend</Title>
      <Introduction>
        멋쟁이사자처럼 11기 여러분의 소중한 추억들을 보관합니다.😎
      </Introduction>
      <Postcount>게시물 {articleNum}개</Postcount>
    </div>
  );
};

export default Intro;
