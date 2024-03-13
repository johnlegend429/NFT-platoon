import styled from "styled-components";

export const FeatureWrapper = styled.div`
  margin: 100px 0 0;
  h1 {
    text-align: center;
    color: white;
    font-family: "Permanent Marker", cursive;
    font-size: 42px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 90px;
  }
`;

export const FeatureGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 318px;
  color: #fff;
  margin: 0 10px 100px;
  @media screen and (max-width: 425px) {
    margin: 0 10px 50px;
  }
  img {
    width: 92px;
    height: 67px;
  }
  h3 {
    margin: 20px 0;
    font-size: 20px;
    line-height: 28px;
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 14px;
    line-height: 22.4px;
  }
`;
