import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import BusanzeText from "../../components/Sections/WashingStations/BusanzeText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="Busanze">
      <Breadcrumb title="Busanze">
        <BreadcrumbItem name="Washing Station" />
        <BreadcrumbItem name="Busanze" current />
      </Breadcrumb>
      <BusanzeText />
      <InstagramOne />
    </LayoutFour>
  );
}