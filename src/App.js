import React from 'react';
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProductos from './components/NuevoProducto'
import EditarProducto from './components/EditarProduct'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//REDUX
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
      <Router>
        <Provider store={store}>
          <Header/>

          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Productos}/>
              <Route exact path="/productos/nuevo" component={NuevoProductos}/>
              <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
          </div>
        </Provider>
      </Router>
  );
}

export default App;
