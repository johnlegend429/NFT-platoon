import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "components";
import {
  FAQCardWrapper,
  FAQContent,
  FAQDesc,
  FAQHeader,
  FAQTitle,
  FAQWrapper,
  HeaderIcon,
  HeaderTitle,
} from "./FAQ.styles";

const faqData = [
  {
    title: "How can we get enrolled?",
    desc: "Simple...Apply using our Enrollment Form if you do not have a developer to configure your mint. We'll review all applications, verify and certify teams + projects, and put each project to the PlatoonDAO vote. If your project interests a majority of them Cactoons, you get enrolled on to our Launchpad... And to the Moon!!",
  },
  {
    title: "How much time needed for deploying a mint?",
    desc: "The Platoon Launchpad is not designed as an eleventh hour quick fix. We verify and vet each project very carefully, as the primary goal is to provide value to the Solana NFT ecosystem. But once your project gets enrolled, we can get you mint ready within 24 hours. ",
  },
  {
    title: "What happens to Mint Revenue Collected?",
    desc: "We collect all mint revenue proceedings in a fresh Solana wallet and release them in 3 stages - First 25% after 24 Hours of Mint Sell Out, next 25% after 48 Hours of Mint Sell Out and final 37% after 72 Hours of Mint Sell Out. This methodology has been adopted to prevent immediate harsh rugs and ensure that project Devs keep delivering even after their collection sells out.",
  },
  {
    title: "What are the future growth plans of the Launchpad?",
    desc: "In a phased manner, we plan to introduce custom UI design for project websites and mint sites, NFT artwork development support, project roadmap consultation, tokenomics consultation, staking portal development, breeding / Mutation mechanics etc. These services will be offered as add-ons or ala-carte features by the Launchpad and will charge a separate fee for each service availed by projects.",
  },
];

const FaqCard = (props: any) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const faqElem: any = document.getElementById("faq" + props.id);
    const faqContentElem: any = document.getElementById(
      "faq-content" + props.id
    );
    if (props.active !== props.id) {
      faqContentElem.style.height = 0;
    } else {
      faqContentElem.style.height =
        faqElem.getBoundingClientRect().height + "px";
    }
    setOpen((prev) => !prev);
  }, [props.active]);
  return (
    <FAQCardWrapper>
      <FAQHeader onClick={() => props.onClick(props.id)}>
        <HeaderTitle>{props.title}</HeaderTitle>
        <HeaderIcon>
          <FaChevronRight
            size={10}
            fill="#BFDBFE"
            style={{
              transform:
                props.id === props.active ? "rotate(-90deg)" : "rotate(90deg)",
            }}
          />
        </HeaderIcon>
      </FAQHeader>
      <FAQContent id={"faq-content" + props.id}>
        <FAQDesc
          id={"faq" + props.id}
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </FAQContent>
    </FAQCardWrapper>
  );
};

const FAQ: React.FC = () => {
  const [active, setActive] = useState(-1);
  const handleClick = (id: number) => {
    if (id === active) {
      setActive(-1);
    } else {
      setActive(id);
    }
  };
  return (
    <FAQWrapper>
      <Container maxW={900}>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        {faqData.map((item: any, key: any) => (
          <FaqCard
            key={key}
            id={key}
            title={item.title}
            text={item.desc}
            active={active}
            onClick={handleClick}
          />
        ))}
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;
