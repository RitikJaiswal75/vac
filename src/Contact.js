import React from "react";
import Spinner from "./Spinner";
function Contact(props){
    return(
        <div className="container text-center my-2">
            <div className="card">
            <br />
            <br />
            <h1>Contact Me</h1>
            <br />
            <h3>E-Mail: <a href="mailto:ritik12103032000@gmail.com" >{props.email}</a></h3>
            <br />
            <h3> <a target="_blank" rel="noreferrer" href={props.insta}><i class="uil uil-instagram"></i>&nbsp;Instagram</a></h3>
            <br />
            <h3> <a target="_blank" rel="noreferrer" href={props.git}><i class="uil uil-github"></i>&nbsp;GitHub</a></h3>
            <br />
            <h3> <a target="_blank" rel="noreferrer" href={props.link}><i class="uil uil-linkedin"></i>&nbsp;Linkedin</a></h3>
            <br />
            <br />
            <Spinner />
            </div>
        </div>
    )
}

export default Contact;