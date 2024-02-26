import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ImageDataProvider } from './context-api/ImageDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ImageDataProvider>
    <App />
    </ImageDataProvider>
  </React.StrictMode>,
)
