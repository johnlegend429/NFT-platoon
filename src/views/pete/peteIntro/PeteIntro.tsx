import { Container } from "components";
import React from "react";
import {
  DescPart,
  ImageWrapper,
  PeteIntroContainer,
  PeteIntroDesc,
  PeteIntroPart,
  PeteIntroTitle,
  PeteIntroWrapper,
} from "./PeteIntro.styles";

import peteImg from "assets/image/peteintro.png";

const PeteIntro: React.FC = () => {
  return (
    <PeteIntroWrapper>
      <PeteIntroPart>
        <PeteIntroContainer>
          <DescPart>
            <PeteIntroTitle>$PETE Token</PeteIntroTitle>
            <PeteIntroDesc>
              {
                "The PETE Token is the life’s work of the Platoon Leader - Prickly Pete. While on his cursed exile, Prickly Pete found a highly rare chunk of stone in the Andes Mountains in Chile. Soon enough, he realised that this stone held a secret, magical spell in the form of energies that could heal. It took him more than 14 years to mint this stone and craft it into 100 million tokens, each carrying a bit of that healing energy."
              }
            </PeteIntroDesc>
          </DescPart>
          <ImageWrapper>
            <img src={peteImg.src} alt="peteImg" />
          </ImageWrapper>
        </PeteIntroContainer>
      </PeteIntroPart>
    </PeteIntroWrapper>
  );
};

export default PeteIntro;
