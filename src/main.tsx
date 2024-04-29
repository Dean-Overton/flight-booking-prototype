import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Booking from './pages/booking'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Booking/>
  </React.StrictMode>,
)
