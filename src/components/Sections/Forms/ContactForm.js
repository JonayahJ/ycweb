// Contact Form to go on the Contact page
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const { register, errors } = useForm();
    
    return (
        <div className="col-12 col-md-6" netlify="true">
            <h3 className="contact-title">Get In Touch</h3>
            <div className="contact-form" netlify="true">
                <form name="Contact" method="POST" data-netlify="true" netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="Contact" />
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
                            // id=""
                            cols="30"
                            rows="3"
                            placeholder="Message"
                        />
                    </div>
                    <button className="btn" type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
  }