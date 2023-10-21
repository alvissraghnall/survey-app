import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { router } from './utils/routes'
import { Header } from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <>bgb</>
// )