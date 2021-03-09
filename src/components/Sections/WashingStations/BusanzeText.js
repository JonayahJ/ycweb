import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import ImageLightbox from "../../Control/ImageLightbox";
import Button from "../../Control/Button";

export default function BusanzeText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Busanze Washing Station
        </SectionTitleOne>
        <div className="post-content__body">
          <ImageLightbox
          className="post-image"
          alt="Busanze Washing Station"
          imgSrc={"/assets/images/introduction/IntroductionTwelve/1.png"}
          />
          <p className="post-paragraph">
            <span>Location: Nyaruguru District</span><br />
            <span>Altitude: 1800-2100m</span><br />
            <span>Annual Rainfall: 1377mm</span><br />
            <span>Processing Method: Fully Washed</span><br />
            <span>Water Source: Mountain Natural Spring</span><br />
            <br />
            The Busanze Station is a new coffee washing station started in 2018 by Impexcor Coffee and the local farmers of Nyaruguru district. The washing station is located at the edges of Nyungwe forest which allows the nearby coffee trees to grow in the shade of other trees. This gives beans to be rich in density and aroma.
          </p>
          <p className="post-paragraph">
            The story of the Busanze Station is not only about the quality, but also about the history and patriotism of Nyaruguru people. Usually, Nyaruguru district is known as the home of the most resilient people in the nation. After the genocide against the Tutsi, Nyaruguru became a beacon of unity and reconciliation. Currently, Busanze Station helps create farmer cooperatives for different villages. A good example is the success story of Cooperative Umurego Nteko (KUN) that composed of 82 farmers, mainly young men and women mostly from families from both genocide survivors and perpetrators.
          </p>
          <p className="post-paragraph">
            Busanze Station is 50% owned by the village's farmers cooperative and the other half is owned by the processing company, Impexcor Coffee. This gives the farmer a voice to decide the future of the coffee they produce. This practice creates a sense of ownership that motivates farmers to improve the quality of the coffee.  And it is for that reason that coffee from Busanze has recently won multiple awards including the Alliance Cup of Excellence in 2018.
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