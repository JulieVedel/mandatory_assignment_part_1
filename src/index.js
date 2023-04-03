import React from 'react'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
