import styled from "styled-components";

export const SupplyWrapper = styled.div`
  max-width: 1420px;
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
  background-color: rgb(36, 35, 35);
  padding: 50px 70px;
  display: grid;
  transition: all 0.3s;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
    padding: 30px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 15px 25px;
  }
`;

export const SupplyDescSection = styled.div`
  width: 100%;
`;

export const SupplyTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  line-height: 64px;
  color: #c0ed38;
  margin: 0;
  transition: all 0.3s;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const SupplyDesc = styled.p`
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 200;
  font-family: poppins-extralight, poppins, sans-serif;
  color: #fff;
  margin: 0;
  margin-top: 30px;
`;

export const SupplyChartSection = styled.div`
  width: 100%;
`;

export const SupplyChart = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  img {
    width: 60%;
    margin: auto;
    margin-top: 10%;
  }
  span {
    position: absolute;
    font-size: 20px;
    font-family: poppins-extralight, poppins, sans-serif;
    color: #fff;
    transition: all 0.3s;
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

export const ChartInfoPart = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  white-space: nowrap;
  margin-top: 20px;
`;

export const ChartInfo = styled.div<{ color?: string }>`
  color: #fff;
  font-size: 14px;
  font-family: poppins-extralight, poppins, sans-serif;
  margin: 15px 15px;
  position: relative;
  padding-left: 30px;
  display: flex;
  align-items: center;
  ::before {
    background-color: ${({ color }) => color};
    content: " ";
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 999px;
  }
`;
