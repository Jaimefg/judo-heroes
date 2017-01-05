/**
 * Created by jaidestroyer_1990 on 5/1/17.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};