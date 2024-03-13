import React from "react";
import {
  ChartInfo,
  ChartInfoPart,
  SupplyChart,
  SupplyChartSection,
  SupplyDesc,
  SupplyDescSection,
  SupplyTitle,
  SupplyWrapper,
} from "./Supply.styles";

import chart from "assets/image/supply-chart.svg";

const Supply: React.FC = () => {
  return (
    <SupplyWrapper>
      <SupplyDescSection>
        <SupplyTitle>Supply</SupplyTitle>
        <SupplyDesc>
          {
            "$PETE Token distribution was initiated through airdrops to Environmental Warriors from 7th December 2021. All airdrops stopped on 31st January, beyond which our Staking was initiated from 1st February 2022. A maximum of 60% will be consumed for the Staking Purposes. Hence the staking rewards for older collections diminish as new collections emerge in the Platoon Ecosystem."
          }
        </SupplyDesc>
        <SupplyDesc>
          {
            "Currently, $PETE token circulation is being generated through staking. 15% of the overall supply has been allocated to a liquidity pool, which will be created in multiple stages to ensure the stability of the price of $PETE."
          }
        </SupplyDesc>
        <SupplyDesc>
          {
            "An additional 25% has been allocated to the PlatoonDAO Council functioning, Creator Team rewards & for promotional purposes."
          }
        </SupplyDesc>
      </SupplyDescSection>
      <SupplyChartSection>
        <SupplyChart>
          <img src={chart.src} alt="supply" />
          <span style={{ top: "50%", right: "5%" }}>60%</span>
          <span style={{ top: "5%", left: "42%" }}>5%</span>
          <span style={{ top: "13%", left: "25%" }}>10%</span>
          <span style={{ top: "40%", left: "12%" }}>10%</span>
          <span style={{ top: "75%", left: "15%" }}>15%</span>
        </SupplyChart>
        <ChartInfoPart>
          <ChartInfo color="#c0e974">Air drip and Staking Protocol</ChartInfo>
          <ChartInfo color="#91fecf">Liquidity pool</ChartInfo>
          <ChartInfo color="#7DB8E1">Platton Dao</ChartInfo>
          <ChartInfo color="#B7F6FE">Creator team</ChartInfo>
          <ChartInfo color="#f4fee2">Project outreach</ChartInfo>
        </ChartInfoPart>
      </SupplyChartSection>
    </SupplyWrapper>
  );
};

export default Supply;
