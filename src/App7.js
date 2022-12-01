//* Uso de proptypes

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Profile extends Component {
    
  static propTypes = {
    phone: PropTypes.number.isRequired       
  }

  static defaultProps = {
    name: 'asda'
  }

  render() {
    const {name, email, phone} = this.props

    return (
      <div>
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <h3>My phone is: {phone}</h3>
      </div>
    )
  }
}


class App7 extends Component {


  render() {
    return (
      <div>
        <Profile  email="avilaalvaro14@gmail.com" phone={3884378617} />
      </div>
    )
  }
}

export default App7


