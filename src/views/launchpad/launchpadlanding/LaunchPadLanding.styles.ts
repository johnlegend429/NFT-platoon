import styled from "styled-components";

export const LaunchPadWrapper = styled.div`
  padding-top: 71px;
  height: calc(100vh - 71px);
  display: flex;
`;

export const BlackBoard = styled.div`
  background-color: #000;
  width: 25%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  width: 75%;
  position: relative;
  transition: all 0.3s;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const LaunchPadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LaunchPadCardWrapper = styled.div`
  background-color: rgb(36, 35, 35);
  position: absolute;
  left: -200px;
  top: 50%;
  transition: all 0.3s;
  transform: translateY(-50%);
  @media screen and (max-width: 1024px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const LaunchPadCard = styled.div`
  position: relative;
  padding: 45px 45px 60px;
  max-width: 490px;
  width: 90%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h1`
  color: #c0ed38;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  line-height: 60px;
  transition: all 0.3s;
  font-family: "Permanent Marker", cursive;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const CardDesc = styled.p`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 16px;
  line-height: 28.8px;
  color: #ffffff;
  font-weight: 200;
  transition: all 0.3s;
  margin: 20px 0 30px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const LaunchPadLogo = styled.img`
  position: absolute;
  width: 223px;
  bottom: -60px;
  transition: all 0.3s;
  right: -100px;
  @media screen and (max-width: 768px) {
    right: 0;
  }
  @media screen and (max-width: 500px) {
    width: 40%;
  }
`;
