import styled from "styled-components";

export const PeteIntroWrapper = styled.div`
  padding-top: 71px;
`;

export const PeteIntroPart = styled.div`
  background-color: rgb(36, 35, 35);
  min-height: calc(100vh - 71px);
  display: flex;
  align-items: center;
`;

export const PeteIntroContainer = styled.div`
  padding: 50px 0;
  max-width: 1400px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const DescPart = styled.div`
  width: 45%;
  transition: all 0.3s;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  transform: translateY(50px);
  img {
    width: 100%;
  }
  transition: all 0.3s;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const PeteIntroTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  line-height: 64px;
  color: #c0ed38;
  margin: 0;
  transition: all 0.3s;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const PeteIntroDesc = styled.p`
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 200;
  font-family: poppins-extralight, poppins, sans-serif;
  color: #fff;
`;
