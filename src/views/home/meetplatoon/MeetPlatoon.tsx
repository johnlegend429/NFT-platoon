import React from "react";
import Slider from "react-slick";
import {
  ButtonWrapper,
  MeetPlatoonWrapper,
  SliderImg,
} from "./MeetPlatoon.styles";
import { Button, Container } from "components";

import slider1 from "assets/image/meet1.png";
import slider2 from "assets/image/meet2.png";
import slider3 from "assets/image/meet3.png";
import slider4 from "assets/image/meet4.png";
import slider5 from "assets/image/meet5.png";
import slider6 from "assets/image/meet6.png";
import slider7 from "assets/image/meet7.png";
import slider8 from "assets/image/meet8.png";
import slider9 from "assets/image/meet9.png";
import slider10 from "assets/image/meet10.png";

const MeetPlatoon: React.FC = () => {
  const settings = {
    // dots: true,
    centerMode: true,
    infinite: true,
    // slidesToShow: 3.7,
    // slidesToScroll: 3,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 6000,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 0.7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Container maxW={1500}>
      <MeetPlatoonWrapper>
        <h1>Meet the "PLATOON"</h1>
        <div>
          <Slider {...settings}>
            <SliderImg>
              <img src={slider1.src} alt="slider1" />
            </SliderImg>
            <SliderImg>
              <img src={slider2.src} alt="slider2" />
            </SliderImg>
            <SliderImg>
              <img src={slider3.src} alt="slider3" />
            </SliderImg>
            <SliderImg>
              <img src={slider4.src} alt="slider4" />
            </SliderImg>
            <SliderImg>
              <img src={slider5.src} alt="slider5" />
            </SliderImg>
            <SliderImg>
              <img src={slider6.src} alt="slider6" />
            </SliderImg>
            <SliderImg>
              <img src={slider7.src} alt="slider7" />
            </SliderImg>
            <SliderImg>
              <img src={slider8.src} alt="slider8" />
            </SliderImg>
            <SliderImg>
              <img src={slider9.src} alt="slider9" />
            </SliderImg>
            <SliderImg>
              <img src={slider10.src} alt="slider10" />
            </SliderImg>
          </Slider>
        </div>
        <p>
          <span>
            Why should the <b>Platoon Bots</b> have all the Fun!!
          </span>
          <br />
          <b>Prickly Pete</b> has decided to give you all the power to custom
          build your own <b>Cactoons</b> without any limit and enjoy sharing
          them within your social circles!! This is just a teaser of what our
          Roadmap beholds for you all, when the <b>Platoon Forge Upgradation</b>
          Decks will get activated during <b>Mutation Seasons</b>...
        </p>
        <ButtonWrapper>
          <Button
            label="Build your own Toon"
            fColor="#282626"
            bgColor="#c0Ed38"
            border="#c0Ed38"
            fontSize={18}
            maxW={267}
            onClick={() => {}}
          />
        </ButtonWrapper>
      </MeetPlatoonWrapper>
    </Container>
  );
};

export default MeetPlatoon;
