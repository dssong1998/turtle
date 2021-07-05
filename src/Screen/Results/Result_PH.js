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

const ResultPH = () => {
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
        state: { bookTitle: "마음챙김의 시", userId: id },
      });
    } else {
      history.push({
        pathname: route.shortBook,
        state: { bookTitle: "마음챙김의 시", userId: id },
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
        <HeaderTitle title="마음챙김의 시" />
        <ColorTitle>누구보다 사람을 사랑하는</ColorTitle>
        <ColorTitle style={{ marginBottom: "20px" }}>
          산타클로스 타입
        </ColorTitle>
        <Title style={{ marginBottom: "10px" }}>{"당신에게는 지금"}</Title>
        <Image src="./books/poet.jpeg" alt="poet-cover" />
        <Title style={{ marginTop: "10px" }}>
          {"'마음챙김의 시'가 필요합니다."}
        </Title>
        <TextBox style={{ alignItems: "flex-start" }}>
          <ColorTitle style={{ marginTop: "10px" }}>
            {"왜 이 책이냐면요!"}
          </ColorTitle>
          <Pre>
            {
              "사람을 사랑하고 늘 주변을 돌보는 당신!\n아낌없이 사람들에게 선물을 주는\n산타클로스와 어울리시네요.\n\n옆에 있는 사람들의 장점을 보고\n좋은 이야기를 전하는 당신의 모습은\n세상을 아름답게 하는 시의 문장들과 닮아있습니다.\n'마음챙김의 시'는 희망을 더 담아낸 것들을 모아\n사랑으로 채워진 당신의 삶을 응원합니다.\n\n한 장만 읽고 덮어도 괜찮으니\n조용한 곳에서 천천히 읽고\n마음 속에서 떠오른 수많은 아름다운 감정을\n부기에게도 들려주면 고마울거에요."
            }
          </Pre>
          {/* <Pre>
          {
            "'마음챙김의 시'는 코로나로 인해 서로의 간격이 멀어진\n최근의 우리를 위해 쓰여진 시집입니다.\n\n시는 단어와 문장을 긴 고민 끝에 골라\n아름답게 감정을 담아내는 형식입니다.\n\n시는 특별히 무엇을 전달하려하지 않고\n읽는 사람 안에서 깨어나는 모든 감정을\n전달하고자 했던 것으로 여긴답니다.\n\n당신같이 아름답고 선한 사람에게는\n내면 속에 원래 있던 감정을 깨우는 것이\n가장 아름다운 예술일거에요.\n\n한 장만 읽고 덮어도 괜찮으니\n조용한 곳에서 천천히 읽고\n마음 속에서 떠오른 수많은 아름다운 마음을\n부기에게도 들려주면 고마울거에요."
          }
        </Pre>*/}
          <ColorTitle style={{ marginTop: "10px" }}>{"부기 이야기"}</ColorTitle>
          <Pre>
            {
              '부기는 친구들을 좋아합니다.\n친구들이 늘 행복하면 좋겠지만\n답답한 미래를 걱정하는 친구들은\n만날 때마다 고민 이야기를 털어놓습니다.\n\n괜히 복잡한 마음으로 시집을 읽던 부기는\n존 오도나휴의 "흐르는"을 읽고는\n희망의 감정을 마주합니다.\n그리고 친구들에게 시를 보내주기로 했죠.\n\n⌜강이 흐르듯이\n살고 싶다.\n자신이 펼쳐 나가는\n놀라움에 이끌려\n흘러가는.⌟\n\n시를 읽던 자신의 감정이 꽤 마음에 들었는지\n부기는 당신이 꼭 이 책을 읽어봤으면 좋겠다고 해요.\n그러면서 이 말을 꼭 좀 전해달라고 덧붙였어요.\n\n"당신같이 아름답고 선한 사람에게는\n내면 속에 원래 있던 감정을 깨우는 것이\n가장 아름다운 예술일거에요."'
            }
          </Pre>
        </TextBox>
        <Pre>아래 버튼을 눌러 부기와 함께 책을 읽어볼까요?</Pre>
        <LinkBtn onClick={toNext}>읽어보기</LinkBtn>
      </Container>
    </GAHoc>
  );
};
export default ResultPH;
