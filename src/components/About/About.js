import React, { Component } from 'react';
import './About.css';

class AboutContainer extends Component {
    state = {
        info: this.props.personalInfo || []
    };
    render() {
        return (
            <div className="card border-primary mb-3 profile-card" id="profile-link">
                <div className="card-header">
                    <h3>Profile
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-lg-4">
                                
                                <img
                                    className="img-50%"
                                    src="https://user-images.githubusercontent.com/56511238/82262813-3890a800-9927-11ea-8b84-ddf55e92d101.png"
                                    alt="Tania Moore"/>
                                <p className="card-text">{this.props.personalInfo.about}</p>
                            </div>

                            <div className="col-lg-8">
                                <ul>
                                    <li className="about-self">My name is Tania. I am a junior developer in training at the University of New Hampshire Coding Bootcamp. Prior to learning coding, I had a fulfilling career in the non-profit sector, with a focus on Indigenous health.</li>
                                    <li className="about-self">When I am not coding or sleeping and dreaming of coding, I spend my time planning our next vacation, spending time with my husband, family and two cats.</li>
                                    <li className="about-self">I look forward to pursuing the challenges presented in web development. Ideally, after finding a career, I look forward to working with Indigenous communities in developing their on-line footprint that allows them to communicate seamlessly with their members.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutContainer;