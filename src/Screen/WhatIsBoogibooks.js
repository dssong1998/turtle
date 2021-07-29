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
  height: 100vw;
  background-color: #85a977;
  max-width: 900px;
  max-height: 900px;
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
      <Container>
        <HeaderTitle title="부기는요" />
        <ColorTitle style={{ marginBottom: "20px" }}>
          책읽는 거북이 부기에 대하여
        </ColorTitle>
        <Image src="./resume.png" alt="boogi-resume" />
        <TextBox style={{ alignItems: "flex-start" }}>
          <ColorTitle style={{ marginTop: "10px" }}>
            {"부기는 퀴즈대회 거북대표입니다"}
          </ColorTitle>
          <Pre>
            {
              "거북이와 토끼는 오래 전부터\n각종 대회를 열며 승부를 겨뤄왔더랬죠.\n처음 시작은 모두들 잘 아는 달리기 시합이었구요\n부기의 할아버지는 그날의 달리기 주자였죠.\n\n어릴 때부터 할아버지의 이야기를 들으며\n거북대표의 꿈을 키우던 부기는\n책을 읽는 것을 좋아하는만큼\n퀴즈대회에 참가하기로 결심했어요.\n\n들어보니 토끼들이 지내는 육지에는\n인터넷이 빵빵 터진다더라구요.\n책 몇권 쯤이야 유튜브와 구글에 검색하면\n다 된다면서요?\n\n그래서 부기도 고향을 떠나 육지로 올라왔어요.\n그치만 책 읽는걸 좋아하는만큼\n대충 검색해서 공부하려는건 아니구요\n\n온 세상 사람들을 다 만날 수 있다는 인터넷에서\n다른 사람들과 함께 책을 읽어보려구요!\n\n여러분! 부기와 함께 책읽기, 도와주실거죠?"
            }
          </Pre>
          <ColorTitle style={{ marginTop: "10px" }}>
            {"부기는 꿈이 있어요"}
          </ColorTitle>
          <Pre>
            {
              "육지에 올라와 책 읽는 사람들을 찾아다녔는데\n꽤 많은 사람들이 책에 관심이 없더라구요.\n책 읽기를 선뜻 시작하기가 어려워 그런가봐요.\n\n그래서 사람들이 책에 좀 더 쉽게 다가가기 위해\n먼저 책을 읽어 온 사람들이 도와 줄 수 있는\n방법이 없을까 고민해봤어요.\n\n부기의 꿈은 어디서든 흔하게\n책 이야기를 하는거에요\n나의 생각을 담아 이야기 하고\n상대의 생각이 담긴 이야기를 듣는거죠!\n\n다른 생각들을 만나 나의 생각을 만드다는게\n정말 멋지지 않나요?\n부기는 함께 이야기를 나눌 친구들을\n찾아다니는 중이에요.\n\n부기의 첫번째 책친구가 되어주시겠어요?"
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
