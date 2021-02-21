import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import TermsText from "../../components/Sections/Legal/TermsText"

export default function () {
  return (
    <LayoutFour title="Terms of Service">
      <Breadcrumb title="Terms of Service">
        <BreadcrumbItem name="Legal" />
        <BreadcrumbItem name="Terms of Service" current />
      </Breadcrumb>
      <TermsText />
    </LayoutFour>
  );
}