import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Components/Layout";
import { ColorTitle, Pre, TextBox, Title } from "../../Components/Text";
import route from "../../route";
import { LinkBtn } from "../../Components/Button";
import { useMutation } from "@apollo/client";
import CREATE_USER from "../../Apollo/mutations/CreateUser";
import HeaderTitle from "../../Components/Tilte";
import GAHoc from "../../GA";

const Image = styled.img`
  width: 210px;
  height: 280px;
  background-color: #85a977;
`;

const ResultDH = () => {
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
        state: { bookTitle: "명상록", userId: id },
      });
    } else {
      history.push({
        pathname: route.shortBook,
        state: { bookTitle: "명상록", userId: id },
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
    <GAHoc>
      <Container>
        <HeaderTitle title="명상록" />
        <ColorTitle>이상적이고 아름다운 세상을 꿈꾸는</ColorTitle>
        <ColorTitle style={{ marginBottom: "20px" }}>예언자 타입</ColorTitle>
        <Title style={{ marginBottom: "10px" }}>{"당신에게는 지금"}</Title>
        <Image src="./books/meditations.jpeg" alt="meditations-cover" />
        <Title style={{ marginTop: "10px" }}>{"'명상록'이 필요합니다."}</Title>
        <TextBox style={{ alignItems: "flex-start" }}>
          <ColorTitle style={{ marginTop: "10px" }}>
            {"왜 이 책이냐면요!"}
          </ColorTitle>
          <Pre>
            {
              "밝고 희망찬 미래를 바라고 생각하는 아름다운 당신!\n다같이 행복한 유토피아를 이야기하는\n예언자와 어울리시네요.\n\n꿈꾸고 상상하는 일은 아름답지만\n종종 눈 앞의 문제들을 만날 때는\n이상과 다른 현실에 힘든 날도 있을거에요.\n'명상록'은 그런 힘겨운 오늘들을 훌륭하게 보내기 위해\n필요한 지혜를 담고 있습니다.\n\n다 읽고 난 후에는 좀 더 담담하게\n어려운 문제에 맞서 싸우고\n크고 작게 반복되는 성공과 실패들로부터 의연해진\n자신을 발견할 수 있을거에요."
            }
          </Pre>
          {/* <Pre>
          {
            "'명상록'은 로마의 황제였던\n마르쿠스 아우렐리우스가 쓴 일기형식의 책입니다.\n\n스토아 철학을 근간으로 작가의 사상을 담은\n이 책은 앞으로 당신이 만나게 될\n수많은 장애물과 위험들을 슬기롭게 극복하고\n헤쳐나가는 방법에 대해 이야기합니다.\n\n어려운 이야기가 나오면\n전부 이해하고 기억하려하지 말고\n할아버지의 옛날 이야기를 듣는 기분으로\n가볍게 읽어보세요.\n\n다 읽고 난 후에는\n좀 더 담담하게 어려운 문제에 맞서 싸우고\n크고 작게 반복되는 성공과 실패들로부터 의연해진\n자신을 발견할 수 있을거에요."
          }
        </Pre>*/}
          <ColorTitle style={{ marginTop: "10px" }}>{"부기 이야기"}</ColorTitle>
          <Pre>
            {
              '부기의 어릴적 꿈은 닌자거북이었어요.\n영재소리를 듣던 유망한 닌자거북이 후보였죠.\n악당을 물리치고 좋은 세상을 만드는 꿈을 꿨지만\n불의의 사고로 다리를 다쳐 후보에서 탈락했어요.\n\n다리가 아플 때 마다 속상했지만 명상록의\n구절을 떠올리며 극복하고 마음을 다잡았습니다.\n\n⌜너를 지배하는 정신을 더 이상 산만하게 하지 말고, 마치 지금 죽음을 앞둔 사람인 것처럼 육신을 무시해 버려라.⌟\n\n이제 부기는 책을 읽고 사람들에게 좋은 이야기를 전해\n더 멋진 세상을 만들는 꿈을 꾸고 있답니다.\n\n자신의 인생책이라고 자부하던 부기는 독서 팁이라며 말을 전해달라 부탁했어요.\n\n"어려운 말이 나와 이해가 안 될 때가 있어도 할아버지가 읽어주는 이야기라는 생각으로 쉽게 지나가며 떠오르는 생각들에 집중하면 조금은 편하게 읽을 수 있을거에요!"'
            }
          </Pre>
          <Pre>아래 버튼을 눌러 부기와 함께 책을 읽어볼까요?</Pre>
        </TextBox>
        <LinkBtn onClick={toNext}>읽어보기</LinkBtn>
      </Container>
    </GAHoc>
  );
};
export default ResultDH;
