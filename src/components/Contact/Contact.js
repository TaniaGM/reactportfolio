import React, { Component } from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <div>
            <Wrapper>
                <div>
                    <h1>Contact</h1>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-10" id="TaniaGM-contact">
                        <h5>Feel free to contact me:</h5>
                        <ul>
                            <li>Phone: 913-687-7406</li>
                            <li>Email: tania99@gmail.com</li>
                            <li><a href="https://drive.google.com/open?id=1IkPJOCPpZCSJjaWJ1L5QnvWmmLfpw1DE" class="button" target="_blank">View
                            My Experience</a></li>
                            <li>Github Profile: <a href="https://github.com/TaniaGM" target="blank">TaniaGM</a></li>
                            <li>LinkedIn Profile: <a href="https://www.linkedin.com/in/tania-moore/" target="blank">Tania Moore</a></li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Contact;