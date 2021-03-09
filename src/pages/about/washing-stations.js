import { useForm } from "react-hook-form";

import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import washingStationData from "../../data/washing-stations.json";
import IntroductionTwelve from "../../components/Sections/Introduction/IntroductionTwelve";
import IntroductionThirteen from "../../components/Sections/Introduction/IntroductionThirteen";
import SectionTitleOne from "../../components/Sections/SectionTitle/SectionTitleOne"
import Button from "../../components/Control/Button"

export default function WashingStations() {
  return (
    <LayoutFour title="Washing Stations">
      <Breadcrumb title="Washing Stations">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Washing Stations" current />
      </Breadcrumb>
      <SectionTitleOne showSubTitle align="center" subTitle="About">
          Where Our Coffee Is Grown
        </SectionTitleOne>
      <div className="contact">
        <div className="container">
          <div className="row">
            {/* GOOGLE MAP */}
            <div className="col-12">
              <Button
                action="#busanze"
                color="royal-dark-blue"
                content="Busanze"
                className="-line"
              />
              <Button
                action="#butambamo"
                color="royal-dark-blue"
                content="Butambamo"
                className="-line"
              />
              <Button
                action="#gatare"
                color="royal-dark-blue"
                content="Gatare"
                className="-line"
              />
              <Button
                action="#kiyumba"
                color="royal-dark-blue"
                content="Kiyumba"
              />
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1aJbyv6gGTQA1tDxLuDoAm4PcMQXrglTK"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* INTRO 12 */}
      <IntroductionTwelve data={washingStationData} />
      {/* INTRO 13 */}
      <IntroductionThirteen data={washingStationData} />
      <InstagramOne />
    </LayoutFour>
  );
}
