import React, { Component } from 'react'
import './Skills.scss'

import {
  SetSkillsName,
  SetSkillsLevel,
  addSkills,
  deleteSkills,
  updateSkills

} from '../../duck/actions/SkillsAction'

import { connect } from 'react-redux'
import { Paper, Card, TextField, Button, ExpansionList, ExpansionPanel } from 'react-md'

class Skills extends Component {
  // state = {
  //   showSkillsInfo: false
  // }
  clear = () => { document.getElementById("clearForm").reset() }
  render() {
    return (
      <div>
        < Paper >
          <Card className="skills" style={{ padding: '20px' }}>
            <form id="clearForm">

              <TextField
                onChange={(e) => this.props.SetSkillsName(e)}
                value={this.props.skillsName}
                id="name"
                label="Name"
                placeholder="Name"
                maxLength={10}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.SetSkillsLevel(e)}
                value={this.props.skillsLevel}
                id="Percentage"
                label="Percentage"
                placeholder="Percentage"
                maxLength={10}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />
              <Button onClick={() => { this.props.addSkills(); this.clear() }} style={{ width: '100%' }}>
                ADD
              </Button>
            </form>
          </Card >
        </Paper >
        <Paper style={{ paddingTop: '20px' }}>
          <Card>
            <form>

              {this.props.Skills.map(
                (el) => (
                  // <div className="card card-body mb-3">
                  //   <div>
                  //     {el.skillsName}{' '}
                  //     <i onClick={() => this.setState({ showSkillsInfo: !this.state.showSkillsInfo })}
                  //       className="fa fa-caret-down"
                  //       style={{ cursor: 'pointer' }} />
                  //     <i onClick={() => this.props.deleteSkills(el.skillsName)}
                  //       className="fas fa-trash-alt"
                  //       style={{ cursor: 'pointer', float: 'right', color: 'red' }} />

                  //   </div>
                  //   {this.state.showSkillsInfo ? (
                  //     <ul className="list-group">
                  //       <TextField defaultValue={el.skillsName} onChange={(el) => this.props.SetSkillsName(el)} maxLength={10} />
                  //       <TextField defaultValue={el.skillsLevel} onChange={(el) => this.props.SetSkillsLevel(el)} maxLength={10} />
                  //       <Button onClick={() => this.props.updateSkills(el)}>
                  //         UPDATE
                  //       </Button>
                  //     </ul>
                  //   ) : null}
                  // </div>
                  <div>
                    <ExpansionList>
                      <ExpansionPanel label={el.skillsName} saveLabel="UPDATE" onSave={() => this.props.updateSkills(el)}
                        cancelLabel="DELETE" onCancel={() => this.props.deleteSkills(el.skillsName)}
                      >
                        <TextField defaultValue={el.skillsName} onChange={(el) => this.props.SetSkillsName(el)} maxLength={10} />
                        <TextField defaultValue={el.skillsLevel} onChange={(el) => this.props.SetSkillsLevel(el)} maxLength={10} />

                      </ExpansionPanel >
                    </ExpansionList >
                  </div>
                ))}
            </form>
          </Card>
        </Paper>
      </div>
    )
  }
}




const mapStateToProps = state => ({
  Skills: state.SkillsReducer.skills,

})

const mapDispatchToProps = {
  SetSkillsName,
  SetSkillsLevel,
  addSkills,
  deleteSkills,
  updateSkills
}


export default connect(mapStateToProps, mapDispatchToProps)(Skills)


