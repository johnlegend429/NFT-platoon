import styled from "styled-components";

export const StorySummaryWrapper = styled.div``;

export const StoryImg = styled.img`
  width: 100%;
`;

export const StoryCardWrapper = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
  margin-top: -18%;
  position: relative;
`;

export const StoryCard = styled.div`
  background-color: rgb(40, 38, 38);
  padding: 5% 10%;
  margin-bottom: 50px;
  font-family: poppins-extralight, poppins, sans-serif;
`;

export const CardTitle = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  transition: all 0.3s;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const CardDesc = styled.p`
  color: #fff;
  line-height: 1.6em;
  font-size: 18px;
  font-weight: 200;
  margin: 0;
  margin-top: 20px;
  transition: all 0.3s;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const StorySaga = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 84px;
  margin: 0;
  margin-bottom: 10px;
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
