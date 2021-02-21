import { useForm } from "react-hook-form";

import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import washingStationData from "../../data/washing-stations.json";
import IntroductionTwelve from "../../components/Sections/Introduction/IntroductionTwelve";
import IntroductionThirteen from "../../components/Sections/Introduction/IntroductionThirteen";

export default function () {
  return (
    <LayoutFour title="Washing Stations">
      <Breadcrumb title="Washing Stations">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Washing Stations" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            {/* GOOGLE MAP */}
            <div className="col-12">
              {/* <h2>Busanze | Butambamo | Gatare | Kiyumba</h2> */}
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
