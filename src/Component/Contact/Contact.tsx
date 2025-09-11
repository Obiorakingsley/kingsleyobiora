import Loader from "react-loaders";
import Animate from "../AnimatedLetters/Animate";
import { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import ContactMap from "./ContactMap";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [stringClass, setStringClass] = useState("string-animate");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStringClass("string-animate-hover");
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  function sendEmail(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!formRef.current) return;
    if (!captchaToken) {
      alert("⚠️ Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm(
        "gmail",
        "template_rw9m4id",
        formRef.current,
        "YCdoCF966Q-EA0aKi"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert(`${error}: Something went wrong ❌`);
        }
      );
  }
  return (
    <>
      <div className="contact-page w-full container sm:pt-12 pt-4 pl-12 p-4 flex flex-col lg:flex-row lg:gap-40 lg:justify-between mb-20">
        <div className=" mb-14">
          <h1 className="mb-12">
            <Animate
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              stringClass={stringClass}
              idx={15}
            />
          </h1>
          <div className="contact-text">
            <h2>Get In Touch</h2>
            <p>
              I’d love to collaborate or chat about exciting opportunities. Feel
              free to reach out through the form below or connect with me
              directly.
            </p>
          </div>
          <div className="contact-form mt-8 pb-8">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid gap-4 w-full"
            >
              <label htmlFor="name">
                Name
                <input type="text" id="name" name="name" autoFocus required />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" id="email" name="email" required />
              </label>
              <label htmlFor="message">
                Message
                <textarea name="message" id="message" required></textarea>
              </label>
              <ReCAPTCHA
                className="captcha"
                sitekey="6LchXcArAAAAANBxNmvVIZIxlIwjgc_DCJA8XMbU"
                onChange={(token: string | null) => setCaptchaToken(token)}
              />
              <button className="place-self-start shadow " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ContactMap />
      </div>
      <Loader active={true} type="pacman" />
    </>
  );
};

export default Contact;
