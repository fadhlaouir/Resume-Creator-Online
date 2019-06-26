import React from 'react'
// import PropTypes from 'prop-types'
import './Header.scss'
import { Grid, Cell, TabsContainer, Tabs, Tab } from 'react-md';
import { withRouter } from 'react-router-dom'

const tabs = [
  'About',
  'Education',
  'Experience',
  'Projects',
  'Organizations',
  'Certifications',
  'Skills',
  'Languages',
]
const Header = ({ history }) => {

  return (
    <div>
      <div className="header">
        <Grid>
          <Cell size={12} >
            <TabsContainer >
              <Tabs className="tab" tabId="simple-tab" >
                {
                  tabs.map(tab => {
                    return (
                      <Tab onClick={() => history.push(`/${tab.toLowerCase()}`)} key={tab} label={tab} />
                    )
                  })
                }

              </Tabs>
            </TabsContainer>
          </Cell>
        </Grid>
      </div>
    </div >
  )
}

// Header.propTypes = {
// }

export default withRouter(Header)
