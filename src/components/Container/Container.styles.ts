import styled from "styled-components";
import { ContainerProps } from "types/componentsProps";

export const ContainerWrapper = styled.div<ContainerProps>`
  width: 90%;
  max-width: ${({ maxW }) => (maxW ? maxW : 1000)}px;
  margin: auto;
`;
