import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ButambamoText from "../../components/Sections/WashingStations/ButambamoText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="Butambamo">
      <Breadcrumb title="Butambamo">
        <BreadcrumbItem name="Washing Station" />
        <BreadcrumbItem name="Butambamo" current />
      </Breadcrumb>
      <ButambamoText />
      <InstagramOne />
    </LayoutFour>
  );
}