import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import PrivacyText from "../../components/Sections/Legal/PrivacyText"

export default function () {
  return (
    <LayoutFour title="Privacy Policy">
      <Breadcrumb title="Privacy Policy">
        <BreadcrumbItem name="Legal" />
        <BreadcrumbItem name="Privacy Policy" current />
      </Breadcrumb>
      <PrivacyText />
    </LayoutFour>
  );
}