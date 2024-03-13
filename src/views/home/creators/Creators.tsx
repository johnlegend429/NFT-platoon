import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Container } from "components";
import {
  CreatorCardWrapper,
  CreatorGridWrapper,
  CreatorWrapper,
} from "./Creators.styles";

import creator1 from "assets/image/creator1.jpg";
import creator2 from "assets/image/creator2.jpg";
import creator3 from "assets/image/creator3.jpg";
import creator4 from "assets/image/creator4.jpg";

const data = [
  {
    img: creator1.src,
    name: "Da Vinci",
    role: "Artist",
    desc: "An artist by heart, my brain is trained as an architect, a geographer and an anthropologist",
  },
  {
    img: creator2.src,
    name: "Turing Complete",
    role: "Programmer",
    desc: "I believe binary is the language of the universe. Beer guzzler, Racing Junkie",
  },
  {
    img: creator3.src,
    name: "Dreamy Bunny",
    role: "Research and Outreach",
    desc: "Part time architect full time dreamer. Super hyped about everything that is art",
  },
  {
    img: creator4.src,
    name: "Pixel Crazy",
    role: "UX/UI",
    desc: "I de-pixelate the overall picture and fabricate working prototypes ",
  },
];

const Creators: React.FC = () => {
  return (
    <Container maxW={1440}>
      <CreatorWrapper>
        <h1>Prickly Pete Creators</h1>
        <CreatorGridWrapper>
          {data.map((item: any, key: any) => (
            <CreatorCard
              key={key}
              img={item.img}
              name={item.name}
              role={item.role}
              desc={item.desc}
            />
          ))}
        </CreatorGridWrapper>
      </CreatorWrapper>
    </Container>
  );
};

const CreatorCard = (props: any) => {
  return (
    <CreatorCardWrapper>
      <InnerImageZoom src={props.img} zoomSrc={props.img} />
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
      <p>{props.desc}</p>
    </CreatorCardWrapper>
  );
};

export default Creators;
