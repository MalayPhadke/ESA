import React from "react";
import "./Contact.css"

function Contact() {
  return (
        <div className='container' id="contact">
            <div className="reveal">Contact Us</div>
            <div className="address reveal">
                <h3><i class="fa-solid fa-location-dot fa-bounce"></i>Address</h3>
                <h5>Sardar Patel Institue Of Technology</h5>
                <p>Bhavan’s Campus, Munshi Nagar,<br></br>Andheri (West), Mumbai 400 058</p>
            </div>
            <div className="contacts reveal">
                <h6><i class="fa-solid fa-phone fa-shake"></i> Chetan Patil - </h6>
                <h6><i class="fa-solid fa-phone fa-shake"></i> Omkar Lokre - </h6>
                <h6><i class="fa-regular fa-envelope fa-shake"></i> Email - </h6>
            </div>
        </div>
  )
}

export default Contact