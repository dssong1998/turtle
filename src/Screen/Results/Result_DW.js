import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Components/Layout";
import { ColorTitle, Pre, TextBox, Title } from "../../Components/Text";
import route from "../../route";
import { LinkBtn } from "../../Components/Button";
import { useMutation } from "@apollo/client";
import CREATE_USER from "../../Apollo/mutations/CreateUser";

const Image = styled.img`
  width: 210px;
  height: 280px;
  background-color: #85a977;
`;

const ResultDW = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const location = useLocation();
  const manners = location?.state?.manners;
  const onCompleted = (data) => {
    const {
      createUser: { id },
    } = data;
    if (manners === "schedule") {
      history.push({
        pathname: route.schedule,
        state: { bookTitle: "마지막 몰입", userId: id },
      });
    } else {
      history.push({
        pathname: route.shortBook,
        state: { bookTitle: "마지막 몰입", userId: id },
      });
    }
  };
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted,
  });
  const toNext = () => {
    if (!manners) {
      alert("검사를 수행하신 분만 다음으로 넘어갈 수 있습니다.");
      history.push("/");
      return;
    }
    if (manners === "schedule") {
      if (!loading) {
        createUser({
          variables: {
            choice: manners,
          },
        });
      }
    } else {
      if (!loading) {
        createUser({
          variables: {
            choice: manners,
          },
        });
      }
    }
  };
  return (
    <Container>
      <ColorTitle>한계는 없다! 매일 성장하는</ColorTitle>
      <ColorTitle style={{ marginBottom: "20px" }}>수퍼히어로 타입</ColorTitle>
      <Title style={{ marginBottom: "10px" }}>{"당신에게는 지금"}</Title>
      <Image src="./books/limitless.jpeg" alt="limitless-cover" />
      <Title style={{ marginTop: "10px" }}>
        {"'마지막 몰입'이 필요합니다."}
      </Title>
      <TextBox style={{ alignItems: "flex-start" }}>
        <ColorTitle style={{ marginTop: "10px" }}>
          {"왜 이 책이냐면요!"}
        </ColorTitle>
        <Pre>
          {
            "더 근사하게 발전하는 당신은 성장형 인간!\n그 끝에는 수퍼히어로가 되어 있을 것 같네요.\n\n늘상 새로운 것을 배우고 발전하기 위해\n고민하는 일은 쉬운 일이 아닙니다.\n가끔은 이게 맞는지, 잘하고 있는지 헷갈리기도 할거에요.\n\n'마지막 몰입'은 그런 당신에게 필요한 다양한 정보를\n담고 있습니다.\n\n배워보고 싶었던 것이 있다면\n이 책에서 소개하는 방법을 이용해\n삶에 적용해 보는건 어떨까요?"
          }
        </Pre>
        {/* <Pre>
          {
            "'마지막몰입'은 세계적인 브레인 코치\n짐 퀵이 쓴 자기계발서입니다.\n\n마인드셋, 동기부여, 방법 이 세가지로 영역을 나누어\n목표 달성을 얻기위해 몰입할 수 있는 방법을\n상세하게 안내합니다.\n\n교과서처럼 필요한 내용에 힘을 주어 읽고나면\n성장을 원하는 당신의 삶에 큰 도움이 되는\n중요한 팁을 많이 얻을 수 있을거에요.\n\n배워보고 싶었던 것이 있다면\n이 책에서 소개하는 방법을 이용해\n삶에 적용해 보는건 어떨까요?\n\n분명 당신이 정말 좋아할거에요!"
          }
        </Pre>*/}
        <ColorTitle style={{ marginTop: "10px" }}>{"부기 이야기"}</ColorTitle>
        <Pre>
          {
            '부기는 동해바다에 소문난 똥손입니다.\n거북이에게 해변가에 멋진 그림을 남기는 일은\n정말 중요한 일 중 하나거든요.\n\n부기는 열심히 연습했지만 실력이 늘지 않아 좌절했어요.\n그러다 마지막 몰입을 읽고 중요한 사실을 알게됐죠.\n\n⌜지금의 현실과 원하는 현실 간에 차이가 있다면 그 이유는 마인드셋, 동기, 방법의 한계 중 하나 이상에 갇혀 있기 때문이다.⌟\n\n부기는 마인드셋, 동기, 방법을 점검하고\n책에서 본 것들을 적용해가며 다시 열심히 연습했어요.\n\n요즘엔 해변에 나가 당당히 그림을 남기고 온다고 해요.\n\n부기는 이 책을 골라 추천하며\n당신이라면 분명 좋아할거라고 이야기하고는\n하고싶은 말이 있다며 전해 달라 했어요.\n\n"해보고 싶었던게 있다면 더 이상 주저하지 마세요.\n당신의 한계는 없고 필요한건 모두 당신이 내먼에 담고 있으니까요."\n\n동해에 여행갈 일이 있다면 해변가에 남겨진\n아름다운 무늬는 눈여겨보세요!\n부기가 그리고 간 걸지도 모르니까요.'
          }
        </Pre>
        <Pre>아래 버튼을 눌러 부기와 함께 책을 읽어볼까요?</Pre>
      </TextBox>
      <LinkBtn onClick={toNext}>읽어보기</LinkBtn>
    </Container>
  );
};
export default ResultDW;

//
