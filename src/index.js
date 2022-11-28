import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from './App'
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

//* Con el nuevo metodo hago lo siguiente:

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <App4 />
)




//ReactDOM.render(<App />, document.getElementById('root')) //?Debería usar render o createRoot? ESTO ES UN METODO VIEJO, LEGACY EN REACT 18
//*Como primer parametro recibo el elemento a montar y como segundo el elemento en el cual se va a montar

