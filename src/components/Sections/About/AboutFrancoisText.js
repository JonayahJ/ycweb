import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import ImageLightbox from "../../Control/ImageLightbox";

export default function AboutFrancoisText(style) {
  return (
    <div className="section-title" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="About">
          Who Am I
        </SectionTitleOne>
        <div className="post-content__body">
          <ImageLightbox
          className="post-image"
          alt="Francois at a coffee shop"
          imgSrc={"/assets/images/about/francoistuyishime.jpg"}
          />
          <p className="post-paragraph">
            Francois Tuyishime was born and raised in Rwanda. He was born in the western province of Rwanda and his home village is one of the community that were ravaged by the Genocide against Tutsi in 1994. Mr. Tuyishime was 6 in 1994, and all his family was being hunted. He survived the Genocide while hiding in the famous Mibizizi Parish in Rusizi.
          </p>
          <p className="post-paragraph">
            Coffee business has been part Tuyishime’s family for over four decades. So, a boy he grew up seeing his father in coffee farming and making it a business. So, it has been his passion to not only use coffee for business, but also as a tool to build and support communities and villages where coffee farmers reside.
          </p>
          <p className="post-paragraph">
            Mr. Tuyishime graduated with BA in Political science from the National University of Rwanda and has also completed an MA in Conflict Resolution from Brandeis University. Before moving to the United States, Mr. Tuyishime worked in his family coffee company as a Coffee Washing Station manager. In addition to this experience with coffee, Mr. Tuyishime completed professional training in roasting.
          </p>
          <p className="post-paragraph">
            In 2016, Mr. Tuyishime lost his father who was his role model and mentor both in life and coffee business. His father always told him that coffee industry is not just about making money, but it is also about connecting people. With Yego Coffee, Mr. Tuyishime hopes to use coffee as a tool to connect people and have a positive impact on the lives of local farmers.
          </p>
        </div>
      </div>
    </div>
  );
}