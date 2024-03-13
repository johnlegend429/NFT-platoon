import React from "react";
import { ContainerProps } from "types/componentsProps";

import { ContainerWrapper } from "./Container.styles";

const Container: React.FC<ContainerProps> = ({ children, maxW }) => {
  return <ContainerWrapper maxW={maxW}>{children}</ContainerWrapper>;
};

export default Container;
