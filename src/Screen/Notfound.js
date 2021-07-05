import React from "react";
import { useHistory } from "react-router-dom";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, TextBox } from "../Components/Text";
import HeaderTitle from "../Components/Tilte";
import GAHoc from "../GA";
import route from "../route";
const Notfound = () => {
  const history = useHistory();
  const ToHome = () => {
    history.push(route.home);
  };
  return (
    <GAHoc>
      <Container>
        <HeaderTitle title="오류" />
        <TextBox>
          <Logo src="/logo.png" alt="logo" />
          <Info>잘못된 페이지입니다</Info>
          <LinkBtn onClick={ToHome}>홈으로 돌아가기</LinkBtn>
        </TextBox>
      </Container>
    </GAHoc>
  );
};
export default Notfound;
