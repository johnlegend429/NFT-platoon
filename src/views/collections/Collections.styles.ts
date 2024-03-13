import styled from "styled-components";

export const CollectionsWrapper = styled.div`
  padding-top: 71px;
  padding-bottom: 50px;
`;

export const CollectionCardWrapper = styled.div`
  background-color: #242323;
  padding: 4%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  transition: all 0.3s;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  margin-right: 50px;
  min-width: 139px;
  max-width: 139px;
  img {
    width: 100%;
    border-radius: 9999px;
    background-color: #fff;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const DescWrapper = styled.div`
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const GifWrapper = styled.div`
  min-width: 341px;
  max-width: 341px;
  margin-left: 50px;
  transition: all 0.3s;
  img {
    width: 100%;
    border-radius: 9999px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    min-width: 250px;
    max-width: 250px;
  }
`;

export const DescTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-family: "Permanent Marker", cursive;
  font-size: 28px;
  font-weight: 700;
  line-height: 39.2px;
  color: #c0ed38;
`;

export const DescText = styled.p`
  margin: 0;
  font-family: poppins-extralight, poppins, sans-serif;
  margin-top: 20px;
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 200;
  color: #fff;
`;

export const CollectionDesc = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:first-child) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;
