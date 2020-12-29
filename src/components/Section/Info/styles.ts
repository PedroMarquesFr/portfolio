import styled from "styled-components";
export const Container = styled.div`
  width: 45%;

  @media only screen and (max-width: 1200px) {
    width: unset;
    padding-bottom: 60px;
  }
`;

interface Props {
  bold: boolean;
}
export const Resume = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-weight: ${(props: Props) => (props.bold ? 700 : 400)};
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  padding: 5px 0 28px 0;
  color: ${(props) => props.theme.colors.primary};
`;
export const ProfileImg = styled.img`
  background-image: ${(props) => props.src};
  width: 152px;
  height: 152px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.frontItems};
`;

export const TagWrapper = styled.form`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const P = styled.span`
  display: inline-block;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const RadioInput = styled.input`
  display: none;
`;
export const Title2 = styled.h2`
  font-size:24px;
  color:${props=>props.theme.colors.primary};
  margin-top:26px;
`;
