import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { TextBox, Title, P, ColorTitle } from "../Components/Text";
import route from "../route";
const TextBlock = styled(TextBox)`
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;
const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  border: 1px solid #85a977;
  background-color: #f1f1f1;
  padding: 10px 5px;
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 10px;
`;
const ChoiceBtn = styled.button`
  font-family: inherit;
  color: #85a977;
  cursor: pointer;
  font-size: 22px;
  width: 40%;
  padding: 10px 0px;
  border-radius: 8px;
  border: 1px solid #85a977;
  background-color: #fefbfb;
  &:first-child {
    margin-right: 12px;
  }
`;
const Question1 = () => {
  const history = useHistory();
  const ToQuestion = () => {
    history.push(route.question1);
  };
  const toPrev = () => {
    history.push(route.home);
  };
  const toNext = () => {
    history.push(route.result);
  };
  return (
    <Container>
      <Logo
        src="/logo.png"
        alt="logo"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <ColorTitle>
        {"아래의 질문에 예 또는 아니오로 대답하고 결과를 제출해주세요"}
      </ColorTitle>
      <TextBlock>
        <Title>질문 1</Title>
        <DetailBox>
          <P>{"요즘 고민거리나 스트레스 받게하는 일이 있으신가요?"}</P>
        </DetailBox>
        <BtnWrapper>
          <ChoiceBtn onClick={ToQuestion}>예</ChoiceBtn>
          <ChoiceBtn onClick={ToQuestion}>아니오</ChoiceBtn>
        </BtnWrapper>
      </TextBlock>
      <TextBlock>
        <Title>질문 2</Title>
        <DetailBox>
          <P>{"요즘 고민거리나 스트레스 받게하는 일이 있으신가요?"}</P>
        </DetailBox>
        <BtnWrapper>
          <ChoiceBtn onClick={ToQuestion}>예</ChoiceBtn>
          <ChoiceBtn onClick={ToQuestion}>아니오</ChoiceBtn>
        </BtnWrapper>
      </TextBlock>
      <TextBlock>
        <Title>질문 3</Title>
        <DetailBox>
          <P>{"요즘 고민거리나 스트레스 받게하는 일이 있으신가요?"}</P>
        </DetailBox>
        <BtnWrapper>
          <ChoiceBtn onClick={ToQuestion}>예</ChoiceBtn>
          <ChoiceBtn onClick={ToQuestion}>아니오</ChoiceBtn>
        </BtnWrapper>
      </TextBlock>
      <TextBlock>
        <Title>질문 4</Title>
        <DetailBox>
          <P>{"요즘 고민거리나 스트레스 받게하는 일이 있으신가요?"}</P>
        </DetailBox>
        <BtnWrapper>
          <ChoiceBtn onClick={ToQuestion}>예</ChoiceBtn>
          <ChoiceBtn onClick={ToQuestion}>아니오</ChoiceBtn>
        </BtnWrapper>
      </TextBlock>
      <TextBlock>
        <Title>질문 5</Title>
        <DetailBox>
          <P>{"요즘 고민거리나 스트레스 받게하는 일이 있으신가요?"}</P>
        </DetailBox>
        <BtnWrapper>
          <ChoiceBtn onClick={ToQuestion}>예</ChoiceBtn>
          <ChoiceBtn onClick={ToQuestion}>아니오</ChoiceBtn>
        </BtnWrapper>
      </TextBlock>
      <LinkWrapper>
        <LinkBtn onClick={toPrev}>이전</LinkBtn>
        <LinkBtn onClick={toNext}>다음</LinkBtn>
      </LinkWrapper>
    </Container>
  );
};
export default Question1;
