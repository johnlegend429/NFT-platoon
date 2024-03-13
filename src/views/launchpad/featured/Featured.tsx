import React from "react";

import { FeaturedCard } from "components";

import {
  FeaturedGroup,
  FeaturedTitle,
  FeaturedWrapper,
} from "./Featured.styles";

import svg1 from "assets/image/anti-rug.svg";
import svg2 from "assets/image/bot-free.svg";
import svg3 from "assets/image/img-gen.svg";
import svg4 from "assets/image/whitelisting.svg";
import svg5 from "assets/image/nft-minting.svg";
import svg6 from "assets/image/launchday.svg";

const cardData = [
  {
    svg: svg1,
    title: "Anti-Rug Certification",
    desc: "The very first step to enrolling projects on the launchpad will be to know the team, the originality and longevity of the project idea, and their financial sustainability. We will offer certificates to applying projects based on 8 critical parameters.",
  },
  {
    svg: svg2,
    title: "Bot-Free minting",
    desc: "The Launchpad will ensure a Bot-Free Minting Experience to all enrolled projects. This will be achieved using a 2-Step verification process to filter out bots, during the mint.",
  },
  {
    svg: svg3,
    title: "Image Generation + Metadata Validation",
    desc: "If you have the attributes ready, take a deep breath & relax!! We will take care of the algorithmic generation of multiple images, rarity management & metadata validation...making your collection - Mint ready!",
  },
  {
    svg: svg4,
    title: "Whitelisting + Pre-mint",
    desc: "We can customise your whitelist pre-sale and ensure best practice through SPL Token airdrops. We can also Pre-Mint a couple of NFTs for the creator team & promotional giveaways, before it is publicly minted.",
  },
  {
    svg: svg5,
    title: "NFT minting",
    desc: "All images in the collection will be deployed on the Solana Blockchain and will be ready to be minted. Each project will receive a dedicated mint URL which can be shared with your respective communities.",
  },
  {
    svg: svg6,
    title: "Launchday support",
    desc: "Members from our tech team will remain connected with you during your NFT launch. Secondary Market Listing and Ranking Listing will be initiated immediately after the Mint sells out.",
  },
];

const Featured: React.FC = () => {
  return (
    <FeaturedWrapper>
      <FeaturedTitle>Launchpad Features</FeaturedTitle>
      <FeaturedGroup>
        {cardData.map((item: any, key: any) => (
          <FeaturedCard
            svg={item.svg.src}
            title={item.title}
            key={key}
            desc={item.desc}
          />
        ))}
      </FeaturedGroup>
    </FeaturedWrapper>
  );
};

export default Featured;
