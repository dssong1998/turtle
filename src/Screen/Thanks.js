import { useMutation } from "@apollo/client";
import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import EMAIL_VAL from "../Apollo/mutations/EmailVal";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, TextBox, Pre, P } from "../Components/Text";
import HeaderTitle from "../Components/Tilte";

const Thanks = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  if (!params?.type || !location?.search) {
    history.push("not-accepted");
  }
  const [valEmail, { loading: emailLoad }] = useMutation(EMAIL_VAL);
  const token = location.search.substring(1);

  if (params.type === "email" && !emailLoad) {
    valEmail({
      variables: {
        token,
      },
    });
  }
  return (
    <Container style={{ height: "100%" }}>
      <HeaderTitle title="인증 완료" />
      <TextBox>
        <Logo src="/logo.png" alt="logo" />
        <Info>감사합니다!</Info>
        <P>
          지금 당장 만나뵙고 싶지만 여러분의 독서를 더 잘 도와드리기 위해 조금의
          시간이 더 필요합니다.😭
        </P>
        <Pre>
          {
            "책읽는 거북이 부기는 '부기북스'라는 이름의 어플으로 완전하게 준비되어 플레이스토어와 앱스토어에서 여러분들께 인사드릴거에요!\n등록해주신 이메일로는 다양한 독서관련 컨텐츠와 부기북스 개발일지를 보내드릴 예정이에요!\n부기가 읽는 책 이야기가 궁금하시면 인스타그램에서 @boogibooks를 찾아주세요!"
          }
        </Pre>
      </TextBox>
    </Container>
  );
};
export default Thanks;
