import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DialogProvider } from './components/GlobalContext/useDialog'
import { ConfirmModalProvider } from './components/ModalWithContext/useConfirmModal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DialogProvider>
        <ConfirmModalProvider>
          <App />
        </ConfirmModalProvider>
      </DialogProvider>
    </BrowserRouter>
  </React.StrictMode>
)
