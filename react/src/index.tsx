import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18Next/i18next"
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/store"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.Suspense fallback="loading">
      <Provider store={store}>
        <App />
      </Provider>
  </React.Suspense>
);

reportWebVitals();
