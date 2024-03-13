import React from "react";

import {
  FooterLinks,
  FooterLogoImg,
  FooterText,
  FooterWrapper,
  SocialNav,
} from "./Footer.styles";

import logoImg from "assets/image/footer-logo.png";
import discordImg from "assets/image/discord.png";
import twitterImg from "assets/image/twitter.png";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLogoImg src={logoImg.src} alt="app-logo" />
      <FooterText>
        Prickly Pete's Platoon 2021 . All Rights Reserved
        <br />
        pricklypetesplatoon@gmail.com
      </FooterText>
      <FooterLinks>
        <a href="https://twitter.com/Pricklyplatoons" target="_blank">
          <SocialNav src={twitterImg.src} alt="twitterImg" />
        </a>
        <a href="http://discord.gg/wt3PwDSETz" target="_blank">
          <SocialNav src={discordImg.src} alt="discordImg" />
        </a>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
