import React from "react";
import styled from "styled-components";
const { innerWidth: WIDTH } = window;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: ${WIDTH > 985 ? "row" : "column"};
  justify-content: center;
  align-items: center;
  background-color: #14a76c;
  white-space: normal;
  padding: 40px 20px;
  padding-bottom: 20px;
  height: 100vh;
`;
const Logo = styled.img`
  width: 180px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #edf5e1;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  margin: 15px 0px;
  font-size: 14px;
  font-family: "Nanum Gothic", sans-serif;
`;
const Contents = () => {
  return (
    <Container>
      <TextBlock>
        <Logo src="/logo.png" alt="logo" />
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>안녕하세요!</h1>
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>
          저는 책읽는 거북이
        </h1>
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>부기에요.</h1>
        <P>당신의 새로운 친구, 부기가 곧 찾아옵니다.</P>
      </TextBlock>
    </Container>
  );
};
export default Contents;
