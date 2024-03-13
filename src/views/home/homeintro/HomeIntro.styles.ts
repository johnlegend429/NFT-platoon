import styled from "styled-components";

export const HomeIntroWrapper = styled.div`
  position: relative;
`;

export const HomeImage = styled.img`
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const HomeTextWrapper = styled.div`
  margin-top: -10%;
  position: relative;
  z-index: 2;

  h1,
  h2 {
    margin: 0;
    padding: 0 40px 0 20px;
    width: fit-content;
    color: white;
    line-height: 84px;
    background-color: #282626;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 60px;
    font-weight: 500;
  }
  h2 {
    font-size: 56px;
    margin-top: 20px;
    margin-bottom: 50px;
    font-family: poppins-semibold, poppins, sans-serif;
    span {
      color: #c0ed38;
    }
  }
  @media screen and (max-width: 1024px) {
    h1,
    h2 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    h1,
    h2 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    h1,
    h2 {
      font-size: 24px;
    }
  }
`;

export const Shape = styled.div<{ no: number }>`
  ${({ no }) => {
    switch (no) {
      case 1:
        return `
          top: -3%;
          left: 55%;
          transform: translate3d(30%, -70%, 0) rotate(45deg);
          transition: all 1s;
          opacity: 0;
        `;
      case 2:
        return `
          top:40%;
          right:0;
          transform: translateX(10%);
          transition: all 2.3s;
          opacity: 0;
        `;
      case 3:
        return `
          bottom:5%;
          left:20%;
          transform: translateX(-100%) rotate(-45deg);
          transition: all 2.5s;
        `;
      default:
        break;
    }
  }}
  position: absolute;
  max-width: 250px;
  width: 20%;
  img {
    width: 100%;
  }
`;
