import React from "react";

import {
  StoryImg,
  StoryCard,
  StorySummaryWrapper,
  StoryCardWrapper,
  CardTitle,
  CardDesc,
  StorySaga,
} from "./StorySummary.styles";

import storyImg from "assets/image/storyImg.jpg";

const StorySummary: React.FC = () => {
  return (
    <StorySummaryWrapper>
      <StoryImg src={storyImg.src} alt="storyImg" />
      <StoryCardWrapper>
        <StoryCard>
          <CardTitle>Story: Prelude</CardTitle>
          <CardDesc>
            {
              "In a conference room in TOI-1231b, a six member team of Jello Bots worriedly discuss the deaths that have recently occurred in their planet in the last 312 years. An immediate investigation suggested that the bodies of the deceased were drying up from inside, as a result of a curling tissue syndrome. For the Jello Bots, death was overcome in their planet through insightful research, community strategies and their application. These recent deaths have shook their belief on the state of affairs in -TOI-1231b. The task force is now entrusted with the responsibility of quickly scanning the galaxy and come up with a life potion for their communities."
            }
          </CardDesc>
          <CardDesc>
            {"4063 AD"}
            <br />
            {
              "It took more than a year and deaths in thousands within the Jello Bot community, before the task force could zoom onto the fallen Earth for the life potion that they were searching for to cheat death again in TOI-1231b. Earth, which was a vital planet within the Galaxy Milky Way had reduced to rags and debris, almost 400 years ago. It was exploited by humans to the extent that the life bearing ecosystems on Earth collapsed. Gradually, many of the perpetrators who were behind this magnanimous doom left the planet to seek safe haven in Kepler 452b and TOI 700d, while a larger lot was left behind to perish and phase out as a living race."
            }
            <br />
            {
              "The Jello Bot task force was highly committed, extremely equipped technologically, and mindful enough to still consider the fallen Earth, while searching for the life potion. They recorded small scale blasts and surface movement activities on Earth, and upon closely investigating, indeed found a green coloured pigment in their high range DRV scans that had the exact configuration of the life potion that their scientist group led by Dr. 214OnigoXR have discovered, a couple of decades back. According to her scientific advice, the task force reconvenes and plans to embark upon a journey to this shattered planet called Earth."
            }
          </CardDesc>
          <CardDesc>
            {"4065 AD"}
            <br />
            {
              "For nearly two years, the Jello Bot Task Force is travelling through dark, uncharted alleys in space, crafting their way through meteor clusters, bursting stars, severe gravitational forces, and splintering comet tails. They expect to land on Earth in the next two weeks. As per an efficient plan among themselves, it’s going to be an in and out job. They are supposed to land on Earth, do a quick scan of the movement activities, report back and wait for command, leading to a final capture of the life potion source and leave back for TOI-1231b."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 1</CardTitle>
          <CardDesc>
            {"The landing of the Jello Bot Shuttle XTGeist was smooth."}
            <br />
            {
              "Earth was in shatters. Huge cities crumbling under their own weight. Water bodies have dried out. The boats and ships that once sailed across vast water bodies could be seen parked on sea beds. Vast junkyards of cars, technological equipment, redundant everyday objects and tools, non-degradable matter like rubber, plastic, metal scraps, glass could be found flooding the surface of this once lively planet that housed huge swathes of grasslands, hectares of temperate forests and kilometers of tropical beaches. It seemed lifeless, with a certain dead silence, and the wind shattered it with a distant noise of a building crumbling down. The Jello Bots looked around on to this dismal broken place, with junk all around, each of which has an independent story to tell. They have learned about the vitality of life on Earth in their childhood, but this present visual sank their hopes of finding the potion for which they have travelled for almost 2 years now. The team decided to cover more ground on their own and investigate the ground conditions in depth."
            }
            <br />
            {
              "A few steps further, and the Jello Bots encountered a street, which seemed to be once an Asian Bazaar of wholesale goods. But now, it was the home of human bones…lakhs and lakhs of them."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 2</CardTitle>
          <CardDesc>
            {
              "The street was strewn with human bones and skeletons, still covered in tattered remains of the clothes that they were wearing when some catastrophe hit them. Might have been a radioactive calamity or some sort of a bio-chemical hazard that struck suddenly, leading to mass panic, hysteria and stampede. The Jello Bot GovanRT navigated its way carefully through the debris of human structural remains, further entering into a subway tunnel. It was extremely dark, with a few intermittent sparks at junction boxes and light sources that lit the subway partially. GovanRT activated it’s own search light and slowly moved forward. The underground space seemed to be housing someone…or a group…or maybe a colony of some life-form, definitely not humans but some other resilient lively creatures who have fought against all odds to survive. The space was intentionally arranged with a few furniture, machine equipment and light sources were working within this underground quarter. Out of curiousity, GovanRT took a step ahead towards a metal closet which was producing some kind a rambling noise from inside. Suddenly, the door opened and a weird mutant rolled out of it and scurried past the Bot…out of the underground abode."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 3</CardTitle>
          <CardDesc>
            {
              "In what GovanRT could gauge in that instant, the mutant seemed to be of a plant origin, that has collaborated with bones and machine parts as bodily members and armour to survive the catastrophic conditions on the Earth. The surviving mutant seemed to have salvaged machine parts and everyday tools from an earlier time, in order to obfuscate its weaknesses and build itself for future wars. In the dimly lit space, the Bot could make out that the mutant was carrying a bag full of grenades. Were they at war? Whom were they battling? Is there other life forms still surviving on Earth? Are there other extra-planetary teams as well, searching for the life-potion on Earth? These crazy, momentary thoughts creeped into GovanRT and made it squiggle out of the tunnel immediately with an intent to follow the Earthly mutant on to the Bazaar Street. Out there, the Bot was taken by surprise to see a gang war raging…many such mutants were shouting slogans together and were taking positions on the street, seemingly waiting for others to arrive and fight."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 4</CardTitle>
          <CardDesc>
            {
              "GovanRT hid itself behind a heap of cracked pelvic girdles and looked at the savage mutant warriors as they took on each other, drilling holes, hacking to pieces, gouging eyes, melting each other, for a resource that was abundant in TOI-1231b, once plenty on Earth as well - Water. These survivors were fighting for a water-hand pump, a source which might last them for another few days."
            }
            <br />
            {
              "GovanRT started scanning each of the mutants who were visible in front of it. All the scans were transmitted to the Task Force Data Head, further corresponding with their own planet Data Center."
            }
            <br />
            {
              "As the winning mutants extracted and consumed a bit of water from the hand pump, their bodies turned greener. The warriors turned sluggish and sleepy and scurried into several underground tunnels, thereby turning the war zone into a tranquil, silent space, with death looming over it calmly."
            }
            <br />
            {
              "GovanRT communicated with the other members of its team and decided to reconvene with them to report the ghastly proceeding that he saw on the street, a while back."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 5</CardTitle>
          <CardDesc>
            {
              "The report against the scan arrived back to Shuttle XTGeist, an Earth day later from TOI-1231b. The task force was amazed to see the observations put across by Dr. 214OnigoXR’s office. The report claimed that the resilient, mutant warriors that GovanRT encountered the previous day were the last creatures alive on Earth - A family of uniquely grown succulent Cactii, which consumes less than a regular glass of water in a whole Earth Year, to stay alive. Though it had other disadvantages to its existence - immobility, weak bodily defense, fast growing bodily features etc. Gradually, with changing climatic conditions on Earth, these cactii got uprooted from their original grounds and were transported to uncanny ex-urban contexts, especially by sand hurricanes and cyclones. This led them to exploit the opportunity to collaborate and mutate with machines and tools, in order to counter their bodily weaknesses with armoured gears, especially using obsolete everyday use objects such as torches, drill machines, hand-blenders, loudspeakers, pliers, electrical wires, scrap metal parts, gears, fans, stearing wheels, tyres etc. Each of the cactii grew in size with every mutation, along with an increase in speed, strength and longevity."
            }
            <br />
            {
              "The Jello Bot task force, including GovanRT read the report in utter amazement. There was an extreme case of resilience and sustainability in front of them, with a strong sense of adaptive reuse of waste for ones own existence. A quick meeting among them, and the decision was made - they will try and capture 3 powerful, variants of the mutant cactii and start their journey back to TOI-1231b."
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 6</CardTitle>
          <CardDesc>
            {
              "The war was raging within the mutant cactii colonies, as the life supporting resources on Earth were further depleting with each passing day. The task of capturing the 3 powerful variants of the resilient cactus seemed much easier for the Jello Bots. The mutant cactii stood divided in front of a much powerful and technologically advanced intruder from TOI-1231b. Without wasting much time, the Jello Bots started acting upon their decision and attacked the mutant cactii colonies with all their might. The mutants were killed in unfathomable numbers, while a lot many scrambled into their known hiding spots, in order to regroup and reassess their options. Most of such efforts went into vain, as the highly equipped Jello Bots scanned their hideouts easily and plundered them with high grade ammunition. The Earthy Mutants found themselves completely unmatched in front of the extra-terrestrial team. They were out of moves and were on the verge of surrendering, when one among them came forward with a seemingly new idea - to confront the intruders not as individuals but as a platoon, like brothers in arms, fighting not just for themselves, but for the last remnants of life on Earth."
            }
            <br />
            {
              "This was an extremely difficult task for them as they have always led lives of outlaws, fighting for their own survival. But given the circumstances, each of the surviving mutant cactii agreed to the proposed idea. Still the greater concern that loomed over them was - How a platoon work??"
            }
          </CardDesc>
        </StoryCard>
        <StoryCard>
          <CardTitle>Episode 7</CardTitle>
          <CardDesc>
            {
              "In the absence of a leader, the mutant cactii found it immensely difficult to organize themselves as a battalion of soldiers and chalk out plans to attack or defend. Although the cactii started revolting back as clusters, their unorganized revolution seemed to be advantageous to the Jello Bots, who were getting closer to their target steadily. The damage to the intruder team was meagre, while the mangled bodies of the martyred Earthy mutants were piling up rampantly."
            }
            <br />
            {
              "Earth needed a leader badly. Someone who is skilled in warcraft as well as strategizing quickly against the technological assault wrecked by the Jello Bots. One who is observant and has a detailed understanding of the built-unbuilt geography of the planet. One who can start decoding the weak spots of the Jello Bots and plan a counter attack on them. One who can inspire the cactii to cheer together, shout together, fight together and win together."
            }
            <br />
            {
              "It was almost dusk and as the morale of the mutants was crumbling, there was a sharp, shrill sound from the other end of an underground sewer tunnel, where the surviving cactii had gathered to discuss their chances. A large, looming shadow against the red evening sky made everyone in the tunnel stare with awe. It seems that Earth has finally found her Hero - the Leader much awaited…"
            }
          </CardDesc>
        </StoryCard>
      </StoryCardWrapper>
      <StorySaga>The Saga Continues...</StorySaga>
    </StorySummaryWrapper>
  );
};

export default StorySummary;
