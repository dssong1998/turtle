import React from "react";
import styled from "styled-components";
import { Container } from "../Components/Layout";
import { ColorTitle, P, TextBox } from "../Components/Text";

const Text = styled(P)`
  text-align: left;
  padding: 0;
  margin: 5px 0;
`;

const Schedule = () => {
  return (
    <Container>
      <ColorTitle>부기와 명상록 완독하기</ColorTitle>
      <TextBox>
        <Text>
          부기가 어플을 통해 당신의 독서를 도와주기 위해 열심히 준비중입니다!
        </Text>
        <Text>
          책읽는 거북이 부기는 곧 완전한 모습으로 여러분들께 인사드릴거에요.
        </Text>
      </TextBox>
      <TextBox style={{ alignItems: "flex-start" }}>
        <Text>부기에게 관심이 좀 생기시나요?</Text>
        <Text>
          이메일이나 전화번호를 등록해주시면 부기가 나오는 날 알림을
          보내드리겠습니다.
        </Text>
      </TextBox>
      <TextBox style={{ alignItems: "flex-start" }}>
        <Text>부기의 탄생을 좀 더 많이 기대하고 계신가요?</Text>
        <Text>
          오늘도 부기의 탄생을 위해 최선을 다하고있는 개발자와 디자이너에게 커피
          한 잔의 응원을 보내주시면 정말 감사드리겠습니다!
        </Text>
      </TextBox>
    </Container>
  );
};
export default Schedule;
