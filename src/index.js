import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from './App'
import App10 from "./App10";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6  from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";

//* Con el nuevo metodo hago lo siguiente:

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <App10 />
)




//ReactDOM.render(<App />, document.getElementById('root')) //?Debería usar render o createRoot? ESTO ES UN METODO VIEJO, LEGACY EN REACT 18
//*Como primer parametro recibo el elemento a montar y como segundo el elemento en el cual se va a montar

