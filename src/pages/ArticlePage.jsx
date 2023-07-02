import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 620px;
  margin: 0 auto;
  padding-right: 70px;
  padding-left: 70px;
  padding-bottom: 70px;
  background-color: white;
`;

const Img = styled.img`
  width: 620px;
  height: 620px;
`;

const Div = styled.div`
  //이미지 제목,내용과 댓글 사이 간격 벌린다.
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Text = styled.input`
  width: 520px;
  border: none;
`;

const Submit = styled.button`
  border: none;
  color: #3d3de1;
  background-color: white;
  width: 100px;
  cursor: pointer;
`;

const Comment = styled.div`
  //댓글 입력 창
  display: flex;
  height: 40px;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 10px;
`;

const CommentList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 25px;
  margin-left: 15px;
`;

const Delete = styled.button`
  border: none;
  color: gray;
  background-color: white;
  cursor: pointer;
`;

const BackgroundColor = styled.div`
  background-color: #b1d0f1;
`;

const Article = () => {
  const { articleId } = useParams();
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]); //댓글들
  const [comment, setComment] = useState(""); //댓글 쓰는 란
  const [commentCnt, setCommentCnt] = useState(0);

  useEffect(() => {
    axios.get(`https://gallery.jmoomin.com/imageAll`).then((res) => {
      setArticles(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://gallery.jmoomin.com/${articleId}/comments`)
      .then((res) => {
        setComments(res.data);
        setCommentCnt(res.data.length);
      });
  }, []);

  const filteredArticle = articles.filter(
    (article) => article.id === articleId
  );

  const saveComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    axios.post(`https://gallery.jmoomin.com/${articleId}/comments`, {
      commentBody: comment,
    });
    setComment("");
    window.location.reload();
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://gallery.jmoomin.com/${articleId}/comments/${id}`)
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <>
      {articles.length >= 1 && (
        <BackgroundColor>
          <Container2>
            <Container1>
              <Div>
                <h2>{filteredArticle[0].imageName}</h2>
                <p>{filteredArticle[0].imageText}</p>
              </Div>
              <p>댓글 {commentCnt}개</p>
            </Container1>
            <Img src={filteredArticle[0].imageURL} />
            <Comment>
              <Text
                placeholder="   댓글 작성..."
                value={comment}
                onChange={saveComment}
              />
              <Submit onClick={handleSubmit}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;게시
              </Submit>
            </Comment>
            {comments.map((c) => (
              <CommentList>
                <div>
                  <strong>익명&nbsp;&nbsp;</strong>
                  {c.commentBody}
                </div>
                <Delete onClick={() => handleDelete(c.id)}>삭제</Delete>
              </CommentList>
            ))}
          </Container2>
        </BackgroundColor>
      )}
    </>
  );
};

export default Article;
