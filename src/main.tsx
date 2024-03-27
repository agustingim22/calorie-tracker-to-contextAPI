import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ActvityProvider } from './context/ActivityContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ActvityProvider>
      <App />
    </ActvityProvider>
  </React.StrictMode>,
)
