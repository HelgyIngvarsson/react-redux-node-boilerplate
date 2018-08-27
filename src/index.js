import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom'
import {BrowserRouter, Route } from 'react-router-dom'
import './helpers/vendor'
import HomeContainer from "./containers/HomeContainer";
import {Store} from './Store'

render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={HomeContainer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
