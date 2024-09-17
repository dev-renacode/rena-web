import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'
import '@fontsource-variable/onest';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App/>
    <Footer/>
  </StrictMode>,
)
