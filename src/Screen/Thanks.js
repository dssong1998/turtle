import { useMutation } from "@apollo/client";
import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import EMAIL_VAL from "../Apollo/mutations/EmailVal";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, TextBox } from "../Components/Text";

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
      <TextBox>
        <Logo src="/logo.png" alt="logo" />
        <Info>감사합니다!</Info>
      </TextBox>
    </Container>
  );
};
export default Thanks;
