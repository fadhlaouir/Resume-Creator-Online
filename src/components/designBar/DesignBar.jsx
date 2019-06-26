import React from 'react'
import './DesignBar.scss'
import { Paper, Card } from 'react-md'
import { SelectField } from 'react-md';
import linkedin from '../img/linkedin.png'
import Face from '../img/facebook.jpg'




const THEME = [
  'Classic',
  'Modern'
]
const icon = <i className="fas fa-caret-down"></i>;


const DesignBar = () => (
  <div className="designBar">
    <Paper>
      <Card className="desing" style={{ minHeight: '500px' }}>

        <div style={{ paddingBottom: '15px' }}>
          <span >
            <img alt="linkedin" src={linkedin} style={{ maxWidth: '20px', paddingRight: '5px' }} />
          </span>
          <span>
            Importer les données linkedin
          </span>
        </div>

        <div style={{ paddingBottom: '15px' }}>
          <span >
            <img alt="face" src={Face} style={{ maxWidth: '20px', paddingRight: '5px' }} />
          </span>
          <span >
            {/* <Facebook /> */}
            Importer les données Facebook
          </span>
        </div>

        <div>
          <SelectField
            style={{ width: '100%' }}
            id="select-field-2"
            placeholder="Classic"
            className="md-cell"
            menuItems={THEME}
            dropdownIcon={icon}
          />
        </div>


      </Card>
    </Paper>
  </div>

)

DesignBar.propTypes = {
}

export default (DesignBar)

