import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './context/language-context.tsx'

// Apply dark theme by default
document.documentElement.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <LanguageProvider>
        <ToastProvider/>
        <App />
      </LanguageProvider>
    </HeroUIProvider>
  </React.StrictMode>,
)