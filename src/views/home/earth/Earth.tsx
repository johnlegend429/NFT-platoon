import { Button, Container } from "components";
import React from "react";
import {
  EarthImageGroupWrapper,
  EarthImageWrapper,
  EarthTextWrapper,
  EarthWrapper,
} from "./Earth.styles";

import earthImg1 from "assets/image/earth1.png";
import earthImg2 from "assets/image/earth2.png";
import earthImg3 from "assets/image/earth3.jpg";
import earthImg4 from "assets/image/earth4.png";

const Earth: React.FC = () => {
  return (
    <Container maxW={1440}>
      <EarthWrapper>
        <EarthTextWrapper>
          <h1>{"Year 4065: The Earth"}</h1>
          <p>
            {
              "A post-apocalyptic world, that feels like a leftover. Humans have extracted every bit of resource that they could, before fleeing to Kepler and TOI. Earth was now a home to forests of dilapidated buildings, rivers of obsolete objects and mountains of junk and garbage, with it's atmosphere extremely polluted with smoke and radioactive gases...Can there be a revival?? In fact should there be a revival??"
            }
          </p>
          <Button
            label="Read full story"
            fColor="#282626"
            bgColor="#c0Ed38"
            border="#c0Ed38"
            fontSize={18}
            maxW={200}
            onClick={() => {}}
          />
        </EarthTextWrapper>
        <EarthImageGroupWrapper>
          <div>
            <EarthImageWrapper
              data-aos="fade-up"
              className="aos-init aos-animate"
            >
              <img src={earthImg1.src} alt="earthImg1" />
            </EarthImageWrapper>
            <EarthImageWrapper
              data-aos="fade-up"
              className="aos-init aos-animate"
            >
              <img src={earthImg3.src} alt="earthImg3" />
            </EarthImageWrapper>
          </div>
          <div>
            <EarthImageWrapper
              data-aos="fade-up"
              className="aos-init aos-animate"
            >
              <img src={earthImg2.src} alt="earthImg2" />
            </EarthImageWrapper>
            <EarthImageWrapper
              data-aos="fade-up"
              className="aos-init aos-animate"
            >
              <img src={earthImg4.src} alt="earthImg4" />
            </EarthImageWrapper>
          </div>
        </EarthImageGroupWrapper>
      </EarthWrapper>
    </Container>
  );
};

export default Earth;
