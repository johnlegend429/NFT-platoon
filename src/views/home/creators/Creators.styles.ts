import styled from "styled-components";

export const CreatorWrapper = styled.div`
  margin: 150px 0;
  background-color: #282626;
  padding: 5% 0;
  h1 {
    margin: 0;
    margin-bottom: 5%;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    font-size: 44px;
    line-height: 49px;
    color: #fff;
  }
  @media screen and (max-width: 500px) {
    margin: 50px 0;
  }
`;

export const CreatorGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(4, 1fr); */
  justify-content: center;
`;

export const CreatorCardWrapper = styled.div`
  width: 242px;
  margin: auto;
  h3,
  h4,
  p {
    margin: 0;
    color: #fff;
    text-align: center;
    margin-bottom: 6px;
    font-family: poppins-semibold, poppins, sans-serif;
  }
  h4 {
    font-size: 19px;
  }
  h4 {
    font-size: 17px;
  }
  p {
    font-size: 14px;
  }
  h4,
  p {
    font-weight: 200;
  }
`;
