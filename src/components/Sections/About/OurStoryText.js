import SectionTitleOne from "../SectionTitle/SectionTitleOne";

export default function OurStoryText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Who We Are
        </SectionTitleOne>
        <div className="post-content__body">
          <p className="post-paragraph">
              Yego Coffee is a Boston-based coffee company founded in 2019 by Francois Tuyishime. At Yego Coffee, we understand that behind every cup of coffee there two people, the hard working farmer and our beloved customer. It is for that reason that our mission is to pay those farmers the top price and provide a high-quality coffee at the affordable price. This is possible as we source our coffee from the farm to the cup without any intermediary. We believe that this relationship we have with our farmers not only contributes to the sustainability of the crop, but also builds trust in our customers. 
          </p>
          <p className="post-paragraph">
              The word “Yego” is a word from Kinyarwanda that means “Yes.” The word can be seen as a simple word, but this means a lot for Mr. Tuyishime. This word in Rwanda is a symbol of positivity and affirmation. The positivity that allowed us to overcome the darkness we passed through in 1994 during genocide against the Tutsi. Without the positive mindset we wouldn’t have overcome all the challenges of the aftermath of that tragedy where we lost our beloved ones and all our belongings. It is that mindset of positivity that made our family and communities to restore our hope where there was nothing left.  We resumed coffee farming with almost nothing, but as of today hundreds of lives have been changed. This has had an impact on the lives of both genocide survivors’ lives and perpetrators families at the same time.
          </p>
        </div>
      </div>
    </div>
  );
}