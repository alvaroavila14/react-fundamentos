//* MANEJO DE EVENTOS 
import React from "react";

class Color extends React.Component {
  state = {
    color: "",
  };

  handler = (e) => {

    this.setState({
        color: e.target.value
    })
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handler}></input>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    );
  }
}

//* Puedo definir un componente funcional como arrow function
/*const App2 = () => {
  return (
    <div>
      <Color />
    </div>
  );
};*/

//* O puedo definirla como una funcion tipica de javascript

function App2() {
  return (
    <div>
      <Color />
    </div>
  );
}

export default App2;
