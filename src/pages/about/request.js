import { useForm } from "react-hook-form";

import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ContactInfoItem from "../../components/Pages/Contact/ContactInfoItem";
import contactData from "../../data/pages/contact.json";

export default function () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <LayoutFour title="Request a Sample">
      <Breadcrumb title="Request a Sample">
        <BreadcrumbItem name="About" />
        <BreadcrumbItem name="Request a Sample" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 post-content__body">
              <h3 className="contact-title">Want to try our green coffee?</h3>
              <p className="post-paragraph">
                In the southwest of Rwanda, you will find rolling hills, green valleys, beautiful lakes, and also the roots of Yego Coffee. We are a proud multigenerational family of coffee growers. Though Yego Coffee is one year old to the public, her roots date decades back. Our first container arrived in the USA in November 2020 and we are proud to serve this country by providing top quality micro lots of specialty grade, fully-washed, and naturally processed coffee beans.
              </p>
              <p className="post-paragraph">
                At Yego Coffee, we not only roast coffee, but also supply green beans for those wanting to roast their own blend. I want to personally invite all roasters to reach out and try this fresh harvest that comes directly from the green hills of Rwanda. When you purchase from Yego Coffee, not only are you getting excellent coffee, you are contributing to the well-being and sustainability of the hundreds of farmers who work tirelessly to bring you the best of the best. Growing coffee is a love and passion, but it has always been a way of life.
              </p>
              <br />
              <h4>
                  Leave us a message below to get your free sample!
              </h4>
              <br />
              <br />
              {/* Netlify Form */}
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="input-error">Please provide a name</span>
                    )}
                  </div>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="input-error">
                        Please provide an email
                      </span>
                    )}
                  </div>
                  <div className="input-validator">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  {/* <fieldset>
                        <legend>Which coffee would you like to sample?</legend>
                      <p>
                          <label>
                              <input type="radio" name="coffee-type" value="Busanze Green Coffee">
                                Busanze Green Coffee
                              </input>
                          </label>
                      </p>
                      <p>
                          <label>
                              <input type="radio" name="coffee-type" value="Butambamo Green Coffee">
                                Butambamo Green Coffee
                              </input>
                          </label>
                      </p>
                      <p>
                          <label>
                              <input type="radio" name="coffee-type" value="Gatare Green Coffee">
                                Gatare Green Coffee
                              </input>
                          </label>
                      </p>
                      <p>
                          <label>
                              <input type="radio" name="coffee-type" value="Kiyumba Green Coffee">
                                Kiyumba Green Coffee
                              </input>
                          </label>
                      </p>
                  </fieldset> */}
                  <button className="btn -dark">SEND MESSAGE</button>
                </form>
              </div>
              {/* Form End */}
            </div>
          </div>
        </div>
      </div>
      <InstagramOne />
    </LayoutFour>
  );
}
