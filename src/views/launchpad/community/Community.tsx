import React from "react";

import {
  CommunityButtonWrapper,
  CommunityDesc,
  CommunityTitle,
  CommunityWrapper,
} from "./Community.styles";

import { Button } from "components";

import dashed from "assets/image/dashed.svg";
import dots from "assets/image/dots-1.svg";

const Community: React.FC = () => {
  return (
    <CommunityWrapper>
      <img src={dashed.src} className="dashed" alt="dashed" />
      <CommunityTitle>A Community Driven Launchpad</CommunityTitle>
      <CommunityDesc>
        {
          "From reaching out to collectively vetting applied projects, the Prickly Pete's Platoon Community is deeply engaged in the Launchpad Mechanics. Each member is rewarded with a Finder's Fee for successfully enrolling a project on to the Platoon Launchpad."
        }
      </CommunityDesc>
      <CommunityButtonWrapper>
        <Button
          maxW={267}
          label="Apply now"
          fColor="#fff"
          bgColor="#000"
          border="#000"
          onClick={() => {}}
        />
      </CommunityButtonWrapper>
      <div className="dot-group">
        <img src={dots.src} className="dots" alt="dots" />
        <img src={dots.src} className="dots" alt="dots" />
        <img src={dots.src} className="dots" alt="dots" />
      </div>
    </CommunityWrapper>
  );
};

export default Community;
