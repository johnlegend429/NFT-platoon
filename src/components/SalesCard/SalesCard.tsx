import React from "react";
import { SalesCardProps } from "types/componentsProps";
import { CardContent, SalesCardWrapper } from "./SalesCard.styles";

import dots from "assets/image/dots.svg";

const SalesCard: React.FC<SalesCardProps> = ({
  title,
  content,
  fColor,
  desc,
  bgColor,
}) => {
  return (
    <SalesCardWrapper bgColor={bgColor} fColor={fColor}>
      <h5>{title}</h5>
      <CardContent>
        <img src={dots.src} className="dot-left" alt="dots" />
        {content}
        <img src={dots.src} className="dot-right" alt="dots" />
      </CardContent>
      <p>{desc}</p>
    </SalesCardWrapper>
  );
};

export default SalesCard;
