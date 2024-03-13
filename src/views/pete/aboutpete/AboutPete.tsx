import React from "react";
import {
  AboutCardWrapper,
  AboutPeteWrapper,
  AboutTitle,
  CardDesc,
  CardGroup,
  CardTitle,
} from "./AboutPete.styles";

const AboutPete: React.FC = () => {
  return (
    <AboutPeteWrapper>
      <AboutTitle>{"All about $PETE"}</AboutTitle>
      <CardGroup>
        <AboutCardWrapper>
          <CardTitle>Utility</CardTitle>
          <CardDesc>
            {
              "$PETE has extreme utility, in both the digital world as well as in real life. $PETE will be used to Mint future NFTs, Mutate into New NFTs, Play the Game…as well as buy our brand merchandise, comic strips, and the board game…in real life."
            }
          </CardDesc>
        </AboutCardWrapper>
        <AboutCardWrapper>
          <CardTitle>Added Utility vs Burning</CardTitle>
          <CardDesc>
            {
              "Presently, based on our roadmap, we feel no need to introduce a burning mechanism to reduce the supply of $PETE and thereby, increase its value. But rather, believe in delivering added value constantly, to ensure growth in demand."
            }
          </CardDesc>
        </AboutCardWrapper>
        <AboutCardWrapper>
          <CardTitle>Future Liquidity</CardTitle>
          <CardDesc>
            {
              "Depending on the way our Plans progress, we might require additional liquidity of $PETE. At such a point, we will introduce a staking mechanism for $PETEs, where holders can stake their coins and earn further $PETEs."
            }
          </CardDesc>
        </AboutCardWrapper>
        <AboutCardWrapper>
          <CardTitle>Governance</CardTitle>
          <CardDesc>
            {
              "In case of an IDO in the future, to raise funds for the project, $PETE will become the governance token within the Platoonverse while another coin with a much bigger supply would be introduced to manage the growing requirements of the project."
            }
          </CardDesc>
        </AboutCardWrapper>
      </CardGroup>
    </AboutPeteWrapper>
  );
};

export default AboutPete;
