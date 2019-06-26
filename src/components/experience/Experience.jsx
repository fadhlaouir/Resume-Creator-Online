import React, { Component } from 'react'
import './Experience.scss'
import {
  changeCompany,
  changePosition,
  changeWebsite,
  changeStartDate,
  changeEndDate,
  changeSummary,
  addExp,
  updateExp,
  deleteExp
} from '../../duck/actions/ExperienceAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, DatePicker, Button, ExpansionList, ExpansionPanel } from 'react-md'

class Experience extends Component {

  clear = () => { document.getElementById("clearForm").reset() }
  render() {
    return (
      <div>
        <Paper>
          <Card className="experience" style={{ padding: '20px' }}>
            <form id="clearForm">

              <TextField
                onChange={(e) => this.props.changeCompany(e)}
                value={this.props.company}
                id="company"
                label="Company"
                placeholder="Company"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.changePosition(e)}
                value={this.props.position}
                id="position"
                label="Position"
                placeholder="Position"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.changeWebsite(e)}
                value={this.props.website}
                id="web"
                label="Website"
                placeholder="Website"
                maxLength={20}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <DatePicker
                onChange={(e) => this.props.changeStartDate(e)}
                value={this.props.startDate}
                id="start"
                label="Start Date"
                className="startEx"
              />

              <DatePicker
                onChange={(e) => this.props.changeEndDate(e)}
                value={this.props.endDate}
                id="end"
                label="End date"
                inline
                className="endEx"

              />

              <TextField
                onChange={(e) => this.props.changeSummary(e)}
                value={this.props.exSummary}
                id="floating-multiline"
                label="Summary"
                lineDirection="right"
                rows={3}
                placeholder="Summary"
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
              />
              <Button onClick={() => { this.props.addExp(); this.clear() }}
                flat
                style={{ width: '100%' }}>
                ADD
              </Button>
            </form>
          </Card>

          <Card>
            <form>
              {this.props.Experience.map(
                (el) => (

                  <ExpansionList>
                    <ExpansionPanel label={el.company} saveLabel="UPDATE" onSave={() => this.props.updateExp(el)}
                      cancelLabel="DELETE" onCancel={() => this.props.deleteProject(el.projectName)}
                    >
                      <TextField defaultValue={el.company} onChange={(el) => this.props.changeCompany(el)} maxLength={30} />
                      <TextField defaultValue={el.position} onChange={(el) => this.props.changePosition(el)} maxLength={30} />
                      <TextField defaultValue={el.website} onChange={(el) => this.props.changeWebsite(el)} />
                      <DatePicker defaultValue={el.startDate} onChange={(el) => this.props.changeStartDate(el)} />
                      <DatePicker defaultValue={el.endDate} onChange={(el) => this.props.changeEndDate(el)} />
                      <TextField defaultValue={el.exSummary} onChange={(el) => this.props.changeSummary(el)} />
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
  Experience: state.ExperienceReducer.experience

})

const mapDispatchToProps = {
  changeCompany,
  changePosition,
  changeWebsite,
  changeStartDate,
  changeEndDate,
  changeSummary,
  addExp,
  updateExp,
  deleteExp

}

export default connect(mapStateToProps, mapDispatchToProps)(Experience)


