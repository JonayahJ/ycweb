import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import AboutFrancoisText from "../../components/Sections/About/AboutFrancoisText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="Giving Back">
      <Breadcrumb title="Giving Back">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Giving Back" current />
      </Breadcrumb>
      <AboutFrancoisText />
      <InstagramOne />
    </LayoutFour>
  );
}