//* Eventos personalizados en React

import React from "react"
import './styles.css'

class Hijo extends React.Component {


  manejadorClick = () => {
    this.props.customEvent('Estoy muy triste ☹️🐈')
  }   

  render() {
    return (
      <div className="box hijo">
        <h2>Hijo</h2>
        <button onClick={this.manejadorClick}>Click</button>
      </div>
    )
  }
}



export default class App3 extends React.Component {

  state = {
    text: ''
  }  

  disparador = (a) => {
    alert(a)
    this.setState({
        text: a
    })
  }

  render() {
    return (
      <div className="box padre">
        <h1>Yo soy tu padre</h1>
        <p>{this.state.text}</p>
        <Hijo customEvent={this.disparador} />
      </div>
    )
  }
}
