import styled from "styled-components";

export const ClansWrapper = styled.div`
  max-width: 1580px;
  width: 97%;
  margin: auto;
  background-color: #282626;
  padding: 5% 10%;
  h1 {
    color: #fff;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    font-size: 36px;
    margin: 0;
    line-height: 43px;
  }
`;

export const ClansCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 331px;
  max-width: 331px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
  @media screen and (max-width: 500px) {
    min-width: 230px;
    max-width: 230px;
  }

  img {
    width: 100%;
    border-radius: 9999px;
    background-color: white;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  font-family: poppins-semibold, poppins, sans-serif;
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
  h2,
  h3,
  p {
    margin: 0;
  }
  h2 {
    font-size: 28px;
    line-height: 33.6px;
    color: #c0ed38;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    margin-top: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 200;
  }
`;
