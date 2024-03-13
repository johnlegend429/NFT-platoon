import { Container } from "components";
import React from "react";
import {
  ClansCardWrapper,
  ClansWrapper,
  ImageWrapper,
  TextWrapper,
} from "./Clans.styles";

import clan1 from "assets/image/clan1.png";
import clan2 from "assets/image/clan2.png";
import clan3 from "assets/image/clan3.png";
import clan4 from "assets/image/clan4.png";

const data = [
  {
    img: clan1.src,
    title: "Electro Cact",
    subtitle: "Platoon Head - Globe Queen Electra",
    desc: "This platoon members have mutated themselves with electrical conduits and wires. They now roam on Earth, fighting for electricity sources. They learnt the art of transmitting as well as storing electricity within their bodies from their Platoon General - Globe Queen Electra. Their bodies have small pockets of storage within, where they love to store the eyes of their enemies, thereby further helping themselves in efficient navigation and combat.",
    power:
      "Powers - Defence, Speed, Crushing Strength, Storage, Anger Management",
  },
  {
    img: clan2.src,
    title: "Parched Cact",
    subtitle: "Platoon Head - General Peter Parcher",
    desc: "The Scorching Sun, Radioactivity, Severe Cold, Acid Rains…This platoon has travelled extensively on Earth, in search of a safe haven. All that effort went to vain, barring one - Their transformed bodies. They have developed an external sheath of protection - rugged, parched but defensive. Very few weapons can penetrate this sheath. They keep on bleeding, thereby making their sheaths even more stronger and defensive. Their Platoon Head - General Peter Parcher have led them on many expeditions in search of a life bearing potion on Earth.",
    power:
      "Powers - Defence, Speed, Crushing Strength, Storage, Anger Management",
  },
  {
    img: clan3.src,
    title: "Boney Cact",
    subtitle: "Platoon Head - Lord Bone-fide",
    desc: "Earth had one thing in abundance, which this platoon used extensively to their benefit - Bones. Dried up human and animal bones and skulls were to be seen everywhere. The platoon has developed a unique internal body structure made of such collected bones that give them additional strength, balance and support, defence and attack modes as well as ease of mobility. The Boney Cact platoon is led by Lord Bone-fide, who is a surgeon warlord and has intricately transformed the bodies of the member Toons himself, thus making them stronger and ready for combat.",
    power: "Powers - Speed, Defence, Balance, Crushing Strength.",
  },
  {
    img: clan4.src,
    title: "Melting Cact",
    subtitle: "Platoon Head - Captain Candlestick",
    desc: "The desolate, derelict Earth had devastating effects of Human exploitation and misuse. Few of the major concerns are very extremely high and low temperatures, chemical imbalances, radioactive effects etc, that led to biological transformations in the Cactoon bodies. The Melting Cact Platoon, led by Captain Candlestick, have used these adversities to their strength. The melting cactoons  let their bodies melt, thereby oozing out plasma gel, poisonous chemicals, and aquasols, that they have mutated themselves with. These melting chemicals enable them to attack their enemies by chemically combining and finally engulfing them within their bodies. Their Platoon General - Captain Candlestick, resembled a never ending melting candle, losing himself at one moment and then regenerating into someone more powerful, in the next.",
    power: "Powers - Defence, Engulfing and digesting, Storage.",
  },
];

const Clans: React.FC = () => {
  return (
    <ClansWrapper>
      <h1>The 4 Warrior Clans</h1>
      <div>
        {data.map((item: any, key: any) => (
          <ClansCard
            key={key}
            img={item.img}
            title={item.title}
            sub={item.subtitle}
            desc={item.desc}
            power={item.power}
          />
        ))}
      </div>
    </ClansWrapper>
  );
};

const ClansCard = (props: any) => {
  return (
    <ClansCardWrapper>
      <ImageWrapper>
        <img src={props.img} alt="clans" />
      </ImageWrapper>
      <TextWrapper>
        <h2>{props.title}</h2>
        <h3>{props.sub}</h3>
        <p>{props.desc}</p>
        <p>{props.power}</p>
      </TextWrapper>
    </ClansCardWrapper>
  );
};

export default Clans;
