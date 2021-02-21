import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import ImageLightbox from "../../Control/ImageLightbox";

export default function BusanzeText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Gatare Washing Station
        </SectionTitleOne>
        <div className="post-content__body">
          <ImageLightbox
          className="post-image"
          alt="Busanze Washing Station"
          imgSrc={"/assets/images/introduction/IntroductionThirteen/1.jpg"}
          />
          <p className="post-paragraph">
            <span>Location: Nyamasheke District</span><br />
            <span>Altitude: 1542-1857m</span><br />
            <span>Annual Rainfall: 1200-1300mm</span><br />
            <span>Processing Method: Fully Washed, Natural</span><br />
            <span>Water Source: Natural Spring</span><br />
            <br />
            Within Nyamasheke District, Gatare Station can be found in the localities that surround Kivu Lake, which is a few miles from the Nyungwe Forest. Generally, coffee from Gatare Station comes from the Kivu Belt and the mountains of the Nyungwe Forest edges. Gatare Station is more than a business, they've become a family with 25 permanent employees -- more than 20 of whom have been there for more than a decade. It is for that stability that Gatare Station has been a place where Impexcor Coffee conducts most of its research and trials of the new coffee process. Gatare Station was the first station to produce the natural and honey process. Believe me, we are the best in these processes!
          </p>
        </div>
      </div>
    </div>
  );
}