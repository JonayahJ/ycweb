import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import GatareText from "../../components/Sections/WashingStations/GatareText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="Gatare">
      <Breadcrumb title="Gatare">
        <BreadcrumbItem name="Washing Station" />
        <BreadcrumbItem name="Gatare" current />
      </Breadcrumb>
      <GatareText />
      <InstagramOne />
    </LayoutFour>
  );
}