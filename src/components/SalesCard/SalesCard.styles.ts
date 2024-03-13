import styled from "styled-components";

import { SalesCardProps } from "types/componentsProps";

export const SalesCardWrapper = styled.div<SalesCardProps>`
  padding: 20px 0;
  margin: 50px 0 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  & > h5 {
    font-family: poppins-extralight, poppins, sans-serif;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${({ fColor }) => fColor};
    margin-bottom: 10px;
  }
  & > p {
    font-family: poppins-extralight, poppins, sans-serif;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    margin: 30px 0 0;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  contain: content;
  align-items: center;
  height: 91px;
  position: relative;
  .dot-left,
  .dot-right {
    position: absolute;
    width: 91px;
  }
  .dot-left {
    left: -10px;
  }
  .dot-right {
    right: -10px;
  }
`;
