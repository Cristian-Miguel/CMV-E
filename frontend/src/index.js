import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Registrar from './components/Registrar';
import ListarClientes from './components/ListarClientes';
// import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/Registro" element={<Registrar/>}/>
        <Route exact path="/Listar_Clientes" element={<ListarClientes/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// reportWebVitals();