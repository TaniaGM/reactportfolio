import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './App.css';
import JumbotronContainer from './components/Jumbotron';
import NavbarContainer from './components/Navbar';
import ProjectContainer from './components/Projects';
import ResumeDetails from './Resume.json';
import AboutContainer from './components/About';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <JumbotronContainer personalInfo={ResumeDetails.personalInfo} />
        <Grid>
          <Row className="about-row">
            <AboutContainer personalInfo={ResumeDetails.personalInfo} />
          </Row>
          <Row className="project-row">
            <ProjectContainer projects={ResumeDetails.projects} />
          </Row>
    
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;