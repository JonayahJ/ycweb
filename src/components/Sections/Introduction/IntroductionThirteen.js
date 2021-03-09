import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
// import washingStationData from "../../../data/washing-stations.json";

export default function IntroductionThirteen(data) {
  return (
    <div className="introduction-seven">
      <div className="introduction-seven__wrapper -top">
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6">
                {/* GATARE */}
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Natural Spring</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Nyamasheke District
                  </SectionTitleOne>
                  <h3>Gatare Station</h3>
                  <span className="anchor" id="gatare"></span>
                  {/* <p>
                  Gatare Station is more than a business, they've become a family with 25 permanent employees -- more than 20 of whom have been there for more than a decade.{" "}
                  </p> */}
                  <Button
                    action="/washing-stations/gatare"
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionThirteen/1.jpg"
            }
            alt="Dark roasted coffee packaging"
          />
        </div>
      </div>
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionThirteen/2.jpg"
            }
            alt="Green coffee sample"
          />
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                {/* KIYUMBA */}
                <div className="introduction-seven__wrapper__content__detail">
                <h5>Natural Spring</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Muhanga District
                  </SectionTitleOne>
                  <h3>Kiyumba Station</h3>
                  <span className="anchor" id="kiyumba"></span>
                  {/* <p>
                  Established in 2018 in the Muhanga District near Ndiza Hills, the Kiyumba Station is the newest washing station that we operate. This station was created after realizing that the region did not have a competiting station, but produces the highest quality of coffee.{" "}
                  </p> */}
                  <Button
                    action="/washing-stations/kiyumba"
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}