// Contact Form to go on the Contact page
import { useForm } from "react-hook-form";

export default function ContactForm(style) {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    
    return (
        <div className="col-12 col-md-6">
            <h3 className="contact-title">Get In Touch</h3>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)} name="Contact" method="POST" data-netlify="true" netlify netlify-honeypot="bot-field">
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
                            id=""
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