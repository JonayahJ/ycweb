import Link from "next/link";
import { useForm } from "react-hook-form";
import Lightbox from "react-image-lightbox";

import { convertToSlug } from "../../common/utils";
import Button from "../Control/Button";
import ImageLightbox from "../Control/ImageLightbox";

export default function PostContent({ data, children }) {
  const { register, handleSubmit, errors } = useForm();
  const onSearchSubmit = (data) => console.log(data);
  return (
    <div className="post-content">
      <div className="post-content__header">
        <div className="post-content__header__date">
          {/* DATE */}
          <h5>06</h5>
          <p>Jun</p>
        </div>
        <div className="post-content__header__content">
          <div className="post_content__info">
            <p>
              by <span>{data.author}</span>
            </p>
            <Link
              href={process.env.PUBLIC_URL + "#"}
              as={process.env.PUBLIC_URL + "#"}
            >
              <a>{data.category}</a>
            </Link>
          </div>
          <h2>{data.title}</h2>
        </div>
      </div>
      <div className="post-content__body">
        <p className="post-paragraph">
          Premium coffee process is a fruit of excellent work in every stage of the coffee chain. This means there is a scrupulous attention to every detail along the way from seedling to brewing. 
        </p>
        <p className="post-paragraph">
          <span>Farming – </span>
          Coffee was introduced in Rwanda in early 1900s by German missionaries. Today, coffee plays a remarkable role in Rwandan economy as it is the second source of national income after tourism. Rwanda, being a small (approximately the size of Massachusetts) and mountainous country, does not have a lot of cultivable land. Coffee farmers rely on the production of the best coffee quality to be competitive on both local and international markets. Different techniques such as trimming, mulching and fertilization are used to enhance production, preserve soil and reduce erosion. Most of these practices are conducted by hands for quality purposes.
        </p>
        <p className="post-paragraph">
          <span>Harvesting – </span>
          Rwandan coffee varieties (mostly arabica) have always been among the best selections compared to other coffee varieties in the coffee industry. Since the late 90s Rwandan government in partnership with private sector adopted specialty coffee practice from regular coffee practice. In other words, coffee farmers did not switch to producing specialty coffee, they simply switched their production practice. Fundamentally, harvesting is the key stage in the process of specialty coffee. When picking beans from trees, farmers make sure they pick the super ripe red cherries. This requires a lot of attention and patience in so many ways as weather and many other climate factors are not on their side.
        </p>
        <p className="post-paragraph">
          In addition to this, specialty coffee practice deals with post-harvest loss. In the last decades post-harvest loss in coffee was high, and consequently this affected local farmers and discouraged their effort to care for their coffee plantation. Specialty coffee practice puts a strong emphasis on improved post-harvest handling techniques to make sure that farmers do not lose the fruit of their labor. This approach has had a positive impact on coffee production in Rwanda, as farmers have the peace of mind that they will sell the last bean of their production.
        </p>
        <ImageLightbox
          className="post-image"
          alt="Butambamo Washing Station"
          imgSrc={"/assets/images/blog/post_img.png"}
        />
        <p className="post-paragraph">
          <span>Processing - </span>
          Coffee processing is one of the hardest phases in the coffee chain. This stage requires conscientious and hardworking people who are prepared both mentally and physically. After reception, the coffee quality is controlled very carefully using two methods namely, hand sorting and floating. Coffee is pulped with a machine and stays in fermentation bacs for 16 to 25 hours. The most important part of this stage is coffee washing, not because it is dirty but to remove the fruity layer around the bean and grade them by density.
        </p>
        <p className="post-paragraph">
          After grading, the parchment is taken to drying tables under shade for sorting. This intensive sorting process helps detect defects easily as parchment is still wet. Once the sorting is done, the parchment is taken to raised outdoor drying beds. The use of raised bed is very important because it increases the airflow and cleanness in the beans as they dry. This drying process takes approximately two to four weeks depending on weather conditions. Once the parchment reaches the right temperature by moisture content, it is taken to the dry mill for hulling. This is the stage at which we get green coffee.  Before the green coffee is shipped it goes through another rigorous hand sorting to detect any remaining defect.
        </p>
        <p className="post-paragraph">
          <span>Roasting Process – </span>
          Coffee roasting is an art. This activity requires attention based on the origin of the coffee. The high-altitude coffee from Rwanda and being from volcanic soil gives it a very dense body resulting in a particular and unique roasting profile. For instance, Yego coffee prefers to roast its coffee in small batches to maintain control over the roasting process. When it comes to Rwandan coffee beans, to preserve sweetness, balanced body, fruitiness and acidity, you should not rush through the roasting process. To control any possible defect, roasted coffee is also hand-sorted before being packed to ensure the purity and quality of the coffee sold by Yego Coffee.  
        </p>
        <div className="post-quote">
          <h5>
            {" "}
            Coffee roasting is an art. This activity requires attention based on the origin of the coffee.
          </h5>
          <div className="post-quote__author">
            <i className="fas fa-quote-left"></i>
            <p>Francois Tuyishime</p>
          </div>
        </div>
        <p className="post-paragraph">
          As shown above, it is obvious that coffee is a very fragile crop that can lose its quality in every stage of preparation. However, the risk can be managed by using hands. Most of these processes are conducted by tireless farmers and workers around our villages. We are proud to say that more than 75% of this work is conducted by women who also own a big percentage of farms. Thank you for supporting every hand that touches this coffee with the sole purpose of maintaining its quality for you to savor every morning.
        </p>
      </div>
      <div className="post-content__footer">
        <div className="post-content__footer__tags">
          <span>Tags:</span>
          {data.tags &&
            data.tags.map((tag, index) => (
              <Button key={index} action="#" color="light" content={tag} />
            ))}
        </div>
      </div>

      {/* NEST/PREV BUTTONS */}
      <div className="post-content__actions">
        {/* <div className="post-content__actions__change">
          <Link href="#">
            <a className="change-post-btn -prev">
              <i className="fas fa-angle-left"></i>Prev Posts
            </a>
          </Link>
          <Link href="#">
            <a className="change-post-btn -next">
              Next Posts
              <i className="fas fa-angle-right"></i>
            </a>
          </Link>
        </div> */}

        {/* POST COMMENT */}
        <div className="post-content__actions__comment">
          <form onSubmit={handleSubmit(onSearchSubmit)}>
            <h5>Leave a comment</h5>
            <div className="row">
              {/* NAME */}
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <span className="input-error">Pleave provide a name</span>
                  )}
                </div>
              </div>
              {/* EMAIL ADDRESS */}
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register({ required: false })}
                  />
                  {errors.email && (
                    <span className="input-error">Pleave provide an email</span>
                  )}
                </div>
              </div>
              {/* SUBJECT */}
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    ref={register({ required: false })}
                  />
                  {errors.subject && (
                    <span className="input-error">
                      Pleave provide a subject
                    </span>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-validator">
                  <textarea
                    name="comment"
                    placeholder="Comment"
                    rows="5"
                    ref={register({ required: true })}
                  />
                  {errors.comment && (
                    <span className="input-error">
                      Pleave leave us a comment
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="btn -red">Submit comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
