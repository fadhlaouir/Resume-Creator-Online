import React from 'react'
import ReactToPrint from "react-to-print";
// import PropTypes from 'prop-types'
import './Template.scss'
import { Paper, Card, Grid, Cell } from 'react-md'
import { connect } from 'react-redux'
import SegmentedProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const title = {
  color: '#102BE0',
  fontWeight: '700',
  fontFamily: 'Anton, sans-serif',
  fontSize: '20px'
}
const para = {
  fontFamily: 'Bitter, serif',
  fontSize: '20px',
  fontWeight: '400'
}

class Template extends React.Component {
  render() {
    return (
      <div className="template" >

        <Paper >
          <Card >
            <Grid>
              <Cell size={4} className="left">
                {/* CONTACT */}

                <h1 style={title}>CONTACT ME</h1>
                <hr />
                <div className="contact_me">

                  <div className="address" style={para}>
                    <i className="fas fa-map-marker-alt"></i>
                    {this.props.About.address}
                  </div>
                  <div className="phone" >
                    <i className="fas fa-phone"></i>
                    {this.props.About.phoneNumber}
                  </div>
                  <div className="email" >
                    <i className="fas fa-at"></i>
                    {this.props.About.email}
                  </div>

                </div>

                {/* SKILLS */}

                <h1 style={title}>SKILLS</h1>
                <hr />
                <div className="skills">

                  {this.props.Skills.map(
                    (el) => (
                      <div>
                        {/* <i className="fas fa-terminal"></i> */}

                        <label>{el.skillsName}</label>
                        <div style={{ width: '60px' }}>
                          <SegmentedProgressbar
                            percentage={el.skillsLevel}
                            text={`${el.skillsLevel}%`}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                {/* LANGUAGES */}

                <h1 style={title}>LANGUAGES</h1>
                <hr />
                <div className="language">
                  {this.props.Language.map(
                    (el) => (
                      <div>
                        {el.languageName}/{el.fluency}
                      </div>
                    )
                  )}
                </div>

              </Cell>

              <Cell size={8} className="right">
                {/* Right Side */}

                <div className="about">

                  <div>{this.props.About.picture}</div>
                  <div>
                    <h1 >{this.props.About.fullName}</h1>

                  </div>
                  <div><h3>{this.props.About.currentPost}</h3></div>
                </div>
                {this.props.About.abSummary}

                {/* EXPERIENCE */}

                <div className="experience">
                  <i className="fas fa-briefcase" />
                  <h1 style={title}>EXPERIENCE</h1>
                  <hr />

                  {this.props.Experience.map(
                    (exp) => (
                      <Grid>
                        <Cell size={2}>
                          <div>{exp.startDate} <h3>-</h3> {exp.endDate}</div>
                          {exp.company}
                        </Cell>
                        <Cell size={10}>
                          <div>{exp.position}</div>
                          <div>{exp.exSummary}</div>
                          <div>{exp.website}</div>
                        </Cell>
                      </Grid>
                    )
                  )}

                </div>

                {/* EDUCATION */}

                <div className="education">
                  <i className="fas fa-graduation-cap" />
                  <h1 style={title}>EDUCATION</h1>
                  <hr />
                  {this.props.Education.map(
                    (edu) => (
                      <Grid>
                        <Cell size={2}>
                          <div>{edu.startDateEd} <h3>-</h3>{edu.endDateEd}</div>
                          {edu.institution}
                        </Cell>
                        <Cell size={10}>
                          <div> {edu.diploma}</div>
                          <div>{edu.area}</div>
                          <div>{edu.course}</div>
                        </Cell>
                      </Grid>
                    )
                  )}
                </div>

                {/* PROJECT */}

                <div className="project">
                  <i className="fas fa-cogs"></i>
                  <h1 style={title}>PROJECT</h1>
                  <hr />
                  {this.props.Project.map(
                    (proj) => (
                      <Grid>
                        <Cell size={2}>
                          <div>{proj.startDatePr}<h3>-</h3>{proj.endDatePr}</div>
                        </Cell>
                        <Cell size={10}>
                          <div>{proj.projectName}</div>
                          <div>{proj.prSummary}</div>
                        </Cell>
                      </Grid>
                    )
                  )}
                </div>

                {/* CERTIFICATION */}

                <div className="certification">
                  <i className="fas fa-award"></i>
                  <h1 style={title}>CERTIFICATION</h1>
                  <hr />
                  {this.props.Certifications.map(
                    (cert) => (
                      <Grid>
                        <Cell size={2}>
                          <div>{cert.startDateCer}<h3>-</h3>{cert.endDateCer}</div>
                          {cert.licenseNumber}
                        </Cell>
                        <Cell size={10}>
                          <div>{cert.certificationName}</div>
                          <div>{cert.authority}</div>
                          <div> {cert.siteCertification}</div>
                        </Cell>
                      </Grid>
                    )
                  )}
                </div>

                {/* organization */}


                <div className="organization">
                  <h1 style={title}>ORGANIZATION</h1>
                  <hr />
                  {this.props.Organization.map(
                    (org) => (
                      <Grid>
                        <Cell size={2}>
                          <div>{org.startDateOrg}<h3>-</h3>{org.endDateOrg}</div>
                          {org.orgName}
                        </Cell>
                        <Cell size={10}>
                          <div>{org.orgPosition}</div>
                          <div>{org.orgSummary}</div>
                        </Cell>
                      </Grid>
                    )
                  )}
                </div>

              </Cell>
            </Grid>
          </Card>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  About: state.AboutReducer,
  Experience: state.ExperienceReducer.experience,
  Education: state.EducationReducer.education,
  Project: state.ProjectReducer.project,
  Organization: state.OrganizationReducer.organization,
  Skills: state.SkillsReducer.skills,
  Certifications: state.CertificationReducer.cert,
  Language: state.LanguagesReducer.language
})

const mapDispatchToProps = {
  // changelastname
}

const ConnectedTemplate = connect(mapStateToProps, mapDispatchToProps)(Template)

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          trigger={() => <a href="#"><button style={{ width: '20%', color: 'red', size: '20px' }}><i className="fas fa-print"></i>{' '}Print</button></a>}
          content={() => this.componentRef}
        />
        <ConnectedTemplate ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}



export default Example






