import React from "react";

import { Button, Container, SalesCard } from "components";

import {
  CardContent,
  FreeSales,
  PricingDesc,
  PricingTitle,
  PricingWrapper,
  SalesCardGroup,
} from "./Pricing.styles";

import marker from "assets/image/marker.svg";

const Pricing: React.FC = () => {
  const handleClick = () => {
    window.open("https://airtable.com/shrQTY22nmcj725yh");
  };

  return (
    <PricingWrapper>
      <Container maxW={1000}>
        <PricingTitle>Pricing Model</PricingTitle>
        <PricingDesc>
          {
            "Our Pricing Model is very simple and direct. We do not claim anything from the Secondary Sales of a project. Though receiving a few NFTs from an enrolled project never hurts...right??"
          }
        </PricingDesc>
        <Button
          maxW={267}
          label="Apply now"
          fColor="#282626"
          bgColor="#c0Ed38"
          border="#c0Ed38"
          onClick={handleClick}
        />
        <SalesCardGroup>
          <SalesCard
            bgColor="#abdbff"
            fColor="#324158"
            title="Primary Sales"
            content={<CardContent>13%</CardContent>}
            desc="of mint revenue + a couple of NFTs"
          />
          <SalesCard
            bgColor="#ded4ff"
            fColor="#50037f"
            title="Primary Sales"
            content={
              <FreeSales>
                <img src={marker.src} alt="marker" />
                <span>FREE</span>
              </FreeSales>
            }
            desc="of mint revenue + a couple of NFTs"
          />
        </SalesCardGroup>
      </Container>
    </PricingWrapper>
  );
};

export default Pricing;
