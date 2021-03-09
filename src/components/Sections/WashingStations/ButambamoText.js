import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import ImageLightbox from "../../Control/ImageLightbox";
import Button from "../../Control/Button";

export default function BusanzeText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Butambamo Washing Station
        </SectionTitleOne>
        <div className="post-content__body">
          <ImageLightbox
          className="post-image"
          alt="Busanze Washing Station"
          imgSrc={"/assets/images/introduction/IntroductionTwelve/2.jpg"}
          />
          <p className="post-paragraph">
            <span>Location: Rusizi District</span><br />
            <span>Altitude: 1500-1700m</span><br />
            <span>Annual Rainfall: 1200-1300mm</span><br />
            <span>Processing Method: Fully Washed</span><br />
            <span>Water Source: Mountain Natural Spring</span><br />
            <br />
            The Butambamo Station is located in Rusizi District, which is in the Western Province of Rwanda. Farms in the Butambamo area are mostly owned by farmers cooperatives that own the land in the mountains of Nzahaha, a well-known region for fertile sandy loam soil alongside the Rusizi River. During the harvest season in the Butambamo and Nzahaha region, there is heavy rain and a high inclination of soil. The accessibility of the area is very challenging due to the road conditions (mostly muddy). It is for this reason that most of the production at the Butambamo Station is transported by bikes.
          </p>
        </div>
        {/* Bottom Buttons */}
        <div className="row" style={{marginBottom: "4rem"}}>
          <Button 
            action="/about/washing-stations"
            color="royal-dark-blue"
            content="Back" 
          />
          <Button 
            action="/about/request"
            color="light"
            content="Request a Sample" 
          />
        </div>
      </div>
    </div>
  );
}