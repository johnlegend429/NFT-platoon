import styled from "styled-components";

export const CommunityWrapper = styled.div`
  contain: content;
  background-color: #bada55;
  &,
  * {
    transition: all 0.3s;
  }
  position: relative;
  padding: 50px 0;
  & > img {
    position: absolute;
    top: 80px;
    height: 76px;
  }
  .dashed {
    width: 273px;
    left: -73px;
  }
  .dots {
    height: 76px;
  }
  .dot-group {
    right: -60px;
    top: 80px;
    position: absolute;
    & > * {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    .dashed {
      left: -150px;
    }
    .dot-group {
      right: -140px;
    }
  }
  @media screen and (max-width: 900px) {
    .dashed,
    .dot-group {
      display: none;
    }
  }
`;

export const CommunityTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  width: 90%;
  text-align: center;
  margin: 0;
  margin: auto;
  margin-bottom: 10px;
  color: #242323;
  font-family: "Permanent Marker", cursive;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const CommunityDesc = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: 25.6px;
  width: 50%;
  color: #242323;
  transition: all 0.3s;
  font-family: poppins-extralight, poppins, sans-serif;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const CommunityButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;
