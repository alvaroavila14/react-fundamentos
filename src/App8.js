//* Iteracion normal de arrays e iteracion anidada (CON KEYS)

import React, { Component } from "react";

class App8 extends Component {
    state = {
        frutas: [
            {
                id: 1,
                name: "Kiwi",
                precio: 20,
                stock: true,
                variedad: [
                    '1', '2', '3'
                ]
            },
            {
                id: 2,
                name: "Naranja",
                precio: 120,
                stock: true,
                variedad: [
                    '1', '2', '3'
                ]
            },
            {
                id: 3,
                name: "Frutilla",
                precio: 520,
                stock: true,
                variedad: [
                    '1', '2', '3'
                ]
            },
            {
                id: 4,
                name: "Pera",
                precio: 320,
                stock: true,
                variedad: [
                    '1', '2', '3'
                ]
            },
            {
                id: 5,
                name: "Manzana",
                precio: 720,
                stock: true,
                variedad: [
                    '1', '2', '3'
                ]
            },
    
        ]
    }

    render() {
        return (
            <div>
                { this.state.frutas.map((frutas) => 
                        <div key={frutas.id}>
                           $ {frutas.precio} - {frutas.name}
                           <div>
                            {frutas.variedad.map((vari, index) => 
                                
                                    <span key={vari + index}>{vari}</span>
                                
                            )}
                           </div>
                        </div>

                    
                ) }
            </div>
        )
    }
}

export default App8