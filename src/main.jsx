import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Entry from './components/Entry.jsx'
import Exit from './components/Exit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Exit />
    <Entry />

  </React.StrictMode>,
)
