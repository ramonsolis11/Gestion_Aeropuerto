// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AvionList from './components/AvionList';
import AvionDetail from './components/AvionDetail';
import GateList from './components/GateList'; // Agregamos el componente GateList
import GateDetail from './components/GateDetail'; // Agregamos el componente GateDetail

const App = () => {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/aviones">Aviones</Link>
                </li>
                <li>
                <Link to="/puertas">Puertas de Embarque</Link>
                </li>
            </ul>
            </nav>
            <Switch>
            <Route exact path="/aviones" component={AvionList} />
            <Route path="/aviones/:id" component={AvionDetail} />
            <Route exact path="/puertas" component={GateList} /> {/* Nueva ruta para la lista de puertas */}
            <Route path="/puertas/:id" component={GateDetail} /> {/* Nueva ruta para el detalle de la puerta */}
            </Switch>
        </div>
        </Router>
    );
};

export default App;
