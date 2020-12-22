import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 1000px;
  width: 2000px;
  background: rgb(34, 31, 188);
  background: linear-gradient(
    rgba(34, 31, 188, 1) 0%,
    rgba(218, 212, 255, 1) 100%
  );
  bottom: -500px;
  right: -1000px;
  transform: rotate(130deg);
  border-radius: 60%;
  z-index: -1;
`;

export const HrLong = styled.div`
  padding: 0;
  height: 4px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 24px;
  border-radius: 50px;
`;
export const HrShort = styled(HrLong)`
  margin-top: 8px;
  width: 40px;
`;
