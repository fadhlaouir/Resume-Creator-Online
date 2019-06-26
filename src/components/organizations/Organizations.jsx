import React, { Component } from 'react'
import './Organizations.scss'
import {
  changeOrgName,
  changeOrgPosition,
  changeStartDateOrg,
  changeEndDateOrg,
  changeAboutOrg,
  addOrg,
  updateOrg,
  deleteOrg
} from '../../duck/actions/OrganizationAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, DatePicker, Button, ExpansionList, ExpansionPanel } from 'react-md'

class Organizations extends Component {



  clear = () => { document.getElementById("clearForm").reset() }

  render() {
    return (
      <div>
        <Paper>
          <Card className="organizations" style={{ padding: '20px' }}>
            <form id="clearForm">
              <TextField
                onChange={(e) => this.props.changeOrgName(e)}
                value={this.props.orgName}
                id="organization"
                label="Organization"
                placeholder="Organization"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />
              <TextField
                onChange={(e) => this.props.changeOrgPosition(e)}
                value={this.props.orgPosition}
                id="position"
                label="Position"
                placeholder="Position"
                maxLength={30}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <DatePicker
                onChange={(e) => this.props.changeStartDateOrg(e)}
                value={this.props.startDateOrg}
                id="start"
                label="Start Date"
                className="start"
              />

              <DatePicker
                onChange={(e) => this.props.changeEndDateOrg(e)}
                value={this.props.endDateOrg}
                id="end"
                label="End date"
                className="end"
                style={{ paddingBottom: '20px' }}
              />
              <TextField
                onChange={(e) => this.props.changeAboutOrg(e)}
                value={this.props.orgSummary}
                id="floating-multiline"
                label="Summary"
                lineDirection="right"
                rows={5}
                placeholder="Summary"
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
              />
              <Button
                onClick={() => { this.props.addOrg(); this.clear() }}
                style={{ width: '100%' }}>
                ADD
              </Button>
            </form>
          </Card>

          <Card>
            <form>
              {this.props.Organization.map(
                (el) => (
                  <ExpansionList>
                    <ExpansionPanel label={el.orgName} saveLabel="UPDATE" onSave={() => this.props.updateOrg(el)}
                      cancelLabel="DELETE" onCancel={() => this.props.deleteOrg(el.orgName)}
                    >
                      <TextField defaultValue={el.orgName} onChange={(el) => this.props.changeOrgName(el)} maxLength={30} />
                      <TextField defaultValue={el.orgPosition} onChange={(el) => this.props.changeOrgPosition(el)} maxLength={30} />
                      <DatePicker defaultValue={el.startDateOrg} onChange={(el) => this.props.changeStartDateOrg(el)} />
                      <DatePicker defaultValue={el.endDateOrg} onChange={(el) => this.props.changeEndDateOrg(el)} />
                      <TextField defaultValue={el.orgSummary} onChange={(el) => this.props.changeAboutOrg(el)} />
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
  Organization: state.OrganizationReducer.organization

})

const mapDispatchToProps = {
  changeOrgName,
  changeOrgPosition,
  changeStartDateOrg,
  changeEndDateOrg,
  changeAboutOrg,
  addOrg,
  updateOrg,
  deleteOrg
}



export default connect(mapStateToProps, mapDispatchToProps)(Organizations)


