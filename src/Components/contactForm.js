import emailjs from "emailjs-com";
import React from 'react';
import "./contactForm.css"
// import { FaExclamationCircle } from "react-icons/fa";

export default function emailMe(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("mySiteGmail", "mySiteEmailTemplate", e.target, "user_TxDxxPQ6tPpuad7rF1XJd")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            
            });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
                {/* <h1>Contact Me!</h1> */}
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="message" cols="30" rows="8" placeholder="Your message" name="message" ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}