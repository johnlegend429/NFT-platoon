import styled from "styled-components";

export const MeetPlatoonWrapper = styled.div`
  h1,
  p {
    text-align: center;
    color: white;
    margin: 0;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 42px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  p {
    span {
      font-size: 22px;
    }
    font-size: 18px;
    line-height: 28.8px;
    font-weight: 200;
    font-family: poppins-semibold, poppins, sans-serif;
    margin: 50px auto;
    max-width: 1000px;
    width: 100%;
  }
`;

export const SliderImg = styled.div`
  max-width: 330px;
  width: 100%;
  position: relative;

  :hover {
    ::after {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-color: #dddddd80;
    }
  }
  img {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
