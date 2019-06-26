import React, { Component } from 'react'
import './Certifications.scss'
import {
  setNameCer,
  setAuthority,
  setLicenseNumber,
  setStartDateCer,
  setEndDateCer,
  setSiteCer,
  addSkills,
  updateSkills,
  deleteSkills
} from '../../duck/actions/CertificationAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, Button, DatePicker, ExpansionList, ExpansionPanel } from 'react-md'

class Certifications extends Component {
  clear = () => { document.getElementById("clearForm").reset() }

  render() {
    return (
      <div>
        <Paper>
          <Card className="certifications" style={{ padding: '20px' }}>
            <form id="clearForm" >

              <TextField
                onChange={(e) => this.props.setNameCer(e)}
                value={this.props.certificationName}
                id="certificationName"
                label="Certification Name"
                placeholder="Certification Name"
                className="md-cell md-cell-bottom"
                style={{ width: '100%' }}
                maxLength={30} />


              <TextField
                onChange={(e) => this.props.setAuthority(e)}
                value={this.props.authority}
                id="authority"
                label="Authority"
                placeholder="Authority"
                className="md-cell md-cell-bottom"
                style={{ width: '100%' }}
                maxLength={30}
              />

              <TextField
                onChange={(e) => this.props.setLicenseNumber(e)}
                value={this.props.licenseNumber}
                id="licenseNumber"
                label="License Number"
                placeholder="License Number"
                className="md-cell md-cell-bottom"
                style={{ width: '100%' }}
                maxLength={30}
              />

              <DatePicker
                onChange={(e) => this.props.setStartDateCer(e)}
                value={this.props.startDateCer}
                id="startDateCer"
                label="Start Date"
                inline
                className="startDateCer"
              />
              <DatePicker
                onChange={(e) => this.props.setEndDateCer(e)}
                value={this.props.endDateCer}
                id="endDateCer"
                label="End Date"
                inline
                className="endDateCer"
              />
              <TextField
                onChange={(e) => this.props.setSiteCer(e)}
                value={this.props.siteCertification}
                id="siteCertification"
                label="Site Web"
                placeholder="Site Web"

                className="md-cell md-cell-bottom"
                style={{ width: '100%' }} />

              <Button style={{ width: '100%' }}
                onClick={() => { this.props.addSkills(); this.clear() }}
              >Add</Button>
            </form>
          </Card>
          <form>

            {this.props.Certification.map(
              (el) => (
                <ExpansionList>
                  <ExpansionPanel label={el.certificationName} saveLabel="UPDATE" onSave={() => this.props.updateSkills(el)}
                    cancelLabel="DELETE" onCancel={() => this.props.deleteSkills(el.certificationName)}
                  >
                    <TextField defaultValue={el.certificationName} onChange={(el) => this.props.setNameCer(el)} maxLength={30} />
                    <TextField defaultValue={el.authority} onChange={(el) => this.props.setAuthority(el)} maxLength={30} />
                    <TextField defaultValue={el.licenseNumber} onChange={(el) => this.props.setLicenseNumber(el)} maxLength={30} />
                    <DatePicker defaultValue={el.startDateCer} onChange={(el) => this.props.setStartDateCer(el)} />
                    <DatePicker defaultValue={el.endDateCer} onChange={(el) => this.props.setEndDateCer(el)} />
                    <TextField defaultValue={el.siteCertification} onChange={(el) => this.props.setSiteCer(el)} />
                  </ExpansionPanel >
                </ExpansionList >
              )
            )}
          </form>
          <Card>

          </Card>
        </Paper>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  Certification: state.CertificationReducer.cert
})

const mapDispatchToProps = {
  setNameCer,
  setAuthority,
  setLicenseNumber,
  setStartDateCer,
  setEndDateCer,
  setSiteCer,
  addSkills,
  updateSkills,
  deleteSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(Certifications)

