import React from "react";
import { ButtonProps } from "types/componentsProps";
import { ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  bgColor,
  fColor,
  fontSize,
  label,
  maxW,
  width,
  border,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      bgColor={bgColor}
      fColor={fColor}
      fontSize={fontSize}
      width={width}
      border={border}
      maxW={maxW}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
