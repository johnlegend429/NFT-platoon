import styled from "styled-components";

export const EarthWrapper = styled.div`
  background-color: #282626;
  margin: 200px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 100px 0;
    flex-direction: column;
  }
`;

export const EarthTextWrapper = styled.div`
  width: 40%;
  padding: 30px 6%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
  h1,
  p {
    margin: 0;
    color: #fff;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 35px;
    line-height: 49px;
  }
  p {
    font-size: 16px;
    line-height: 25.6px;
    font-family: poppins-semibold, poppins, sans-serif;
    font-weight: 200;
    margin: 20px 0 30px;
  }
`;

export const EarthImageGroupWrapper = styled.div`
  border-left: 1px solid #333;
  & > :first-child {
    transform: translateY(-15%);
  }
  & > :last-child {
    transform: translateY(15%);
  }
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    border-left: none;
    border-top: 1px solid #333;
    width: 100%;
    & > :first-child {
      transform: translateY(0%);
    }
    & > :last-child {
      transform: translateY(0%);
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const EarthImageWrapper = styled.div`
  width: 240px;
  height: 346px;
  margin: 14px 7px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
