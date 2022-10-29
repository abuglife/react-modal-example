import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ConfirmModalProvider } from './components/ModalWithContext/useConfirmModal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfirmModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfirmModalProvider>
  </React.StrictMode>
)
