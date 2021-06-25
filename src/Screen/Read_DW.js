import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { TextBox, ColorTitle, Pre, Title } from "../Components/Text";
import route from "../route";

const ReadDW = () => {
  const history = useHistory();
  const toShortBook = () => {
    history.push(route.shortBook);
  };
  const toSchedule = () => {
    history.push(route.schedule);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Logo src={"/logo.png"} alt={"logo"} />
      <TextBox>
        <ColorTitle>부기가 소개하는 두가지 책읽는 방법!</ColorTitle>
      </TextBox>
      <TextBox>
        <Title>방법 1.</Title>
        <Pre>
          {
            "부기가 정해주는 목표와 일정에 맞추어\n꾸준히 책을 읽어나가요.\n읽은 날마다 남긴 짧은 요약과 감상은\n성희의 짧은 명상록으로 출간되어\n사람들이 볼 수 있게 공개됩니다.\n10일동안 명상록 읽기를 시작해볼까요?"
          }
        </Pre>
        <LinkBtn
          onClick={toSchedule}
          style={{ width: "100%", marginBottom: "15px" }}
        >
          일정에 맞춰 완독하기
        </LinkBtn>
        <Title>방법 2.</Title>
        <Pre>
          {
            "바쁜 일상을 보내는 성희님을 위해\n부기가 짧은 책을 마련해두었어요\n결제를 통해 부기의 짧은 책을 구매하고\n10일의 독서를 하루로 줄일 수 있어요.\n지금 부기가 열심히 요약한 짧은 책을 읽어볼까요?"
          }
        </Pre>
        <LinkBtn onClick={toShortBook} style={{ width: "100%" }}>
          짧은 책으로 읽기
        </LinkBtn>
      </TextBox>
    </Container>
  );
};
export default ReadDW;
