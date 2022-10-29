import React, { ReactNode } from "react";

export interface DialogConfig {
  dialog?: React.ComponentClass<any>;
  onDismiss?: Function;
  onConfirm?: Function;
}

interface DialogContextProps {
  openDialog: Function
}

interface DialogProviderProps {
  children: React.ReactNode
}

const DialogContext = React.createContext({} as DialogContextProps);

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [open, setOpen] = React.useState(false);
  const [config, setConfig] = React.useState({} as DialogConfig);
  const { dialog: DialogComponent, onDismiss, onConfirm } = config;

  const openDialog = (props: DialogConfig) => {
    setOpen(true);
    setConfig(props);
  };

  const closeDialog = () => {
    setOpen(false);
    if(onDismiss) { onDismiss() }
  };
  
  const confirmDialog = () => {
    setOpen(false);
    if(onConfirm) { onConfirm() }
  };

  return (
    <DialogContext.Provider value={{ openDialog }}>
      { DialogComponent && <DialogComponent
        {...config}
        open={open}
        onDismiss={closeDialog}
        onConfirm={confirmDialog}
       /> }
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const { openDialog } = React.useContext(DialogContext);
  return { openDialog };
};

export { DialogProvider, useDialog };