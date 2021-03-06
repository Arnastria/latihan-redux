import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Persistor, reduxStore } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import AudioRecorder from 'audio-recorder-polyfill'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate
        loading={<>Loading..</>}
        persistor={Persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
