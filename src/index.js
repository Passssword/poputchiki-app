import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/redux-store.js';

import Header from './components/header.js';
import Content from './components/content.js';
import generelSearch from './components/generalSearch.jsx';
import SearchResultsPage from './components/searchResultsPage.jsx';
import CreateAdvertPage from './components/createAdvertPage.jsx';
import reportWebVitals from './reportWebVitals';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {path: "/", element: <Header />},
//       {path: "/", element: <Content />},
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    // { <RouterProvider router={router} /> }
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
