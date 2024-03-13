import styled from "styled-components";

export const UtilitiesWrapper = styled.div`
  max-width: 1420px;
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
  background-color: rgb(36, 35, 35);
  padding: 50px 0;
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const UtilitiesTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  font-family: "Permanent Marker", cursive;
  text-align: center;
  color: #fff;
  margin: 0;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const UtilitiesImage = styled.div`
  max-width: 980px;
  width: 90%;
  margin: auto;
  img {
    width: 100%;
  }
`;
