import styled from "styled-components";

export const FAQWrapper = styled.div`
  background-color: #242323;
  padding: 50px 0;
`;

export const FAQTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
  @media screen and (max-width: 365px) {
    font-size: 30px;
  }
`;

export const FAQCardWrapper = styled.div`
  padding: 20px 0 0;
  border-bottom: 1px solid rgb(192, 237, 56);
  contain: content;
`;

export const FAQHeader = styled.div`
  padding-bottom: 20px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

export const FAQContent = styled.div`
  height: 0;
  transition: all 0.3s;
`;

export const HeaderTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const HeaderIcon = styled.div`
  width: 10px;
  * {
    transition: all 0.3s;
  }
`;

export const FAQDesc = styled.div`
  color: white;
  font-size: 16px;
  line-height: 1.2em;
  padding-bottom: 20px;
`;
