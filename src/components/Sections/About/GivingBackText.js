import SectionTitleOne from "../SectionTitle/SectionTitleOne";

export default function GivingBackText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Coffee That Changes Lives
        </SectionTitleOne>
        <div className="post-content__body">
          <p className="post-paragraph">
          During my childhood, I was taught that education is the key to success.  No one can negate that fact because with education, life gets easier in so many ways.  However, in Rwanda, a lot of students have obstacles to attending school that many of them end up dropping out.  Growing up in rural Rwanda, was the catalyst that would urge me into the coffee business.  With Yego Coffee, I wanted to make a direct impact on the community by supporting education in Busanze village, where many of the farmers and their families live.  In order to support them, we came up with two initiatives: Coffee Meals, to provide school lunch for students who attend the Busanze Primary School; and Smile Girl, to providing sanitary pads to the girls who attend Busanze High School.  
          </p>
          <p className="post-paragraph">
          Buying your genuine Rwandan coffee from Yego Coffee will make a huge impact on those who need it the most.  Every little bit counts!
          </p>
        </div>
      </div>
    </div>
  );
}