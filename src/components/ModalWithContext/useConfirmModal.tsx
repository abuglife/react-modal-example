import React from "react";
import Modal from '../shared/Modal';

export interface ConfirmModalConfig {
  title?: string;
  message?: string;
  onDismiss?: Function;
  onConfirm?: Function;
}

interface ConfirmModalContextProps {
  openDialog: Function
}

interface ConfirmModalProviderProps {
  children: React.ReactNode
}

const ConfirmModalContext = React.createContext({} as ConfirmModalContextProps);

const ConfirmModalProvider = ({ children }: ConfirmModalProviderProps) => {
  const [open, setOpen] = React.useState(false);
  const [config, setConfig] = React.useState({} as ConfirmModalConfig);
  
  const openDialog = (props: ConfirmModalConfig) => {
    setConfig(props);
    setOpen(true);
  };

  const resetDialog = () => {
    setOpen(false);
    setConfig({});
  };

  const onConfirm = () => {
    resetDialog();
    if(config.onConfirm) { config.onConfirm(true) };
  };

  const onDismiss = () => {
    resetDialog();
    if(config.onConfirm) { config.onConfirm(false) };
  };

  return (
    <ConfirmModalContext.Provider value={{ openDialog }}>
      <Modal
        open={open}
        title={config?.title}
        message={config?.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmModalContext.Provider>
  );
};

const useConfirmModal = () => {
  const { openDialog } = React.useContext(ConfirmModalContext);

  const getConfirm = ({ ...options }) =>
    new Promise((res) => {
      openDialog({ onConfirm: res, ...options });
    });

  return { getConfirm };
};

export { ConfirmModalProvider, useConfirmModal };