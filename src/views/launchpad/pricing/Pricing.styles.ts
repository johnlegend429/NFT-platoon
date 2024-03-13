import styled from "styled-components";
import { SalesCardProps } from "types/componentsProps";

export const PricingWrapper = styled.div`
  padding: 70px 0;
  text-align: center;
  background-color: rgb(36, 35, 35);
`;

export const PricingTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const PricingDesc = styled.p`
  padding: 20px 0;
  font-size: 16px;
  line-height: 28.8px;
  color: #fff;
  width: 80%;
  font-family: poppins-extralight, poppins, sans-serif;
  margin: auto;
  font-weight: 200;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const SalesCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const CardContent = styled.span`
  font-size: 60px;
  font-weight: 700;
  font-family: poppins-extralight, poppins, sans-serif;
  color: #324158;
  letter-spacing: 3px;
`;

export const FreeSales = styled.div`
  height: 91px;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    position: absolute;
    height: 91px;
    width: 70%;
  }
  span {
    position: relative;
    z-index: 1;
    font-size: 60px;
    font-weight: 700;
    font-family: poppins-extralight, poppins, sans-serif;
    color: #fff;
    letter-spacing: 3px;
  }
`;
