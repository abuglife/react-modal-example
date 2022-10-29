import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { DialogProvider } from './components/GlobalContext/useDialog'
import { ConfirmModalProvider } from './components/ModalWithContext/useConfirmModal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <DialogProvider>
        <ConfirmModalProvider>
          <App />
        </ConfirmModalProvider>
      </DialogProvider>
    </HashRouter>
  </React.StrictMode>
)
