import { Button, Container } from "components";
import React from "react";
import { ImgWrapper, StakeShopWrapper } from "./StakeShop.styles";
import shopImg from "assets/image/stake_shop.png";

const StakeShop: React.FC = () => {
  return (
    <Container maxW={1440}>
      <StakeShopWrapper>
        <h1>The Stake Shop</h1>
        <ImgWrapper>
          <img src={shopImg.src} alt="shopImg" />
        </ImgWrapper>
        <Button
          label="Stake your artwork"
          fColor="#282626"
          bgColor="#c0Ed38"
          border="#c0Ed38"
          fontSize={18}
          maxW={300}
          onClick={() => {}}
        />
      </StakeShopWrapper>
    </Container>
  );
};

export default StakeShop;
