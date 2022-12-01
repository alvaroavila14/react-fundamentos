//* Portals en React

import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'

class PortalModal extends Component {

    
    render () { 
        const styles = {
            background: 'red',
            color: '#FFF'
        }

        if (this.props.visible) {
            return ReactDOM.createPortal((
                <div>
                    <h1 style={styles}>{this.props.children}</h1>
                </div>
            ), document.getElementById('modal-root'))

        } else {
            return null
        }


    }
}


export default class App6 extends Component {

  state = {
    visible: false
  }

  mostrar = () => {
    this.setState({
        visible: true
  })
  }

  ocultar = () => {
    this.setState({
        visible: false
    })
  }

  render() {
    return (
        <div>
            <button onClick={this.mostrar}>Mostrar</button>
            <PortalModal visible={this.state.visible}>
                Hola soy children vengo desde App6
                <button onClick={this.ocultar}>Ocultar</button>
            </PortalModal>
        </div>
    )
  }
}

