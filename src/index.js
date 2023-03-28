import React from 'react'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)