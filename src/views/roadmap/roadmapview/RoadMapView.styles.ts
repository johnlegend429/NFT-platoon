import styled from "styled-components";

export const RoadMapViewWrapper = styled.div`
  margin-top: -210px;
  position: relative;
  margin-bottom: 100px;
  transition: all 0.3s;
  @media screen and (max-width: 500px) {
    margin-top: -250px;
  }
`;

export const RoadMapTitle = styled.h1`
  background-color: #282626;
  font-family: "Permanent Marker", cursive;
  font-size: 60px;
  color: #fff;
  margin: 0 auto;
  width: fit-content;
  transition: all 0.3s;
  padding: 5px 60px;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const RoadMapContent = styled.div`
  background-color: rgb(36, 35, 35);
  padding: 50px 8% 100px;
`;

export const RoadMapPeriod = styled.h3`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 28px;
  color: #c0ed38;
  line-height: 1.2em;
  margin: 0;
  margin-bottom: 70px;
  margin-left: 110px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px !important;
  }
`;

export const RoadMapCard = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      margin: auto;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    direction: ltr !important;
    margin-bottom: 20px;
  }
`;

export const RoadMapCounter = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #242323;
  line-height: 1.2em;
  background-color: #fff;
  font-weight: 700;
  font-family: poppins-extralight, poppins, sans-serif;
`;

export const RoadMapImgWrapper = styled.div`
  width: 268px;
  height: 268px;
  contain: content;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
  max-height: 268px;
  border-radius: 30px;
  position: relative;
  margin: 0 38px 0 40px;
  @media screen and (max-width: 500px) {
    margin: 20px auto 0;
  }
  @media screen and (max-width: 375px) {
    width: 230px;
    height: 230px;
  }
  img {
    width: 100%;
    background-color: rgb(47, 46, 46);
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: transparent;
    transition: all 0.3s;
    :hover {
      background-color: #fff;
    }
  }
`;

export const RoadMapDesc = styled.p`
  max-width: 460px;
  width: 100%;
  margin: 0;
  color: #fff;
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 16px;
  font-weight: 200;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const RoadMapTotalCard = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RoadMapTotalView = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  color: #fff;
  width: calc(100% - 72px - 60px);
  margin: 0 30px;
  margin-bottom: 40px;
  & > img {
    width: 100%;
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 15px;
  }
  p {
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 200;
    max-width: 768px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    direction: ltr !important;
    text-align: center;
  }
`;

export const RoadMapGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  flex-wrap: wrap;
  img {
    margin: 10px;
  }
`;

export const RoadMapFullDesc = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  color: #fff;
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
  }
  p {
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 200;
    max-width: 768px;
    margin-top: 15px;
    width: 100%;
  }
`;
