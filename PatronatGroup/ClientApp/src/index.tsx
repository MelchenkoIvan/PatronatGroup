import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import { store } from './application/store/store';
import AppContainer from './presentation/App';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
