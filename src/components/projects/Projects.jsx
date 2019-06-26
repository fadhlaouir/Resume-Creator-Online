import React, { Component } from 'react'
import './Projects.scss'
import {
  changeProjectName,
  changeStartDatePr,
  changeEndDatePr,
  changeAboutPr,
  addProject,
  updateProject,
  deleteProject
} from '../../duck/actions/ProjectAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, DatePicker, Button, ExpansionList, ExpansionPanel } from 'react-md'

class Projects extends Component {

  clear = () => { document.getElementById("clearForm").reset() }
  render() {
    return (
      <div>
        <Paper>
          <Card className="projects" style={{ padding: '20px' }}>
            <form id="clearForm">
              <TextField
                onChange={(e) => this.props.changeProjectName(e)}
                value={this.props.projectName}
                id="project"
                label="Project Name"
                placeholder="Project Name"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />
              <DatePicker
                onChange={(e) => this.props.changeStartDatePr(e)}
                value={this.props.startDatePr}
                id="start"
                label="Start Date"
                className="start"
              />

              <DatePicker
                onChange={(e) => this.props.changeEndDatePr(e)}
                value={this.props.endDatePr}
                id="end"
                label="End date"
                className="end"
                style={{ paddingBottom: '20px' }}
              />
              <TextField
                onChange={(e) => this.props.changeAboutPr(e)}
                value={this.props.prSummary}
                id="floating-multiline"
                label="Description"
                lineDirection="right"
                rows={5}
                placeholder="Description"
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
              />
              <Button onClick={() => { this.props.addProject(); this.clear() }}
                style={{ width: '100%' }} >
                ADD
              </Button>
            </form>
          </Card>

          <Card>
            <form>
              {this.props.Project.map(
                (el) => (
                  <ExpansionList>
                    <ExpansionPanel label={el.projectName} saveLabel="UPDATE" onSave={() => this.props.updateProject(el)}
                      cancelLabel="DELETE" onCancel={() => this.props.deleteProject(el.projectName)}
                    >
                      <TextField defaultValue={el.projectName} onChange={(el) => this.props.changeProjectName(el)} maxLength={30} />
                      <DatePicker defaultValue={el.startDatePr} onChange={(el) => this.props.changeStartDatePr(el)} />
                      <DatePicker defaultValue={el.endDatePr} onChange={(el) => this.props.changeEndDatePr(el)} />
                      <TextField defaultValue={el.prSummary} onChange={(el) => this.props.changeAboutPr(el)} />
                    </ExpansionPanel >
                  </ExpansionList >
                )
              )}
            </form>
          </Card>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Project: state.ProjectReducer.project

})

const mapDispatchToProps = {
  changeProjectName,
  changeStartDatePr,
  changeEndDatePr,
  changeAboutPr,
  addProject,
  updateProject,
  deleteProject

}


export default connect(mapStateToProps, mapDispatchToProps)(Projects)

