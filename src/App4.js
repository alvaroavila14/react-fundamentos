//*Renderizado condicional en React

import React from 'react'

const Saludo = (props) => {
  console.log(props.valor)
  if (props.valor) {
    return (
      <div>Hola soy el componente saludo y me renderizo solo cuando recibo true</div>
    )
  } else  {
    return (
      <div>No renderizo</div>
    )
  }
}


const App4 = () => {
  return (
    <div>
        <Saludo valor={true}/>
    </div>
  )
}

export default App4

