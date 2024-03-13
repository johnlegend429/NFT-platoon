import styled, { isStyledComponent } from "styled-components";

export const FooterWrapper = styled.div`
  padding: 40px 0;
  text-align: center;
  background-color: rgb(40, 38, 38);
`;

export const FooterText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: #e1e1e1;
  line-height: 1.4em;
  font-family: poppins-extralight, poppins, sans-serif;
`;

export const FooterLogoImg = styled.img`
  width: 120px;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialNav = styled.img`
  width: 39px;
  cursor: pointer;
  margin: 0 5px;
`;
