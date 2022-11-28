import React, {Component} from "react"
import './TarjetaFruta.css'


class TarjetaFruta extends Component { //O puedo hacer import { component } from 'react' y cambia mi linea por 'extends Component'

    state = {
        cantidad: 0,
        info: {
            name: 'Juan pablo',
            clicks: 0
        }
    }

    agregar = () => {
        /*this.setState({
            cantidad: this.state.cantidad + 1
        })*/

        this.setState((prevState) => ({
            cantidad: prevState.cantidad + 1
        }))
    }

    clicks = () => {
        this.setState((prevState) => ({
            info: {
                ...prevState.info,
                clicks: prevState.info.clicks + 1
            }
        }))
    }

    quitar = () => {
        this.setState((prevState) => ({
            cantidad: prevState.cantidad - 1
            
        }))
    }

    limpiar = () => {
        this.setState((prevState) => ({
            cantidad: 0
        }))
    }

   
    
    render() {
        const hasItems = this.state.cantidad > 0;
        const styleClass = `tarjetaFruta ${ hasItems ? 'tarjetaFruta-active' : '' }`

        return (
            <div className={styleClass}>
                <h3>Carrito</h3>
                <h1>Fruta: {this.props.fruta}</h1> {/* No recibo props como parametro, solo hago uso de 'this' */}
                <p>Cantidad: {this.state.cantidad}</p>
                <button onClick = {this.agregar}>Agregar </button>
                <button onClick = {this.quitar}>Quitar </button>
                <button onClick = {this.limpiar}>Limpiar </button>
                <hr></hr>
                <p>Precio: $ {this.props.price} / kg</p>
                <p>Total: $ { this.state.cantidad * this.props.price }</p>
                
                <hr></hr>

                <h1>{ this.state.info.name }</h1>
                <button onClick = {this.clicks}>Clicks </button>
                <p>Clicks: {this.state.info.clicks}</p>


            </div>
        )
    }
}

export default TarjetaFruta // O en lugar de esta linea puedo cambiar la linea nro 2 por 'export default class TarjetaFruta...'