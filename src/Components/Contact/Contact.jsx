import React from "react";
import "./Contact.css";
import msgicon from "../../assets/msg-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import mailicon from "../../assets/mail-icon.png";
import whitearrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5547fb44-8908-4393-b5ec-8551d7789823");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msgicon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contaact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mailicon} alt="" />
            Contact@ShuhbhamPathak.dev
          </li>
          <li>
            <img src={phoneicon} alt="" />
            +977 9869718309
          </li>
          <li>
            <img src={locationicon} alt="" />
            Mahalaxmi-7, Lalitpur
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="message">Write your Message here</label>
          <textarea name="message" id="message" rows="5" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={whitearrow} alt="" />
          </button>
          <span className="submitMsg">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
