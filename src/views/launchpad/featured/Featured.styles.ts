import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  padding: 100px 0;
`;

export const FeaturedTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const FeaturedGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: max-content;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  transition: all 0.3s;
  margin: auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
