import React from 'react';
import GlobalContextPage from './pages/GlobalContext';
import ModalWithContextPage from './pages/ModalWithContext';
import SimpleModalExamplePage from './pages/SimpleModal';

const routes = [
  { path: '/simple-modal', element: <SimpleModalExamplePage /> },
  { path: '/modal-with-context', element: <ModalWithContextPage /> },
  { path: '/global-context', element: <GlobalContextPage /> }
];

export default routes;
