import React, { Component } from 'react'
import './Education.scss'
import {
  changeInstitution,
  changeArea,
  changeDiploma,
  changeStartDateEd,
  changeEndDateEd,
  changeCourse,
  addEdu,
  updateEdu,
  deleteEdu
} from '../../duck/actions/EducationAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, Button, DatePicker, ExpansionList, ExpansionPanel } from 'react-md'

class Education extends Component {

  clear = () => { document.getElementById("clearForm").reset() }
  render() {

    return (
      <div>
        <Paper>
          <Card className="education" style={{ padding: '20px' }}>
            <form id="clearForm">
              <TextField
                onChange={(e) => this.props.changeInstitution(e)}
                value={this.props.institution}
                id="institution"
                label="Institution"
                placeholder="Institution"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.changeArea(e)}
                value={this.props.area}
                id="area"
                label="Area"
                placeholder="Area"
                maxLength={30}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.changeDiploma(e)}
                value={this.props.diploma}
                id="diploma"
                label="Diploma"
                placeholder="Diploma"
                maxLength={20}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <DatePicker
                onChange={(e) => this.props.changeStartDateEd(e)}
                value={this.props.startDateEd}
                id="start"
                label="Start Date"
                className="started"

              />


              <DatePicker
                onChange={(e) => this.props.changeEndDateEd(e)}
                value={this.props.endDateEd}
                id="start"
                label="End Date"
                className="ended"
              />



              <TextField
                onChange={(e) => this.props.changeCourse(e)}
                value={this.props.course}
                id="course"
                label="Course"
                placeholder="Course"
                maxLength={20}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
              />

              <Button onClick={() => { this.props.addEdu(); this.clear() }}
                style={{ width: '100%' }} >
                ADD
              </Button>

            </form>
          </Card>

          <Card>
            <form>
              {this.props.Education.map(
                (el) => (
                  <ExpansionList>
                    <ExpansionPanel label={el.institution} saveLabel="UPDATE" onSave={() => this.props.updateEdu(el)}
                      cancelLabel="DELETE" onCancel={() => this.props.deleteEdu(el.institution)}
                    >
                      <TextField defaultValue={el.institution} onChange={(el) => this.props.changeInstitution(el)} maxLength={40} />
                      <TextField defaultValue={el.area} onChange={(el) => this.props.changeArea(el)} maxLength={30} />
                      <TextField defaultValue={el.diploma} onChange={(el) => this.props.changeDiploma(el)} maxLength={30} />
                      <DatePicker defaultValue={el.startDateEd} onChange={(el) => this.props.changeStartDateEd(el)} />
                      <DatePicker defaultValue={el.endDateEd} onChange={(el) => this.props.changeEndDateEd(el)} />
                      <TextField defaultValue={el.course} onChange={(el) => this.props.changeCourse(el)} maxLength={20} />
                    </ExpansionPanel >
                  </ExpansionList >
                )
              )}
            </form>
          </Card>

        </Paper >
      </div>
    )
  }
}






const mapStateToProps = state => ({
  Education: state.EducationReducer.education

})

const mapDispatchToProps = {
  changeInstitution,
  changeArea,
  changeDiploma,
  changeStartDateEd,
  changeEndDateEd,
  changeCourse,
  addEdu,
  updateEdu,
  deleteEdu

}



export default connect(mapStateToProps, mapDispatchToProps)(Education)



















