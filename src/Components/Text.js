import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  text-shadow: 1px 0px 0px gray;
  width: 95%;
  color: #3a3a3a;
`;
export const Info = styled.h1`
  font-size: 32px;
  text-align: center;
`;
export const P = styled.p`
  color: #2a2a2a;
  text-align: center;
  line-height: 18px;
  margin: 15px 0px;
  font-size: 14px;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 600;
`;
export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #85a977;
  justify-content: center;
  align-items: center;
  max-width: 930px;
  padding: 30px 20px;
`;
export const Pre = styled.pre`
  color: #2a2a2a;
  text-align: left;
  line-height: 20px;
  margin: 20px 0px;
  font-size: 14px;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 600;
  white-space: pre-wrap;
`;
export const ColorTitle = styled(Title)`
  color: #85a977;
`;
