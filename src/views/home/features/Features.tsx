import { Container } from "components";
import React from "react";
import {
  CardWrapper,
  FeatureGridWrapper,
  FeatureWrapper,
} from "./Features.styles";

import feat1 from "assets/image/feature1.svg";
import feat2 from "assets/image/feature2.svg";
import feat3 from "assets/image/feature3.svg";
import feat4 from "assets/image/feature4.svg";
import feat5 from "assets/image/feature5.svg";
import feat6 from "assets/image/feature6.svg";
import feat7 from "assets/image/feature7.svg";

const data = [
  {
    img: feat1.src,
    title: "Multiple NFT Series",
    desc: "The Prickly Pete’s Platoon Project is based on a fictional lore, set in a future dystopic world. It contains multiple NFT collections, that gradually complete the Lore",
  },
  {
    img: feat2.src,
    title: "Passive Earning with $PETE",
    desc: "Almost all the NFT collections can be staked, which will generate passive earning in the form of $PETE. This earning can be used to mint further collections in the Roadmap. Staking rewards will continue for about 2 years",
  },
  {
    img: feat3.src,
    title: "Mutation Game",
    desc: "Prickly Pete’s Platoon NFT Holders can play the Mutation Game, where they can customize an NFT by making certain choices while selecting attributes that bring together a Mutant New Avatar NFT",
  },
  {
    img: feat4.src,
    title: "Limited Series Auctions",
    desc: "2 Rounds of Auction are upcoming. 5 Legendary Toons will be auctioned out soon…while the 50 Battleground Arenas will happen in July",
  },
  {
    img: feat5.src,
    title: "Merchandise, Comics, Games",
    desc: "Brand merchandise, comic strip NFTs & comic books, an IRL board game…hell lot of stuff that can be purchased using $PETE in the future",
  },
  {
    img: feat6.src,
    title: "P2E Online Game",
    desc: "A Play-to-Earn battle game is being built, where our NFT holders can play in PvE & PvP modes and earn rewards. The collection of rewards holds several other NFTs and NFT parts, which can be assembled within our gamified ecosystem",
  },
  {
    img: feat7.src,
    title: "Metaverse Integration",
    desc: "The project would finally move towards metaverse integration, land ownership, land development, and much more…that will be revealed towards the end of 2022",
  },
];

const Features: React.FC = () => {
  return (
    <FeatureWrapper>
      <h1>Features of Prickly Pete PLATOON</h1>
      <Container maxW={1100}>
        <FeatureGridWrapper>
          {data.map((item: any, key: any) => (
            <FeatureCard
              key={key}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </FeatureGridWrapper>
      </Container>
    </FeatureWrapper>
  );
};

const FeatureCard = (props: any) => {
  return (
    <CardWrapper>
      <img src={props.img} alt="feature" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </CardWrapper>
  );
};

export default Features;
