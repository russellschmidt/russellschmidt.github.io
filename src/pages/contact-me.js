import React from "react";

import "../styles/formStyling.scss";

export default () => (

  <div className="contactContainer">
    <div className="headerContainer">
      <h1>Contact Me!</h1>
    </div>
    <div className="imageContainer">
      <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/leif-erikson.svg" alt="Leif Ericson statue in Reykjavik, the discoverer of America for the Europeans"/>
    </div>
    <form action="https://formspree.io/russ@russellschmidt.net"
      method="POST">
      <input className="contactFormInput" type="text" name="name" placeholder="Your Name"/>
      <input className="contactFormInput" type="email" name="_replyto" placeholder="you@mail.com"/>
      <select className="contactFormInput" name="reason">
        <option value="project">I need help with a web or mobile app project</option>
        <option value="hire">I represent a company looking to hire a developer</option>
        <option value="friendship">I am here for friendship</option>
        <option value="other">Some other reason</option>
      </select>
      <textarea className="contactFormInput" name="subject" placeholder="Describe what you would like to discuss with me in more detail"></textarea>
      <div className="submitContainer"><input type="submit" value="Send"/></div>
    </form>
  </div>
);
