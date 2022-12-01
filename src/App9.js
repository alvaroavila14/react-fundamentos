import React, { Component } from 'react'

class App9 extends Component {
    
    state = {
        user: {
            id: 1,
            name: 'Alvaro',
            age: 18,
            country: 'Argentina'
        }
    }

    
    render() {


        const keys = Object.keys(this.state.user)
        console.log(keys)

        const { user } = this.state

        return (
            <div>
                { keys.map((clave) => {
                    return (
                        <div key={user.id}>
                            <strong>{clave} </strong>a {user[clave]}
                        </div>
                    )
                }) }
            </div>
        )
  }
}

export default App9
