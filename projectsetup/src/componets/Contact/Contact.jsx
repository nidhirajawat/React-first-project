import React from "react";
import "./Contact.css";
import heart_img from "../../assets/send.png";
import heart_img2 from "../../assets/love.png";
import heart_img3 from "../../assets/love.png";
import heart_img4 from "../../assets/love.png";
import noti from "../../assets/notification.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "543c8497-b2f4-4771-92e4-f0b1c5eff72e");

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
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={heart_img} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact from or find our
          contactinformation below. Your feedback, questions, and suggestions
          are important to us we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            {" "}
            <img src={heart_img4} alt="" /> Contact@gmail.com
          </li>
          <li>
            {" "}
            <img src={heart_img3} alt="" /> +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={heart_img2} alt="" />
            Main shyam nagar Indore Madhya Preadesh <br />
            A-349, United States.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={noti} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
