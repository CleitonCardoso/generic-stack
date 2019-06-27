import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'

import InformacoesGerais from './pages/InformacoesGerais'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={InformacoesGerais} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
