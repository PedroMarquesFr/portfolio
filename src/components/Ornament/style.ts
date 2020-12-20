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
