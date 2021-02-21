import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import KiyumbaText from "../../components/Sections/WashingStations/KiyumbaText"
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <LayoutFour title="Kiyumba">
      <Breadcrumb title="Kiyumba">
        <BreadcrumbItem name="Washing Station" />
        <BreadcrumbItem name="Kiyumba" current />
      </Breadcrumb>
      <KiyumbaText />
      <InstagramOne />
    </LayoutFour>
  );
}