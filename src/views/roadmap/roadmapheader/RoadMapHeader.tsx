import React, { useEffect } from "react";
import { RoadMapHeaderWrapper } from "./RoadMapHeader.styles";

import roadmapBG from "assets/image/roadmap-bg.jpg";

const RoadMapHeader: React.FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const bgElem: any = document.getElementById("roadmap-bg");
    bgElem.style.transform =
      "scale(" +
      (1 + window.scrollY / 1000) +
      ", " +
      (1 + window.scrollY / 1500) +
      ")";
  };
  return (
    <RoadMapHeaderWrapper id="wrapper">
      <img src={roadmapBG.src} alt="roadmapBG" id="roadmap-bg" />
    </RoadMapHeaderWrapper>
  );
};

export default RoadMapHeader;
