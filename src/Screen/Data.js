import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import DATA_QUERY from "../Apollo/queries/SeeDatas";
import { LinkBtn } from "../Components/Button";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { Info, TextBox } from "../Components/Text";
import route from "../route";
const Data = () => {
  const history = useHistory();
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const [query, { loading, data }] = useLazyQuery(DATA_QUERY);
  const [show, setShow] = useState(false);
  const onVal = (data) => {
    const { password } = data;
    if (!loading) {
      query({
        variables: {
          password,
          token: params.secret,
        },
      });
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const ToHome = () => {
    history.push(route.home);
  };
  return (
    <Container>
      <TextBox>
        <Logo src="/logo.png" alt="logo" onClick={() => setShow(true)} />
        <Info>잘못된 페이지입니다</Info>
        <LinkBtn onClick={ToHome}>홈으로 돌아가기</LinkBtn>
      </TextBox>
      {show ? (
        <form onSubmit={handleSubmit(onVal)}>
          <input
            {...register("password")}
            style={{
              backgroundColor: "transparent",
              color: "transparent",
              border: "none",
            }}
          />
          <input
            type="submit"
            style={{
              backgroundColor: "transparent",
              color: "transparent",
              border: "none",
            }}
          />
        </form>
      ) : null}
    </Container>
  );
};
export default Data;
