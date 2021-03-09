import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
// import washingStationData from "../../../data/washing-stations.json";

export default function IntroductionTwelve(data) {
  return (
    <div className="introduction-seven">
      {/* START of SIDE 1 */}
      <div className="introduction-seven__wrapper -top">
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6">
                {/* BUSANZE */}
                <span className="anchor" id="busanze"></span>
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Mountain Natural Spring</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Nyaruguru District
                  </SectionTitleOne>
                  <h3>Busanze Station</h3>
                  {/* <p>
                    The washing station is located at the edges of Nyungwe forest which allows the nearby coffee trees to grow in the shade of other trees. This gives beans to be rich in density and aroma.{" "}
                  </p> */}
                  <Button
                    action="/washing-stations/busanze"
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
              "/assets/images/introduction/IntroductionTwelve/1.png"
            }
            alt="Dark roasted coffee packaging"
          />
        </div>
      </div>
      {/* END of SIDE 1 */}

      {/* START of SIDE 2 */}
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionTwelve/2.jpg"
            }
            alt="Green coffee sample"
          />
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                {/* BUTAMBAMO */}
                <span className="anchor" id="butambamo"></span>
                <div className="introduction-seven__wrapper__content__detail">
                <h5>Mountain Natural Spring</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Rusizi District
                  </SectionTitleOne>
                  <h3>Butambamo Station</h3>
                  {/* <p>
                    Farms in the Butambamo area are mostly owned by farmers cooperatives that own the land in the mountains of Nzahaha, a well-known region for fertile sandy loam soil alongside the Rusizi River.{" "}
                  </p> */}
                  <Button
                    action="/washing-stations/butambamo"
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END of SIDE 1 */}
      </div>
    </div>
  );
}
