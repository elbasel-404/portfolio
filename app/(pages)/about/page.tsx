import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { Dots, HomeButton, SlideInFromBottom } from "@app/components";
import {
  ABoutPageMainTitle,
  AboutPageDownArrow,
  AboutPageSection,
  AboutPageTitle,
  Bio,
  Technologies,
} from "@app/components/AboutPage";

const AboutPage = () => {
  return (
    <SlideInFromBottom>
      <HomeButton />
      <Dots />
      <main className="h-[100dvh] overflow-y-auto snap-y scroll-smooth snap-mandatory app-scrollbar">
        <AboutPageSection className="items-center justify-center">
          <ABoutPageMainTitle />
          <AboutPageDownArrow id="bio" />
        </AboutPageSection>
        {/* <AboutPageSection id="bio" className="relative items-center px-4"> */}
          {/* <AboutPageDownArrow id="tech" /> */}
        {/* </AboutPageSection> */}
        <AboutPageSection id="tech">
          <AboutPageTitle text="Technologies" />
          <Technologies />
        </AboutPageSection>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
