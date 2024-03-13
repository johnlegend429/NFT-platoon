import styled from "styled-components";
import { ButtonProps } from "types/componentsProps";

export const ButtonWrapper = styled.div<ButtonProps>`
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  transition: all 0.3s;
  font-weight: 700;
  border: 2px solid ${({ border }) => border};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 18)}px;
  line-height: 25.2px;
  color: ${({ fColor }) => fColor};
  max-width: ${({ maxW }) => maxW}px;
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 5px;
  font-family: poppins-extralight, poppins, sans-serif;
  :hover {
    color: #f2f2f2;
  }
`;
