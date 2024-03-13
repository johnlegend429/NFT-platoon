import styled from "styled-components";

export const RoadMapHeaderWrapper = styled.div`
  padding-top: 71px;
  height: 621px;
  contain: content;
  @media screen and (max-width: 500px) {
    height: 471px;
  }
  img {
    height: 550px;
    transition: all 0.3s;
    width: 100vw;
    object-fit: cover;
    object-position: 50% 50%;
    @media screen and (max-width: 500px) {
      height: 300px;
    }
  }
`;
