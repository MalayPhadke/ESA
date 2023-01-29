import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <section id="contact">
        <div className='container'>
            <h1 className="title reveal">Contact Us</h1>
            <div className="address reveal">
                <h3><i class="fa-solid fa-location-dot fa-bounce"></i>Address</h3>
                <h5>Sardar Patel Institue Of Technology</h5>
                <p className="addr">Bhavan’s Campus, Munshi Nagar,<br></br>Andheri (West), Mumbai 400 058</p>
            </div>
            <div className="contacts reveal">
                <h6><i class="fa-solid fa-phone"></i>Chetan Patil - 9967695037</h6>
                <h6><i class="fa-solid fa-phone"></i>Omkar Lokre - 8454077889</h6>
                {/* <h6><i class="fa-regular fa-envelope fa-shake"></i>Email - </h6> */}
            </div>
        </div>
    </section>
  )
}

export default Contact