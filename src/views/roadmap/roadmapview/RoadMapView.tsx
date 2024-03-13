import { Container } from "components";
import React from "react";
import {
  RoadMapCard,
  RoadMapContent,
  RoadMapCounter,
  RoadMapDesc,
  RoadMapFullDesc,
  RoadMapGrid,
  RoadMapImgWrapper,
  RoadMapPeriod,
  RoadMapTitle,
  RoadMapTotalCard,
  RoadMapTotalView,
  RoadMapViewWrapper,
} from "./RoadMapView.styles";

import rm1 from "assets/image/roadmap-1.png";
import rm2 from "assets/image/roadmap-2.png";
import rm3 from "assets/image/roadmap-3.png";

import unknown from "assets/image/roadmap-unkown.png";

import rmt1 from "assets/image/roadmap-total-1.png";
import rmt2 from "assets/image/roadmap-total-2.png";
import rmt3 from "assets/image/roadmap-total-3.png";
import rmt4 from "assets/image/roadmap-total-4.png";

const RoadMapView: React.FC = () => {
  return (
    <RoadMapViewWrapper>
      <Container maxW={1420}>
        <RoadMapTitle>Roadmap</RoadMapTitle>
        <RoadMapContent>
          <RoadMapPeriod>Ouarter-4, 2021</RoadMapPeriod>
          <RoadMapCard>
            <div>
              <RoadMapCounter>1</RoadMapCounter>
              <RoadMapImgWrapper>
                <img src={rm1.src} alt="roadmap1" />
                <div />
              </RoadMapImgWrapper>
            </div>
            <RoadMapDesc>
              {
                "The Prickly Pete’s Platoon Environmental Series ( EW ) comes to Life. They were airdropped to all Early Supporters of the Community.`"
              }
            </RoadMapDesc>
          </RoadMapCard>
          <RoadMapCard dir="rtl">
            <div>
              <RoadMapCounter>2</RoadMapCounter>
              <RoadMapImgWrapper>
                <img src={rm2.src} alt="roadmap2" />
                <div />
              </RoadMapImgWrapper>
            </div>
            <RoadMapDesc>
              {
                "Our own native currency - $PETE was introduced. All EW holders starts receiving $PETE airdrops. $PETE will gradually become the transactional currency within our fictional ecosystem."
              }
            </RoadMapDesc>
          </RoadMapCard>
          <RoadMapCard>
            <div>
              <RoadMapCounter>3</RoadMapCounter>
              <RoadMapImgWrapper>
                <img src={rm3.src} alt="roadmap3" />
                <div />
              </RoadMapImgWrapper>
            </div>
            <RoadMapDesc>
              {
                "The Prickly Pete’s Platoon OG Cactoon Collection ( OG ) comes to Life. 1440 NFTs of the OG Cactoons were minted at a price of 0.55 SOL."
              }
            </RoadMapDesc>
          </RoadMapCard>
          <RoadMapPeriod style={{ marginTop: "100px" }}>
            Ouarter-1, 2022
          </RoadMapPeriod>
          <RoadMapTotalCard>
            <RoadMapCounter>1</RoadMapCounter>
            <RoadMapTotalView>
              <h3>Environmental Warriors and Forge keys</h3>
              <p>
                The Environmental Warriors are the Protectors of the Platoon
                Forge. All 500 Environmental Warrior holders were whitelisted
                for a Private Mint of the Platoon Forge Keys in January 2022.
                This was our 1st mint using $PETE coins
              </p>
              <img src={rmt1.src} alt="roadmap total image1" />
            </RoadMapTotalView>
          </RoadMapTotalCard>
          <RoadMapTotalCard dir="rtl">
            <RoadMapCounter>2</RoadMapCounter>
            <RoadMapTotalView>
              <h3>Environmental Warriors and Forge keys</h3>
              <p>
                {
                  "The OG Cactoons are destined to save the Earth from it’s Final Collapse. They will fight the Jello Bots and will revive the Earth into it’s true beauty."
                }
              </p>
              <img src={rmt2.src} alt="roadmap total image2" />
              <p>
                {
                  "The OG Cactoons were whitelisted for the Platoon Bots Mint in February 2022. Platoon Bots are the mischief-monger cute machines that enable the running of the Platoon Forge."
                }
              </p>
            </RoadMapTotalView>
          </RoadMapTotalCard>
          <RoadMapTotalCard>
            <RoadMapCounter>3</RoadMapCounter>
            <RoadMapTotalView>
              <h3>Legendary Toons Auction</h3>
              <p>
                {
                  "The 5 Legendary Toons of the Platoon will be auctioned on Magic Eden, in a 48 hour cycle. The highest bidder will win each of the Legendary Toons, which comes with a full set of benefits.50% of Total Auction Collection will be contributed to the $PETE LP."
                }
              </p>
              <RoadMapGrid>
                {[0, 1, 2, 3, 4].map((item: number) => (
                  <img src={unknown.src} alt="unknown" key={item} />
                ))}
              </RoadMapGrid>
              <p>
                {
                  "The $PETE / USDT Liquidity Pool will be initiated in March 2022. After this, $PETE will become tradeable on Raydium / Dexlab."
                }
              </p>
            </RoadMapTotalView>
          </RoadMapTotalCard>
          <RoadMapPeriod style={{ marginTop: "100px" }}>
            Ouarter-2, 2022
          </RoadMapPeriod>
          <RoadMapTotalCard>
            <RoadMapCounter>1</RoadMapCounter>
            <RoadMapTotalView>
              <h3>The Mutation game - April 2022</h3>
              <p>
                {
                  "The Platoon Forge looks extremely busy! Seems like something has really gone wrong...kinda fault in their stars!!Ohh Shizz...the Mutation Process has back-fired...imbalance in chems, or the radiation was a bit too high, or who knows...maybe one of them Bots just puked on the Pod...It has just gone out of control...leading to serial blasts in the Forge."
                }
                <br />
                {
                  "Now the OGs inside the Pods will have to take control and customize themselves...before the system engulfs them all...might even the Bots!!"
                }
              </p>
              <img src={rmt3.src} alt="roadmap total image3" />
              <p>
                {
                  "The ultimate question now is...What comes out of those f’ckin Pods? Will we be able to recognize them? Are they gonna be one of us...the Cactoons? What will the Mutant bring with itself, to the raging war??"
                }
                <br />
                {
                  "Remember, EWs help you in earning all that $PETE booty...while only The OG Cactoons and The Platoon Bots can participate in the Mutation Game."
                }
              </p>
            </RoadMapTotalView>
          </RoadMapTotalCard>
          <RoadMapCard dir="rtl">
            <div>
              <RoadMapCounter>2</RoadMapCounter>
              <RoadMapImgWrapper>
                <img src={unknown.src} alt="roadmap2" />
              </RoadMapImgWrapper>
            </div>
            <RoadMapFullDesc>
              <h3>The Jello Bots</h3>
              <p>
                {
                  "The Blasts in the Platoon Forge during the Mutation Game released a lot of gamma radiations into the Metaverse. Those were easily read by the high end detectors of"
                }
                <br />
                {
                  "TOI - 1231b...thereby commanding an army of Jello Bots to make a visit to the Earth...to find cause and capture them."
                }
              </p>
              <p>
                {
                  "The Jello Bot Army finally enters our Planet in June 2022. They are 5000 in number and will be minted using $PETE."
                }
              </p>
              <p>
                {
                  "The EWs, the OGs and the New Avatars will be whitelisted for the Mint in $PETEs. The Jello Bots are the villains of the story and will participate in the Battleground Combat Game."
                }
              </p>
            </RoadMapFullDesc>
          </RoadMapCard>
          <RoadMapPeriod style={{ marginTop: "100px" }}>
            Ouarter-3+4, 2022
          </RoadMapPeriod>
          <RoadMapCard>
            <div>
              <RoadMapCounter>1</RoadMapCounter>
              <RoadMapImgWrapper>
                <img src={unknown.src} alt="roadmap2" />
              </RoadMapImgWrapper>
            </div>
            <RoadMapFullDesc>
              <h3>50 Battle ground arenas</h3>
              <p>
                {
                  "The Platoon Battleground construction is over. The network of these Battle Pods will include 50 Combat Arenas where strategy based Combat Games will be held in the near future, between Cactoons & Jello Bots.These 50 Arenas will be auctioned out on Magic Eden...and all holders will receive a rental of 50 $PETEs from each battle that happens on a specific Arena...making them rich!!"
                }
              </p>
            </RoadMapFullDesc>
          </RoadMapCard>
          <RoadMapTotalCard dir="rtl">
            <RoadMapCounter>2</RoadMapCounter>
            <RoadMapTotalView>
              <h3>The Battle begins</h3>
              <p>
                {
                  "Each of the 50 Arenas have an owner now. So let the Game Begin...one player can get their Cactoon NFTs to combat against another player's Jello Bot NFT. Each combat will entail an entry fee of 150 $PETEs per player...and the winner receives awesome rewards."
                }
              </p>
              <img src={rmt2.src} alt="roadmap total image2" />
            </RoadMapTotalView>
          </RoadMapTotalCard>
          <RoadMapPeriod style={{ marginTop: "100px" }}>
            Ouarter-1, 2023
          </RoadMapPeriod>
          <RoadMapTotalCard>
            <RoadMapCounter>1</RoadMapCounter>
            <RoadMapTotalView>
              <h3>Roadmap 3.0 is activated</h3>
              <p>
                {
                  "This is when Prickly Pete's platoon project enters the metaverse. Land ownership, land development, and other elements of the P2E game are activated. By this time $PETE will have its full value and the project might also find the introduction of a new Token/staking of $PETEs"
                }
              </p>
            </RoadMapTotalView>
          </RoadMapTotalCard>
        </RoadMapContent>
      </Container>
    </RoadMapViewWrapper>
  );
};

export default RoadMapView;
