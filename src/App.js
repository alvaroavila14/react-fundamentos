import React, {Component} from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";

//Declaracion de componente como arrow function
/*const App = () => (
    <div>
        <TarjetaFruta fruta="SANDIA" price={150}/>
        <TarjetaFruta fruta="MANZANA" price={250}/>
        <TarjetaFruta fruta="PERA" price={175}/>
    </div>
)*/

const styles = {
    height: '200px',
    background: 'orange',
    padding: '1em',
    boxSizing: 'border-box',
    marginBottom: '2em'
}


class App extends Component {

    state = {
        x: 0,
        y: 0,
        text: ''
    }

    
    disparador = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    recibir = (event) => {
        console.log(event)
        this.setState({
            text: event.target.value
        })
    }

    render () {
        return (
            <div>
                <div style={styles} onMouseMove={this.disparador}>
                    <div>
                        X: {this.state.x}
                        Y: {this.state.y}
                    </div>
                    <div>
                        <input type='text' onChange={this.recibir}></input>
                        <h1>{this.state.text}</h1>
                    </div>
                </div>
                <TarjetaFruta 
                    fruta = 'SANDIA'
                    price = '100'
                />
                <TarjetaFruta 
                    fruta = 'MANZANA'
                    price = '150'
                />
                <TarjetaFruta 
                    fruta = 'PERA'
                    price = '25'
                />
            </div>
        )
    }
}

export default App