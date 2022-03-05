import "./contact.scss";
import { useState } from "react";

export default function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
  <div className="contact" id="contact">
    <div className="left">
      <img src="assets/shake.svg" alt=""/>
    </div>
    <div className="right">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thanks for reaching out. As this is a test website it has not been linked to an API to capture. Please reach out to me on LinkedIn: Michael Pradetto or Email: pradetto5@gmail.com</span>}

      </form>
    </div>

  </div>
  )
}