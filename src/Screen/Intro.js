import React from "react";
import { useHistory } from "react-router-dom";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, Pre, TextBox } from "../Components/Text";
import HeaderTitle from "../Components/Tilte";
import route from "../route";
const Intro = () => {
  const history = useHistory();
  const ToQuestion = () => {
    history.push(route.question1);
  };
  return (
    <Container style={{ height: "100%" }}>
      <HeaderTitle title="시작하기" />
      <TextBox>
        <Logo src="/logo.png" alt="logo" />
        <Info>안녕하세요!</Info>
        <Info>저는 책읽는 거북이</Info>
        <Info>부기에요.</Info>
        <Pre>
          {
            "제가 지금의 당신께 꼭 맞는 책을 골라드릴게요.\n아래 버튼을 눌러 나오는 몇가지 질문에 대답해 주세요."
          }
        </Pre>
        <LinkBtn onClick={ToQuestion}>시작하기</LinkBtn>
      </TextBox>
    </Container>
  );
};
export default Intro;
