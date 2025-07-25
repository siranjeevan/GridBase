import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Screen from './Components/DataGrid/Main/Screen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Screen />  
  </StrictMode>,
)
