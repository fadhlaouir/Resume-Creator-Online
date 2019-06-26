import React, { Component } from 'react'
import './Languages.scss'
import {
  changeLanguageName,
  changeLanguageFluency,
  addLanguage,
  updateLanguage,
  deleteLanguage
} from '../../duck/actions/LanguagesAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, Button, ExpansionList, ExpansionPanel } from 'react-md'

class Languages extends Component {
  clear = () => { document.getElementById("clearForm").reset() }


  render() {
    return (
      <Paper>
        <Card className="languages" style={{ padding: '20px' }}>
          <form id="clearForm" >

            <TextField
              value={this.props.languageName}
              onChange={(e) => this.props.changeLanguageName(e)}
              id="languageName"
              label="Language"
              placeholder="Language"
              className="md-cell md-cell--bottom"
              style={{ width: '100%' }}
              maxLength={10}
            />

            <TextField
              value={this.props.fluency}
              onChange={(e) => this.props.changeLanguageFluency(e)}
              id="fluency"
              label="Fluency"
              placeholder="Fluency"
              className="md-cell md-cell--bottom"
              style={{ width: '100%' }}
              maxLength={10}
            />

            <Button onClick={() => { this.props.addLanguage(); this.clear() }}
              style={{ width: '100%' }} >
              ADD
            </Button>
          </form>
        </Card>

        <Card>
          <form>
            {this.props.Language.map(
              (el) => (
                <ExpansionList>
                  <ExpansionPanel label={el.languageName} saveLabel="UPDATE" onSave={() => this.props.updateLanguage(el)}
                    cancelLabel="DELETE" onCancel={() => this.props.deleteLanguage(el.languageName)}
                  >
                    <TextField defaultValue={el.languageName} onChange={(e) => this.props.changeLanguageName(e)} maxLength={10} />
                    <TextField defaultValue={el.fluency} onChange={(e) => this.props.changeLanguageFluency(e)} maxLength={10} />
                  </ExpansionPanel >
                </ExpansionList >
              )
            )}
          </form>
        </Card>
      </Paper >
    )
  }
}
const mapStateToProps = state => ({
  Language: state.LanguagesReducer.language

})

const mapDispatchToProps = {

  changeLanguageName,
  changeLanguageFluency,
  addLanguage,
  updateLanguage,
  deleteLanguage

}

export default connect(mapStateToProps, mapDispatchToProps)(Languages)