import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import OurStoryText from "../../components/Sections/About/OurStoryText"
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/pages/about.json";
import Benefits from "../../components/Other/Benefits";
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";

export default function () {
  return (
    <LayoutFour title="Our Story">
      <Breadcrumb title="Our Story">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Our Story" current />
      </Breadcrumb>
      <OurStoryText />
      <IntroductionTwo data={introductionTwoData} style={{ marginBottom: 0 }} />
      <IntroductionNine />
      <Benefits />
      <InstagramTwo />
    </LayoutFour>
  );
}