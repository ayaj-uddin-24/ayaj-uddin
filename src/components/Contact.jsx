import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a1d5n75", "template_6r8nbio", form.current, {
        publicKey: "HO7v-hyOay0SQSwMI",
      })
      .then(
        () => {
          toast.success("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container" id="contact">
      <div id="head">
        <h1 className="text-center fw-bold">Contact</h1>
        <p className="small m-auto">
          Interested in working together? Whether you have a project in mind,
          need help with an existing application, or just want to discuss your
          web development needs, feel free to reach out. I’d love to hear from
          you!
        </p>
      </div>
      <div className="row mt-5 pt-3">
        <div className="col-12 col-md-6 contact-left p-5">
          <h1 className=" display-3 fw-bold">100% Satisfaction Guaranteed</h1>
          <p className="py-2">
            Your satisfaction is my priority. I’m committed to delivering
            high-quality web solutions tailored to your needs. Let's work
            together to bring your vision to life.
          </p>
          <h3>What will be the next step?</h3>
          <ul>
            <li>✔ &nbsp;We'll prepare the proposal.</li>
            <li>✔ &nbsp;we'll discuss it together.</li>
            <li>✔ &nbsp;let's start the discussion.</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 contact-right p-5">
          <form action="#" method="POST" ref={form} onSubmit={sendEmail}>
            <h3 className="fw-bold pb-4">Start your project</h3>

            <input
              type="text"
              name="from_name"
              id="name"
              className="form-control mb-3"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-3"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Tell me about your project ..."
              required
            ></textarea>
            <button
              type="submit"
              className="btn text-white fw-bold mt-4 form-control"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
