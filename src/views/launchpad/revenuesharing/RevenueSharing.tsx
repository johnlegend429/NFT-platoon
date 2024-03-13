import React from "react";

import { Container } from "components";

import {
  CardContent,
  CardDesc,
  CardImgWrapper,
  CardTitle,
  ChartDesc,
  ChartDescGroup,
  ChartImgWrapper,
  RevenueCard,
  RevenueCardGroup,
  RevenueChartWrapper,
  RevenueDesc,
  RevenueDescPart,
  RevenueTitle,
  RevenueWrapper,
} from "./RevenueSharing.styles";

import img1 from "assets/image/revenue-1.png";
import img2 from "assets/image/revenue-2.png";
import img3 from "assets/image/revenue-3.png";
import chart from "assets/image/chart.svg";

const RevenueSharing: React.FC = () => {
  return (
    <Container maxW={1500}>
      <RevenueWrapper>
        <RevenueDescPart>
          <RevenueTitle>Revenue Sharing Model</RevenueTitle>
          <RevenueDesc>
            Our biggest strength is our highly supportive community of PPP NFT
            Holders. The Launchpad will always share 70% of the Total Mint
            Commission Collection, proportionately among all our verified,
            delisted community members, directly in SOL. Another 10% of the
            monthly revenue generated will be committed to the $PETE Liquidity
            Pool, thereby adding value to NFT staking earnings.
          </RevenueDesc>
          <RevenueChartWrapper>
            <ChartDesc>
              <p>Platoon Bots</p>
              <h4>37.5%</h4>
            </ChartDesc>
            <ChartImgWrapper>
              <img src={chart.src} alt="chart" />
            </ChartImgWrapper>
            <ChartDescGroup>
              <ChartDesc>
                <p>Platoon Bots</p>
                <h4>37.5%</h4>
              </ChartDesc>
              <ChartDesc>
                <p>Platoon Bots</p>
                <h4>37.5%</h4>
              </ChartDesc>
            </ChartDescGroup>
          </RevenueChartWrapper>
        </RevenueDescPart>
        <RevenueCardGroup>
          <RevenueCard>
            <CardImgWrapper>
              <img src={img1.src} alt="revenue1" />
              <div />
            </CardImgWrapper>
            <CardContent>
              <CardTitle>
                500 EWs <span className="get">get</span>{" "}
                <span className="percent">21.5%</span>
              </CardTitle>
              <CardDesc>OF THE TOTAL MINT PROCEEDINGS</CardDesc>
            </CardContent>
          </RevenueCard>
          <RevenueCard>
            <CardImgWrapper>
              <img src={img2.src} alt="revenue2" />
              <div />
            </CardImgWrapper>
            <CardContent>
              <CardTitle>
                1440 OG CACTOONS <span className="get">get</span>{" "}
                <span className="percent">41%</span>
              </CardTitle>
              <CardDesc>
                <span>3%</span> TO TOP 50 CURATED CARDS
              </CardDesc>
              <CardDesc>
                <span>8%</span> TO 176 GOLD CARDS
              </CardDesc>
              <CardDesc>
                <span>10%</span> TO 292 SILVER CARDS
              </CardDesc>
              <CardDesc>
                <span>10%</span> TO 410 BRONZE CARDS
              </CardDesc>
              <CardDesc>
                <span>10%</span> TO 512 SOLANA CARDS
              </CardDesc>
            </CardContent>
          </RevenueCard>
          <RevenueCard>
            <CardImgWrapper>
              <img src={img3.src} alt="revenue3" />
              <div />
            </CardImgWrapper>
            <CardContent>
              <CardTitle>
                2880 PLATOON BOTS <span className="get">get</span>{" "}
                <span className="percent">37.5%</span>
              </CardTitle>
              <CardDesc>
                <span>1.5%</span> TO TOP 30 SUPER BOTS
              </CardDesc>
              <CardDesc>
                <span>36%</span> TO 2850 PLATOON BOTS
              </CardDesc>
            </CardContent>
          </RevenueCard>
        </RevenueCardGroup>
      </RevenueWrapper>
    </Container>
  );
};

export default RevenueSharing;
