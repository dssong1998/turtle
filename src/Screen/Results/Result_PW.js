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

const ResultPW = () => {
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
        state: { bookTitle: "대학생의 착각", userId: id },
      });
    } else {
      history.push({
        pathname: route.shortBook,
        state: { bookTitle: "대학생의 착각", userId: id },
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
      <ColorTitle>어떤 문제도 가뿐하게 해치우는</ColorTitle>
      <ColorTitle style={{ marginBottom: "20px" }}>만능해결사 타입</ColorTitle>
      <Title style={{ marginBottom: "10px" }}>{"당신에게는 지금"}</Title>
      <Image src="./books/delusion.jpeg" alt="delusion-cover" />
      <Title style={{ marginTop: "10px" }}>
        {"'대학생의 착각'이 필요합니다."}
      </Title>
      <TextBox style={{ alignItems: "flex-start" }}>
        <ColorTitle style={{ marginTop: "10px" }}>
          {"왜 이 책이냐면요!"}
        </ColorTitle>
        <Pre>
          {
            "눈앞에 펼쳐진 일! 주어진 일! 모두 완벽하게 해내는\n주변 사람들의 수호신 같은 당신은\n만능해결사 타입이시네요.\n\n문제가 생기면 누구보다 완벽하게 해결해 내지만\n문제가 늘상 있는건 아니죠.\n평화롭게 지나가는 날들도 정말 많을거에요.\n그런 평화가 오면 무엇을 해야할지 몰라\n방황하기도 합니다.\n\n주어진 일을 잘 해내는 것은 훌륭한 능력이지만\n주어진 일만 하는 것은 단점이 될 수도 있어요.\n\n'대학생의 착각'은 꾸준히 미래를 생각하며 나아가라는\n인생 선배의 바람을 담고 있습니다.\n\n대학생이라면 전체를 읽어도 좋지만\n사회인이라면 목차를 보고 필요한 부분만 골라\n빠르게 읽고 거시적 목표의 중요성을 느끼기만해도\n좋은 독서가 될거에요!"
          }
        </Pre>
        {/* <Pre>
          {
            "'대학생의 착각은' 양희승 교수님의\n시간관리에 대한 생각을 담은 책입니다.\n\n책의 내용은 대학 생활을 중점으로 쓰여있지만\n사실 우리는 고등학교 졸업과 대학 입학의 과정을\n매순간 겪으며 살고 있습니다.\n\n시험이 끝날 때, 중요한 프로젝트•미팅이 끝날 때.\n목표를 정하고 열심히 달리다 그것이 끝이나면\n시간관리에 대한 노하우가 없는 우리는 쉽게 방황하죠\n\n그런 우리가 목표에 대해 어떻게 생각해야하는지\n무엇을 목적으로 생활을하고 시간을 보내야하는지\n한 번쯤 고민할 수 있는 기회를 주는 책이에요.\n\n대학생이라면 전체를 읽어도 좋지만\n사회인이라면 목차를 보고 필요한 부분의 생각들만\n빠르게 읽고 거시적 목표의 중요성을 느끼기만해도\n좋은 독서가 될거에요!"
          }
        </Pre>*/}
        <ColorTitle style={{ marginTop: "10px" }}>{"부기 이야기"}</ColorTitle>
        <Pre>
          {
            '부기는 용궁에도 소문난 달리기 실력자였어요.\n당연히 토끼와의 달리기 시합 대표는 부기였죠.\n\n그런데 시합을 앞둔 부기가 다리를 다치게 된거에요.\n그래서 다들 시합을 취소하자고 얘기했지만\n양희승 교수님 말씀을 떠올린 부기는 시합을 하자 했어요.\n\n⌜뭔가 부닥쳐보고 실패하면서 배워가야 하는데 쉽고 빠른 요령만 익히려고 한다. 그렇게 크면 사회에서 성공하기 어렵다.⌟\n\n느린 걸음 탓에 실패하더라도 일단 부딪혀보고 싶었어요.\n이 시합에서 이기지 못한다고 하더라도 괜찮으니\n그 다음을 보며 계속 앞으로 나가는 사람이 되고싶었죠.\n\n낮잠을 자는 토끼를 제칠 때도, 결승선을 통과할 때도\n부기는 묵묵히 앞으로 걸어가기만 했어요.\n용궁 역사상 처음으로 거북이가 토끼를 이긴 순간은 그렇게 탄생했답니다.\n\n당신에게 그 때 읽었던 대학생의 착각을 추천하고 싶다며\n부기가 그날 경주를 마친 후 말한 소감을 함께 전해줬어요.\n\n"토끼는 결승선까지 달리는 중이었고\n저는 무한히 앞으로 가고있었어요.\n더 먼 곳을 보는 거북이가 이긴건 이변이 아니라고\n꼭 이야기하고 싶습니다."'
          }
        </Pre>
      </TextBox>
      <Pre>아래 버튼을 눌러 부기와 함께 책을 읽어볼까요?</Pre>
      <LinkBtn onClick={toNext}>읽어보기</LinkBtn>
    </Container>
  );
};
export default ResultPW;
