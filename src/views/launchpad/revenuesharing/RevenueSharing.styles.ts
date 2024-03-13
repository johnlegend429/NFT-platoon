import styled from "styled-components";

export const RevenueWrapper = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 100px 0;
  }
`;

export const RevenueDescPart = styled.div`
  text-align: left;
  transition: all 0.3s;
  width: 38%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const RevenueTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
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

export const RevenueDesc = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: poppins-extralight, poppins, sans-serif;
  line-height: 28.8px;
  color: #fff;
  font-weight: 200;
  margin-top: 15px;
`;

export const RevenueCardGroup = styled.div`
  width: 55%;
  transition: all 0.3s;
  & > *:not(:first-child) {
    margin-top: 25px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const RevenueCard = styled.div`
  background-color: #242323;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CardImgWrapper = styled.div`
  margin-right: 30px;
  position: relative;
  width: 133px;
  height: 133px;
  transition: all 0.2s;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    background-color: transparent;
    border-radius: 8px;
    :hover {
      background-color: #fff;
    }
  }
  img {
    border-radius: 8px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
    width: 100%;
    height: auto;
    img {
      width: 100%;
    }
  }
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  color: white;
  font-family: "poppins-semibold", "poppins", sans-serif;
  .get {
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1.1px;
    margin: 0 10px;
  }
  .percent {
    color: #c0ed38;
  }
`;

export const CardDesc = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 28.8px;
  color: white;
  font-family: "poppins-semibold", "poppins", sans-serif;
  font-weight: 200;
  span {
    color: #c0ed38;
    font-weight: 600;
  }
`;

export const RevenueChartWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ChartDesc = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 16px;
  line-height: 28.8px;
  p {
    white-space: nowrap;
    margin: 0;
    color: #fff;
  }
  h4 {
    white-space: nowrap;
    margin: 0;
    color: #c0ed38;
  }
`;

export const ChartImgWrapper = styled.div`
  margin-left: 30px;
  max-width: 278px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const ChartDescGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > *:not(:first-child) {
    margin-top: 140px;
  }
`;
