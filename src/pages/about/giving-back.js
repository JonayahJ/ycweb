import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import GivingBackText from "../../components/Sections/About/GivingBackText"
import IntroductionEleven from "../../components/Sections/Introduction/IntroductionEleven";

export default function () {
  return (
    <LayoutFour title="Giving Back">
      <Breadcrumb title="Giving Back">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Giving Back" current />
      </Breadcrumb>
      <GivingBackText />
      <IntroductionEleven />
    </LayoutFour>
  );
}