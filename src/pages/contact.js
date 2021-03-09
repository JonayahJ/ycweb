import LayoutFour from "../components/Layout/LayoutFour";
import InstagramTwo from "../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import ContactInfoItem from "../components/Pages/Contact/ContactInfoItem";
import contactData from "../data/pages/contact.json";
import ContactForm from "../components/Sections/Forms/ContactForm"

export default function Contact() {
  return (
    <LayoutFour title="Contact Us">
      <Breadcrumb title="Contact Us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Contact Us" current />
      </Breadcrumb>
      <div className="contact" netlify="true">
        <div className="container" netlify="true">
          <div className="row" netlify="true">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contact Info</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            <ContactForm netlify="true" />
            <div className="col-12">
              <iframe
                className="contact-map"
                src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Boston,%20MA+(Yego%20Coffee)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
