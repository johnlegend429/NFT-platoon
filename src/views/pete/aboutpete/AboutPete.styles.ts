import styled from "styled-components";

export const AboutPeteWrapper = styled.div`
  padding: 100px 0;
`;

export const AboutTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  line-height: 64px;
  font-weight: 700;
  text-align: center;
  color: #c0ed38;
  margin: 0;
  margin-bottom: 50px;
  transition: all 0.3s;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const CardGroup = styled.div`
  max-width: 900px;
  width: 90%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const AboutCardWrapper = styled.div`
  max-width: 375px;
  width: 100%;
  font-family: poppins-extralight, poppins, sans-serif;
  text-align: center;
  padding: 20px;
  margin: auto;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #f2f2f2;
`;

export const CardDesc = styled.p`
  font-weight: 200;
  margin: 0;
  margin-top: 20px;
  font-size: 16px;
  line-height: 25.6px;
  color: #fff;
`;
