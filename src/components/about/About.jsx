import React, { Component } from 'react'
import './About.scss'
import {
  changePicture,
  changeFullName,
  changePhoneNumber, changeSummary,
  changeCurrentPost, changeEmail, changeAddress
} from '../../duck/actions/AboutAction'
import { connect } from 'react-redux'
import { Paper, Card, TextField, FontIcon } from 'react-md'


//import Avatar from 'react-avatar-edit'




class About extends Component {
  // constructor(props) {
  //   super(props);
  //   const src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
  //   this.state = {
  //     preview: null,
  //     src
  //   }
  //   this.onCrop = this.onCrop.bind(this)
  //   this.onClose = this.onClose.bind(this)
  // }
  // onClose() {
  //   this.setState({ preview: null })
  // }
  // onCrop(preview) {
  //   this.setState({ preview })
  // }

  render() {
    return (
      <div>
        <Paper >
          <Card className="about" style={{ padding: '20px' }}>
            <form>

              {/* <div>
                <Avatar
                  onChange={(e) => this.props.changePicture(e)}
                  / value={this.props.picture}
                  value={this.props.preview}
                  width={'100 %'}
                  height={295}
                  onCrop={this.onCrop}
                  onClose={this.onClose}
                  src={this.state.src}
                />
                <img src={this.state.preview} alt="Preview" />
              </div> */}

              <TextField
                onChange={(e) => this.props.changeFullName(e)}
                value={this.props.About.fullName}
                id="full-name"
                label="Full Name"
                placeholder="Full Name"
                maxLength={30}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />

              <TextField
                onChange={(e) => this.props.changeCurrentPost(e)}
                value={this.props.About.currentPost}
                id="current-post"
                label="Current Post"
                placeholder="Current Post"
                maxLength={40}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }} />
              <TextField
                onChange={(e) => this.props.changeEmail(e)}
                value={this.props.About.email}
                id="email"
                label="email"
                placeholder="email"
                maxLength={50}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
                leftIcon={<FontIcon><i className="fas fa-at"></i></FontIcon>}
              />

              <TextField
                onChange={(e) => this.props.changeAddress(e)}
                value={this.props.About.address}
                id="address"
                label="address"
                placeholder="address"
                maxLength={50}
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
                leftIcon={<FontIcon><i className="fas fa-map-marker-alt"></i></FontIcon>}
              />
              <TextField
                onChange={(e) => this.props.changePhoneNumber(e)}
                value={this.props.About.phoneNumber}
                id="phone"
                label="Phone Number"
                placeholder="Phone Number"
                maxLength={8}
                className="md-cell md-cell--bottom"
                leftIcon={<FontIcon><i className="fas fa-phone-square"></i></FontIcon>}
                style={{ width: '100%' }} />
              <TextField
                onChange={(e) => this.props.changeSummary(e)}
                value={this.props.About.abSummary}
                id="floating-multiline"
                label="About"
                lineDirection="right"
                rows={5}
                placeholder="About"
                className="md-cell md-cell--bottom"
                style={{ width: '100%' }}
              />

            </form>

          </Card>
        </Paper>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  About: state.AboutReducer

})

const mapDispatchToProps = {
  changePicture,
  changeFullName,
  changeCurrentPost,
  changeEmail,
  changeAddress,
  changePhoneNumber,
  changeSummary
}
export default connect(mapStateToProps, mapDispatchToProps)(About)






