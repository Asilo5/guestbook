import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import './index.css';
import App from './Components/App/App';
import store from './store/index';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

