import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import ImageLightbox from "../../Control/ImageLightbox";

export default function BusanzeText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Kiyumba Washing Station
        </SectionTitleOne>
        <div className="post-content__body">
          <ImageLightbox
          className="post-image"
          alt="Busanze Washing Station"
          imgSrc={"/assets/images/introduction/IntroductionThirteen/2.jpg"}
          />
          <p className="post-paragraph">
            <span>Location: Muhanga District</span><br />
            <span>Altitude: 1840-2400m</span><br />
            <span>Annual Rainfall: 1200-1500mm</span><br />
            <span>Processing Method: Fully Washed</span><br />
            <span>Water Source: Natural Spring</span><br />
            <br />
            Established in 2018 in the Muhanga District near Ndiza Hills, the Kiyumba Station is the newest washing station that we operate. This station was created after realizing that the region did not have a competiting station, but produces the highest quality of coffee. The supply of coffee is mainly from the Kiyumba, Rongi, and Nyabinoni Sectors.
          </p>
          <p className="post-paragraph">
            The famers who work these sectors comprise a large cooperative of 1,300 members called COCAM.  This cooperative is composed of 440 women and 860 men.  Together, they are currently growing 566,582 coffee trees on only 342 ha. The processing company, Impexcor Coffee, aims to provide training on the welfare of farmers, on increasing sensitivity to female farmers to hopefully incentivize them joining the cooperatives, and on cultivating the nearby coffee nursery.
          </p>
        </div>
      </div>
    </div>
  );
}