import React from "react";

import { FeaturedCardProps } from "types/componentsProps";

import {
  CardDesc,
  CardImg,
  CardTitle,
  CardWrapper,
} from "./FeaturedCard.styles";

const FeaturedCard: React.FC<FeaturedCardProps> = ({ svg, title, desc }) => {
  return (
    <CardWrapper>
      <CardImg src={svg} alt="cardimg" />
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </CardWrapper>
  );
};

export default FeaturedCard;
