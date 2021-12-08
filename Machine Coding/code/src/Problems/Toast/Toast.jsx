import { createContext, useContext, useEffect, useState } from "react";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [toastOptions, setToastOptions] = useState(null);

  const showToast = (options) => {
    setToastOptions(options);
    setVisible(true);
  };

  const hideToast = () => {
    setToastOptions(null);
    setVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {visible && <Toast options={toastOptions} />}
      {children}
    </ToastContext.Provider>
  );
};

const Toast = ({ options = {} }) => {
  const { hideToast } = useContext(ToastContext);

  useEffect(() => {
    let timeout = options?.autoHide || 2000;

    let timer = setTimeout(() => {
      hideToast();
    }, timeout);

    return () => timer && clearTimeout(timer);
  }, [hideToast, options?.autoHide]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      Toast is visible
    </div>
  );
};

export default ToastProvider;
