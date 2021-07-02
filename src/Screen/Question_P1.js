import { useHistory } from "react-router-dom";
import Logo from "../Components/Logo";
import { TextBox, Title, ColorTitle, Pre } from "../Components/Text";
import route from "../route";

const TextBlock = styled(TextBox)`
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 10px 0px;
  width: 100%;
  min-height: 70px;
  border-radius: 8px;
  border: 1px solid #85a977;
  background-color: #f1f1f1;
  padding: 10px 7px;
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 10px;
`;
const ChoiceBtn = styled.button`
  font-family: inherit;
  color: ${(props) => (props.chosen ? "#fefbfb" : "#85a977")};
  cursor: pointer;
  font-size: 22px;
  width: 40%;
  padding: 10px 0px;
  border-radius: 8px;
  border: 1px solid #85a977;
  background-color: ${(props) => (props.chosen ? "#85a977" : "#fefbfb")};
  &:first-child {
    margin-right: 12px;
  }
`;

const Question1 = () => {
  const history = useHistory();
  const questions = [
    "좋아하는 노래 가사는 주로 어떤 내용인가요?",
    "너무나도 행복하고 미련없이 삶을 마치고 다음 생을 향해 가는 길, 신이 나타나 문을 열어주며 상으로 다음 생을 위한 소원을 한가지 묻습니다.\n신에게 어떤 부탁을 하고싶나요?",
    "중요한 미팅에서 실수를 한 동료가 우울해하고 있네요. 당신이라면 어떤 말로 위로를 전할까요?",
    "학교생활에서 더 중요하다고 생각되는 건 무엇인가요?",
    "같은 팀의 동기가 프로젝트 중에 큰 실수를 했고 그 탓에 퇴근 직전에 많은 업무가 생긴 상황입니다.\n팀장님께 불려가 혼나고 돌아온 동기는 멘탈을 놓은듯 보이네요.\n\n어떤 말을 해주고싶나요?",
    "당신이 좀 더 근사하다고 생각하는 말은 무엇인가요?",
    "책을 읽을 때 좀 더 선호하는 방법은 무엇인가요?",
  ];
  const options = [
    "A. 자존감 뿜뿜! 스웩 넘치는 가사.\n\nB. 달달한 사랑이야기가 담긴 가사.",
    "A. 매일 오늘이 어제보다 나은 삶을 살고싶습니다.\n\nB. 그저 매순간을 행복하게 살고 싶습니다.",
    "A. 다음 주에 월급날 있잖아, 고생했으니까 내가 쏠게\n그거 생각하면서 한 주만 힘내자!!\n\nB. 너가 만들어 온 자료 너무 좋더라 참석한 사람들이 다들 칭찬했어!",
    "A. 공부 열심히해서 좋은 성적 받고 명문대 가기!\n\nB. 친구들과 좋은 추억을 많이 남기기!",
    "A. 괜찮아? 힘들지? 그래도 일단 업무가 너무 밀렸으니까 빨리 일 다시 하자.\n\nB. 아까 보니까 많이 혼나던데.. 괜찮아? 마음 좀 추스리게 일단 밖에서 커피라도 한잔 하고 오자.",
    "A. 내가 꼭 한국 부자 10위안에 들고 말겠어!\n\nB. 내가 왕년엔 한국 부자 10위안에 들었지..",
    "A. 완독하는게 중요한거지! 하루하루 조금씩 계획적으로 읽어봐야지\n\nB. 중요한 내용만 뽑아서 읽으면 되는거 아냐? 차라리 요약본 같은게 있으면 좋겠다",
  ];
  const [choice, setChoice] = useState(["", "", "", "", "", "", ""]);
  const clickChoice = (idx, target) => {
    setChoice(
      choice.map((val, index) => {
        if (idx === index) {
          if (val !== target) {
            return target;
          } else {
            return "";
          }
        }
        return val;
      })
    );
  };
  const toPrev = () => {
    history.push(route.home);
  };
  const toNext = () => {
    if (choice.filter((val) => val === "").length > 0) {
      alert("모든 문제에 답변하고 넘어가주세요.");
      return;
    }
    let tScr = 0,
      nScr = 0;
    choice.map((v, i) => {
      if (v === "A") {
        if (i === 0 || i === 3 || i === 4) {
          tScr++;
        } else if (i === 1 || i === 2 || i === 5) {
          nScr++;
        }
      }
      return v;
    });
    if (tScr > 1) {
      if (nScr > 1) {
        history.push({
          pathname: route.result_nt,
          state: {
            manners: choice[6] === "A" ? "schedule" : "short-book",
          },
        });
      } else {
        history.push({
          pathname: route.result_st,
          state: {
            manners: choice[6] === "A" ? "schedule" : "short-book",
          },
        });
      }
    } else {
      if (nScr > 1) {
        history.push({
          pathname: route.result_nf,
          state: {
            manners: choice[6] === "A" ? "schedule" : "short-book",
          },
        });
      } else {
        history.push({
          pathname: route.result_sf,
          state: {
            manners: choice[6] === "A" ? "schedule" : "short-book",
          },
        });
      }
    }
  };

  return (
    <Container>
      <Logo
        src="/logo.png"
        alt="logo"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <ColorTitle>
        {"아래의 질문에 A 또는 B를 골라 대답하고 결과를 제출해주세요"}
      </ColorTitle>
      {questions.map((val, idx) => {
        return (
          <TextBlock key={idx}>
            <Title>질문 {idx + 1}</Title>
            <DetailBox>
              <Pre>{val}</Pre>
              <Pre>{options[idx]}</Pre>
            </DetailBox>
            <BtnWrapper>
              <ChoiceBtn
                onClick={() => clickChoice(idx, "A")}
                chosen={Boolean(choice[idx] === "A")}
              >
                A
              </ChoiceBtn>
              <ChoiceBtn
                onClick={() => clickChoice(idx, "B")}
                chosen={Boolean(choice[idx] === "B")}
              >
                B
              </ChoiceBtn>
            </BtnWrapper>
          </TextBlock>
        );
      })}
      <LinkWrapper>
        <LinkBtn onClick={toPrev}>이전</LinkBtn>
        <LinkBtn onClick={toNext}>결과 제출하기</LinkBtn>
      </LinkWrapper>
    </Container>
  );
};
export default Question1;
