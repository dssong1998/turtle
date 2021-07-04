import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import EMAIL_SEND from "../Apollo/mutations/EmailSend";
import PHONE_VAL from "../Apollo/mutations/PhoneVal";
import { Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import { ColorTitle, P, Pre, TextBox } from "../Components/Text";
const TextBlock = styled(TextBox)`
  align-items: flex-start;
`;
const Text = styled(P)`
  text-align: left;
  padding: 0;
  margin: 5px 0;
`;
const InfoText = styled(P)`
  text-align: left;
  padding: 0;
  margin: 5px 0;
  font-size: 8px;
`;
const QR = styled.img`
  width: 150px;
  height: 150px;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  flex-direction: column;
`;
const TextInput = styled.input`
  margin: 5px 0px;
  padding: 5px 8px;
  width: 180px;
`;
const PhoneInput = styled.input`
  margin: 5px 5px;
  padding: 5px 8px;
  max-width: 70px;
`;
const SubmitInput = styled.input`
  margin-top: 10px;
  padding: 8px 10px;
  background-color: #85a977;
  color: #fefefb;
  font-family: "Do Hyun";
  border: none;
  width: 180px;
  border-radius: 5px;
`;

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const history = useHistory();
  if (!location?.state?.bookTitle || !location?.state?.userId) {
    history.push("/not-accepted");
  }
  const [contact, setContact] = useState(true);
  const [show, setShow] = useState(false);
  const [emailVal, { loading: emailLoad }] = useMutation(EMAIL_SEND);
  const [PhoneVal, { loading: phoneLoad }] = useMutation(PHONE_VAL);
  const { register, handleSubmit, watch, setValue } = useForm();
  const onValid = async (data) => {
    if (data.email) {
      if (!emailLoad) {
        emailVal({
          variables: {
            id: location.state.userId,
            email: data.email,
          },
        });
      }
    }
    if (data.phone1 && data.phone2 && data.phone3) {
      const phone = [data.phone1, data.phone2, data.phone3].join("");
      if (!phoneLoad) {
        PhoneVal({
          variables: {
            id: location.state.userId,
            phone,
          },
        });
      }
    }
    setContact(false);
  };
  return (
    <Container>
      <Logo src="./logo.png" alt="logo" />
      <ColorTitle>부기와 {location?.state?.bookTitle} 완독하기</ColorTitle>
      <TextBox>
        <Text>안녕하세요! 저희는 부기북스 어플을 개발 중인 부기들입니다!</Text>
        <Text>
          책의 가치를 믿는 저희는 어떻게하면 책을 꾸준히, 잘 읽을 수 있을지
          고민하고 공부했고 그 결과 책읽는 거북이 부기가 탄생했습니다.
        </Text>
        <Text>
          부기는 당신이 책을 읽는 동안 포기하지 않도록, 좀 더 재밌게 책을 읽을
          수 있도록 옆에서 함께 읽는 좋은 책 친구가 될거에요.
        </Text>
      </TextBox>
      <TextBox>
        <Text>
          당장 만나뵙고 싶지만 여러분들께 완벽한 서비스를 제공하기 위해 약간의
          시간이 필요합니다😢
        </Text>
        <Text>
          책읽는 거북이 부기는 "부기북스"라는 이름의 어플으로 완전하게 준비되어
          플레이스토어와 앱스토어에서 여러분들께 인사드릴거에요!
        </Text>
      </TextBox>
      {contact ? (
        <TextBlock>
          <Pre>
            {
              "작은 관심의 표시로 연락처를 알려주세요!\n부기가 무얼 하고 있는지 꾸준히 알려드릴게요."
            }
          </Pre>
          <Form onSubmit={handleSubmit(onValid)}>
            <TextInput {...register("email")} placeholder="이메일" />
            <Text>OR</Text>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <PhoneInput
                {...register("phone1")}
                placeholder="010"
                onChange={(e) => {
                  e.preventDefault();
                  if (e.target.value.length > 3) {
                    setValue("phone1", watch("phone1"));
                    return;
                  }
                  setValue("phone1", e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              <Text>_</Text>
              <PhoneInput
                {...register("phone2")}
                placeholder="1234"
                onChange={(e) => {
                  e.preventDefault();
                  if (e.target.value.length > 4) {
                    setValue("phone2", watch("phone2"));
                    return;
                  }
                  setValue("phone2", e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              <Text>_</Text>
              <PhoneInput
                {...register("phone3")}
                placeholder="5678"
                onChange={(e) => {
                  e.preventDefault();
                  if (e.target.value.length > 4) {
                    setValue("phone3", watch("phone3"));
                    return;
                  }
                  setValue("phone3", e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
            </div>
            <SubmitInput type="submit" value="관심있어요!" />
          </Form>
          <InfoText>
            * 여러분의 연락처는 데이터 수집과 정보 안내를 위해서만 저장되며
            안전하게 보호되고 어디에도 제공되지 않습니다.
          </InfoText>
          <Text>
            여러분이 부기에게 보내주시는 관심을 에너지 삼아 부기는 더 열심히
            달릴 수 있습니다!
          </Text>
        </TextBlock>
      ) : (
        <Pre>
          {
            "이메일을 알려주신 분들께는 인증 메일이 전송됩니다!\n인증을 완료하고 선물을 받아가세요!"
          }
        </Pre>
      )}
      <TextBox>
        <Text
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => setShow(!show)}
        >
          어때요? 부기가 꽤 마음에 드셨나요?(클릭)▼
        </Text>
        {show ? (
          <>
            <Pre>
              {
                "대학생으로 구성된 저희는 부기북스의 탄생을 위해 매일 (개)고생 중입니다😂\n\nQR코드를 인식하거나 아래의 링크를 클릭해 부기들을 위해 커피 한 잔의 응원을 보내주신다면 정말 큰 힘이 될거에요!"
              }
            </Pre>
            <a href="https://toss.me/boogibooks">
              <QR src="./remit.png" alt="remit" />
            </a>
            <a
              style={{ textDecoration: "underline", marginTop: "10px" }}
              href="https://toss.me/boogibooks"
            >
              링크로 커피 값을 보내 부기 응원하기
            </a>
            <Pre>
              {
                "저희에게 응원을 보내주신 분들께는 부기 캐릭터 굿즈를 선물로 보내드릴게요!"
              }
            </Pre>
          </>
        ) : null}
      </TextBox>
    </Container>
  );
};
export default Schedule;
