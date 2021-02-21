import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import AboutFrancoisText from "../../components/Sections/About/AboutFrancoisText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="About Francois">
      <Breadcrumb title="About Francois">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="About Francois" current />
      </Breadcrumb>
      <AboutFrancoisText />
      <InstagramOne />
    </LayoutFour>
  );
}