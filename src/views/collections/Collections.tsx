import { Button, Container } from "components";
import React from "react";
import {
  ButtonGroup,
  CollectionCardWrapper,
  CollectionDesc,
  CollectionsWrapper,
  DescText,
  DescTitle,
  DescWrapper,
  GifWrapper,
  ImgWrapper,
} from "./Collections.styles";

import nft1_1 from "assets/image/nft-1.jpg";
import nft1_2 from "assets/image/nft-1.gif";
import nft2_1 from "assets/image/nft-2.png";
import nft2_2 from "assets/image/nft-2.gif";
import nft3_1 from "assets/image/nft-3.png";
import nft3_2 from "assets/image/nft-3.gif";
import nft4 from "assets/image/nft-4.gif";

const Collections: React.FC = () => {
  const handleMagicEden = (url: string) => {
    window.open(url);
  };

  const handleRank = (url: string) => {
    window.open(url);
  };

  return (
    <CollectionsWrapper>
      <Container maxW={1200}>
        <CollectionCardWrapper>
          <CollectionDesc>
            <ImgWrapper>
              <img src={nft1_1.src} alt="nft1_1" />
            </ImgWrapper>
            <DescWrapper>
              <DescTitle>Collection 1 : Environmental Warriors</DescTitle>
              <DescText>
                <b>{"500 Environmental Warrior Cactoons, "}</b>
                {
                  "with unique continental stamps, roam the Solana Metaverse. They are the closest advisors of Prickly Pete and are supposed to be the custodians of the "
                }
                <b>{"Platoon Forge."}</b>
                {
                  " Wherever they are, a common code initiated by Prickly Pete and embedded in their system keeps them connected. In the future, they would hold the secret key to the "
                }
                <b>{"Platoon Forge."}</b>
              </DescText>
              <DescText>
                These 500 Cactoons have been generated using 120 traits. Hence
                they are extremely unique. Do check out their rarity ranks here
              </DescText>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    handleMagicEden(
                      "https://magiceden.io/marketplace/prickly_petes_platoon_bots"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="#c0ed38"
                  border="#c0ed38"
                  fColor="#242323"
                  width="fit-content"
                />
                <Button
                  onClick={() =>
                    handleRank(
                      "https://howrare.is/prickly_petes_platoon_ewcollection"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="transparent"
                  fColor="#c0ed38"
                  border="#c0ed38"
                  width="fit-content"
                />
              </ButtonGroup>
            </DescWrapper>
          </CollectionDesc>
          <GifWrapper>
            <img src={nft1_2.src} alt="nft1_2" />
          </GifWrapper>
        </CollectionCardWrapper>
        <CollectionCardWrapper>
          <CollectionDesc>
            <ImgWrapper>
              <img src={nft2_1.src} alt="nft2_1" />
            </ImgWrapper>
            <DescWrapper>
              <DescTitle>Collection 2 : OG cactoons</DescTitle>
              <DescText>
                <b>{"1440 OG Cactoon Warriors "}</b>
                {
                  "are geared to fight for the revival of the Earth. They are up against the vicious "
                }
                <b>{"Jello Bots "}</b>
                {
                  "who have come raiding the Earth for the mythical life bearing potion. Each OG Cactoon is a unique version produced by Prickly Pete in the Platoon Forge. Hence they hold a source code which will be altered in the future, as the battle for survival grows fierce."
                }
              </DescText>
              <DescText>
                {
                  "These 1440 Cactoons have been generated using 120 traits. Hence they are extremely unique. Do check out their rarity ranks here"
                }
              </DescText>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    handleMagicEden(
                      "https://magiceden.io/marketplace/prickly_petes_platoon_og_cactoon_series"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="#c0ed38"
                  border="#c0ed38"
                  fColor="#242323"
                  width="fit-content"
                />
                <Button
                  onClick={() =>
                    handleRank(
                      "https://howrare.is/prickly_petes_platoon_og_cactoon_series"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="transparent"
                  fColor="#c0ed38"
                  border="#c0ed38"
                  width="fit-content"
                />
              </ButtonGroup>
            </DescWrapper>
          </CollectionDesc>
          <GifWrapper>
            <img src={nft2_2.src} alt="nft2_2" />
          </GifWrapper>
        </CollectionCardWrapper>
        <CollectionCardWrapper>
          <CollectionDesc>
            <ImgWrapper>
              <img src={nft3_1.src} alt="nft3_1" />
            </ImgWrapper>
            <DescWrapper>
              <DescTitle>Collection 3 : Platoon Bots</DescTitle>
              <DescText>
                <b>{"Prickly Pete "}</b>
                {"brought along a swarm of "}
                <b>{"2880 Platoon Bots "}</b>
                {
                  "along with him to attune the Cactoons for the War ahead. The "
                }
                <b>{"Platoon Bots "}</b>
                {
                  "are simple, fashion crazy machines...few Techies, few Healers, few Chem-nerds, few Cool-Heads..."
                }
              </DescText>
              <DescText>
                {"Generated using a combination of 6 attributes, each "}
                <b>{"Platoon Bot"}</b>
                {"will pair up with one "}
                <b>{"OG Cactoon "}</b>
                {"(1440 Characters) in the "}
                <b>{"Platoon Forge "}</b>
                {
                  "and empower the one to get a New Avatar Cactoon. We hope these experiments would go well . . ."
                }
              </DescText>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    handleMagicEden(
                      "https://magiceden.io/marketplace/prickly_petes_platoon"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="#c0ed38"
                  border="#c0ed38"
                  fColor="#242323"
                  width="fit-content"
                />
                <Button
                  onClick={() =>
                    handleRank(
                      "https://howrare.is/prickly_petes_platoon_the_platoon_bots"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="transparent"
                  fColor="#c0ed38"
                  border="#c0ed38"
                  width="fit-content"
                />
              </ButtonGroup>
            </DescWrapper>
          </CollectionDesc>
          <GifWrapper>
            <img src={nft3_2.src} alt="nft3_2" />
          </GifWrapper>
        </CollectionCardWrapper>
        <CollectionCardWrapper>
          <CollectionDesc>
            <ImgWrapper>
              <img src={nft4.src} alt="nft4_1" />
            </ImgWrapper>
            <DescWrapper>
              <DescTitle>Collection 4 : Platoon Forge Keys</DescTitle>
              <DescText>
                {"The "}
                <b>{"500 Platoon Forge Keys "}</b>
                {"are vital instruments that will be required in the "}
                <b>{"mutation of the OG Cactoon "}</b>
                {
                  "NFTs. Each key will be staked later on to generate high yields during the Mutation Game. The story of each key will be developed into artistic Graphic Novel NFTs after the mint is complete. "
                }
              </DescText>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    handleMagicEden(
                      "https://magiceden.io/marketplace/prickly_petes_platoon_forge_keys"
                    )
                  }
                  label="Buy on Magic Eden"
                  bgColor="#c0ed38"
                  border="#c0ed38"
                  fColor="#242323"
                  width="fit-content"
                />
              </ButtonGroup>
            </DescWrapper>
          </CollectionDesc>
          <GifWrapper>
            <img src={nft4.src} alt="nft4_2" />
          </GifWrapper>
        </CollectionCardWrapper>
      </Container>
    </CollectionsWrapper>
  );
};

export default Collections;
