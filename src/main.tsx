import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { StrictMode } from 'react'
import Router from './routes/routes.tsx'
import "./assets/fonts/Font.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router />
    </StrictMode>
)
