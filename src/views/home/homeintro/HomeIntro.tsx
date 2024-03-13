import React, { useEffect } from "react";

import { Button, Container } from "components";
import {
  HomeContainer,
  HomeImage,
  HomeIntroWrapper,
  HomeTextWrapper,
  Shape,
} from "./HomeIntro.styles";
import homeImg from "assets/image/home.jpg";
import shape from "assets/image/home-shape.png";

const HomeIntro: React.FC = () => {
  useEffect(() => {
    const shape1: any = document.getElementById("shape1");
    const shape2: any = document.getElementById("shape2");
    const shape3: any = document.getElementById("shape3");
    shape1.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
    shape1.style.opacity = "1";
    setTimeout(() => {
      shape2.style.transform = "translateX(0)";
      shape2.style.opacity = "1";
    }, 2300);
    shape3.style.transform = "translateX(0) rotate(0deg)";
  }, []);

  return (
    <HomeIntroWrapper>
      <HomeImage src={homeImg.src} alt="homeImg" />
      <HomeContainer>
        <Container maxW={1300}>
          <HomeTextWrapper>
            <h1>{"Prickly Pete's Platoon"}</h1>
            <h2>
              is <span>the Last Ray of Hope</span>
            </h2>
            <Button
              label="Stake your artwork"
              fColor="#282626"
              bgColor="#c0Ed38"
              border="#c0Ed38"
              fontSize={24}
              maxW={300}
              onClick={() => {}}
            />
          </HomeTextWrapper>
        </Container>
      </HomeContainer>
      <Shape id="shape1" no={1}>
        <img src={shape.src} />
      </Shape>
      <Shape id="shape2" no={2}>
        <img src={shape.src} />
      </Shape>
      <Shape id="shape3" no={3}>
        <img src={shape.src} />
      </Shape>
    </HomeIntroWrapper>
  );
};

export default HomeIntro;
