import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CREATE_USER from "../Apollo/mutations/CreateUser";
import { Container } from "../Components/Layout";
import { ColorTitle, Pre, TextBox } from "../Components/Text";
import HeaderTitle from "../Components/Tilte";
import GAHoc from "../GA";
import route from "../route";

const Image = styled.img`
  width: 100vw;
  height: 56.25vw;
  background-color: #85a977;
  max-width: 960px;
  max-height: 540px;
`;

const WhatIsBoogibooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const onCompleted = (data) => {
    const {
      createUser: { id },
    } = data;
    history.push({
      pathname: route.exit,
      state: { userId: id },
    });
  };
  const [createId, { loading }] = useMutation(CREATE_USER, { onCompleted });
  const clickNext = () => {
    if (!loading) {
      createId({
        variables: {
          choice: "",
        },
      });
    }
  };
  return (
    <GAHoc>
      <Container style={{ paddingTop: "0px" }}>
        <HeaderTitle title="부기는요" />
        {/* <ColorTitle>부기북스는</ColorTitle>
        <ColorTitle>독서의 새로운 모습입니다</ColorTitle> */}
        <Image src="./about-boogi1.png" alt="boogibooks-cap1" />
        <ColorTitle style={{ marginTop: "20px", marginBottom: "20px" }}>
          {"독서 친구 부기북스"}
        </ColorTitle>
        <Image src="./about-boogi2.png" alt="boogibooks-cap2" />
        <TextBox>
          <Pre>
            {
              "꾸준히 책읽기가 어렵죠?\n이젠 책읽을 시간이 되면 부기가 알려드릴게요!\n매일 읽은 것을 기록해서 남길 수 있어요!"
            }
          </Pre>
        </TextBox>
        <ColorTitle style={{ marginBottom: "20px" }}>
          {"풍부해지는 책읽기"}
        </ColorTitle>
        <Image src="./about-boogi3.png" alt="boogibooks-cap3" />
        <TextBox>
          <Pre>
            {
              "읽고 있는 책들의 진도율을 확인하고 관리해보세요!\n다른 사람들은 어떤 책을 읽는지 참고해보세요.\n그들이 어떤 감상을 남겼는지도 구경할 수 있어요."
            }
          </Pre>
        </TextBox>
        <ColorTitle style={{ marginBottom: "20px" }}>
          {"다양한 생각의 만남"}
        </ColorTitle>
        <Image src="./about-boogi4.png" alt="boogibooks-cap4" />
        <TextBox>
          <Pre>
            {
              "부기북스는 다양한 곳에서 여러 주제를 모으는 중이에요. 이들 중 정확한 정보를 찾고 필요한 분들께 때맞춰 전달하기 위해서죠. 가장 좋은 형태와 방법을 계속 고민하고 있답니다.\n\n저희는 여러분께 세상의 모든 유용하고 정확한 정보들을 모아 전달하는 것을 목표로 합니다.\n\n부기가 생각하는 좋은 정보들은 우선 책에 있더라구요! 그런 의미에서 부기북스와 함께 독서하실래요?"
            }
          </Pre>
          <Pre
            style={{ textDecoration: "underline", color: "#85a977" }}
            onClick={clickNext}
          >
            부기의 소식을 듣고싶으신가요?
          </Pre>
        </TextBox>
      </Container>
    </GAHoc>
  );
};
export default WhatIsBoogibooks;
