import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import '../src/assets/styles/fonts.scss';
import '../src/assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}>
      <RouterProvider router={router} />
      <h1>HomePage</h1>
    </Provider>
  </React.StrictMode>,
)
