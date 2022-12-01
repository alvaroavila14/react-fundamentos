//* Prop children

import React, { Component } from 'react'

const A = (props) => {
  console.log(props.children)

  const styles = {
    color: props.uiColor,
  }

    return (
      <div>
        <h1 style={styles}>
          {props.children}
        </h1>
      </div>
    )    
  }

export default class App5 extends Component {
  
  state = {
    uiColor: 'purple',
  }
  
  render() {
    return (
      <div> <A uiColor={this.state.uiColor} text={'Hola'}>
          Super <em>Ninja</em>
        </A> </div>
    )
  }
}



