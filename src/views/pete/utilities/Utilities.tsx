import React from "react";
import {
  UtilitiesImage,
  UtilitiesTitle,
  UtilitiesWrapper,
} from "./Utilities.styles";
import utilitiesImage from "assets/image/utilities.png";

const Utilities: React.FC = () => {
  return (
    <UtilitiesWrapper>
      <UtilitiesTitle>UTILITIES</UtilitiesTitle>
      <UtilitiesImage>
        <img src={utilitiesImage.src} alt="utilitiesImage" />
      </UtilitiesImage>
    </UtilitiesWrapper>
  );
};

export default Utilities;
