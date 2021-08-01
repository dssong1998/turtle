import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, Pre, TextBox } from "../Components/Text";
import HeaderTitle from "../Components/Tilte";
import GAHoc from "../GA";
import route from "../route";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import SEE_COMMENTS from "../Apollo/queries/SeeComments";
import CREATE_COMMENT from "../Apollo/mutations/CreateComment";
import { isLoggedInVar } from "../apollo";
import DELETE_COMMENT from "../Apollo/mutations/DeleteComment";

const LinkBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  max-width: 400px;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  margin: 5px 0px;
  padding: 5px 8px;
  width: 180px;
`;
const SubmitInput = styled.input`
  margin-left: 10px;
  padding: 8px 10px;
  background-color: #85a977;
  color: #fefefb;
  font-family: "Do Hyun";
  border: none;
  width: 80px;
  border-radius: 5px;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 15px;
`;
const CommentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Comment = styled.p`
  font-size: 16px;
  max-width: 80%;
`;
const CreateDate = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;
const PageLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 15px;
`;
const Cursor = styled.p`
  font-size: 30px;
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.3)" : "#85a977")};
  cursor: pointer;
`;

const Intro = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const { register, handleSubmit, setValue } = useForm();
  const history = useHistory();
  const ToWho = () => {
    history.push(route.who);
  };
  const ToWhat = () => {
    history.push(route.what);
  };
  const onCompleted = (data) => {
    const { createComment } = data;
    setItems([createComment].concat(items).slice(0, 5));
  };
  const deleteComplete = (data) => {
    window.location.reload();
  };
  const { data, loading: queryLoading } = useQuery(SEE_COMMENTS, {
    variables: {
      page_no: page,
    },
    fetchPolicy: "network-only",
  });
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    onCompleted,
  });
  const [deleteComment, { loading: deleteLoading }] = useMutation(
    DELETE_COMMENT,
    {
      onCompleted: deleteComplete,
    }
  );
  const deleteFn = (id) => {
    if (!deleteLoading) {
      deleteComment({
        variables: {
          id,
        },
      });
    }
  };
  const onValid = (data) => {
    if (!loading) {
      createComment({
        variables: {
          msg: data.text,
        },
      });
    }
    setValue("text", "");
  };
  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };
  const nextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };

  useEffect(() => {
    if (!queryLoading && data) {
      setItems(data.seeComment);
      if (data.seeComment[0]) {
        setTotalPage(data.seeComment[0].totalPage);
      }
    }
  }, [queryLoading, data]);
  if (queryLoading && !data) {
    return null;
  }
  return (
    <GAHoc>
      <Container style={{ height: "100%" }}>
        <HeaderTitle title="홈" />
        <TextBox>
          <Logo src="/logo.png" alt="logo" />
          <Info>안녕하세요!</Info>
          <Info>저는 책읽는 거북이</Info>
          <Info>부기에요.</Info>
          <LinkBox>
            <LinkBtn onClick={ToWho}>부기는 누구인가요?</LinkBtn>
            <LinkBtn onClick={ToWhat}>{"부기북스는\n무엇인가요?"}</LinkBtn>
          </LinkBox>
          <Pre>{"부기에게 읽어 볼만한 책을 추천해주세요!"}</Pre>
          <form onSubmit={handleSubmit(onValid)}>
            <InputBox>
              <TextInput {...register("text")} placeholder="부기에게 책 추천" />
              <SubmitInput type="submit" value="남기기" />
            </InputBox>
          </form>
          <CommentBox>
            {items.length > 0
              ? items.map((item) => {
                  const date = new Date(parseInt(item.createdAt));
                  return (
                    <CommentLine key={item.id}>
                      <Comment>{item.payload}</Comment>
                      {isLoggedInVar() ? (
                        <CreateDate
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteFn(item.id)}
                        >
                          ❎
                        </CreateDate>
                      ) : (
                        <CreateDate>
                          {date.getFullYear()}-{date.getMonth()}-
                          {date.getDate()}
                        </CreateDate>
                      )}
                    </CommentLine>
                  );
                })
              : null}
          </CommentBox>
          <PageLine>
            <Cursor disabled={page === 0} onClick={prevPage}>
              {"<"}
            </Cursor>
            <Cursor disabled={page === totalPage} onClick={nextPage}>
              {">"}
            </Cursor>
          </PageLine>
        </TextBox>
      </Container>
    </GAHoc>
  );
};
export default Intro;
