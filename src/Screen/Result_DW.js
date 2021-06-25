import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Components/Logo";
import { Container } from "../Components/Layout";
import { Pre, TextBox, Title } from "../Components/Text";
import route from "../route";
import { LinkBtn } from "../Components/Button";

const Image = styled.div`
  width: 210px;
  height: 280px;
  background-color: #85a977;
  margin-top: 20px;
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultDW = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const toNext = () => {
    history.push(route.read);
  };
  return (
    <Container>
      <Logo
        src="/logo.png"
        alt="logo"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <Title>{"부기가 당신에게 추천하는 책은"}</Title>
      <Title>{"'명상록'입니다."}</Title>
      <Image>
        <Pre>이미지 들어갈 자리</Pre>
      </Image>
      <TextBox>
        <Pre>
          {
            "'명상록'은 로마의 황제였던\n마르쿠스 아우렐리우스가 쓴 일기형식의 책입니다."
          }
        </Pre>
        <Pre>
          {
            "스토아 철학의 정수라고 이야기되는\n이 책은 앞으로 당신이 만나게 될\n수많은 장애물과 위험들을 슬기롭게 극복하고\n헤쳐나가는 방법에 대해 이야기합니다."
          }
        </Pre>
        <Pre>
          {
            "할아버지의 옛날 이야기를 듣는 기분으로\n가볍게 읽다보면 좀 더 담담하게\n어려운 문제에 맞서 싸우고\n크고 작은 성공과 실패들로부터 의연해진\n 자신을 발견할 수 있을거에요."
          }
        </Pre>
      </TextBox>
      <TextBox>
        <Pre>아래 버튼을 눌러 부기와 함께 책을 읽어볼까요?</Pre>
      </TextBox>
      <LinkBtn onClick={toNext}>읽어보기</LinkBtn>
    </Container>
  );
};
export default ResultDW;
