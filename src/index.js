import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/contact",
    element : <Contact/>
  },
  {
    path : "*",
    element : <h1>Not Found ❌</h1>
  }
]);

root.render(<RouterProvider router={router} />);

