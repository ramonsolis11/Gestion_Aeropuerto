// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AvionList from './components/AvionList';
import GateList from './components/GateList';

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
            <Route path="/aviones" component={AvionList} />
            <Route path="/puertas" component={GateList} />
            </Switch>
        </div>
        </Router>
    );
};

export default App;
