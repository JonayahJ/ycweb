export default function IntroductionEleven() {
  return (
    <div className="introduction-seven">
      <div className="introduction-seven__wrapper -top">
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6">
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Giving Back</h5>
                  <h3>Coffee Meals</h3>
                  <p>
                    In Busanze, there are several food insecure households where nutrition is a big challenge.  A significant number of students drop out of school because of a lack of food.  To support those families in need, we want to help by providing lunch for students who attend the Busanze Primary School. {" "}
                  </p>
                  <p>
                    It is our goal to provide lunches to at all students at Busanze Primary School by 2025.  15% of our profits go to providing school lunch and 20% goes in bonus prices for the Busanze coffee famers. {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionEleven/1.jpg"
            }
            alt="African kids smiling"
          />
        </div>
      </div>
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionEleven/2.jpg"
            }
            alt="Young African woman"
          />
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Giving Back</h5>
                  <h3>Smile Girl</h3>
                  <p>
                    In Rwanda, especially in rural areas, girls face different challenges.  The main challenge for growing girls is their menstrual periods.  Some girls do not have ready access to  sanitary pads or even reusable cloths.  If their families are unable to afford those products, this can affect a girl’s self-esteem, which has an adverse effect on her school performance, and can cause her to fear going to school because of bullying.  Some drop out of school altogether.{" "}
                  </p>
                  <p>
                    To support these girls, 15% of our profits go to providing sanitary pads.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
