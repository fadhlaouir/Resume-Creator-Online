import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Organizations from './components/organizations'
import Certifications from './components/certifications'
import Skills from './components/skills'
import Template from './components/templates/template'
// import DesignBar from './components/designBar'
import Education from './components/education'
import Header from './components/header'
import Languages from './components/languages'
import Cv from './components/templates/cv'
import { Route, Switch } from 'react-router-dom'
import { Grid, Cell } from 'react-md'

class App extends Component {
  render() {
    return (

      <div className="App" >

        <Header />

        <Grid>

          <Cell size={4}>

            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/organizations" component={Organizations} />
              <Route exact path="/certifications" component={Certifications} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/Languages" component={Languages} />
            </Switch>

          </Cell>

          <Cell size={8}>

            <Switch>
              <Route component={Template} />
              <Route component={Cv} />
            </Switch>


          </Cell>

          {/* <Cell size={2}>

            <DesignBar />


          </Cell> */}

        </Grid>
      </div>

    );
  }
}

export default App;
