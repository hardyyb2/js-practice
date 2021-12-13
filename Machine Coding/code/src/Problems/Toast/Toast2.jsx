import { createContext, useContext, useEffect, useState } from "react";

export const Toast2Context = createContext();

const IDGenerator = () => {
  let id = 0;

  const generateId = () => {
    return id++;
  };

  return { generateId };
};

let { generateId } = IDGenerator();

const Toast2Provider = ({ children }) => {
  const [toasts, setToasts] = useState(null);

  const showToast = (message, options) => {
    let newToasts = { ...toasts };
    const newToastId = generateId();
    newToasts[newToastId] = { id: newToastId, message, options };
    setToasts(newToasts);
  };

  const hideToast = (toastId) => {
    let newToasts = { ...toasts };
    delete newToasts[toastId];
    setToasts(newToasts);
  };

  return (
    <Toast2Context.Provider value={{ showToast, hideToast }}>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {toasts
          ? Object.values(toasts).map((toast) => (
              <Toast key={toast.id} options={toast} />
            ))
          : null}
      </div>
      {children}
    </Toast2Context.Provider>
  );
};

export default Toast2Provider;

const Toast = ({ options = {} }) => {
  const { hideToast } = useContext(Toast2Context);

  useEffect(() => {
    let timeout = options?.autoHide || 2000;

    let timer = setTimeout(() => {
      hideToast(options.id);
    }, timeout);

    return () => timer && clearTimeout(timer);
  }, [hideToast, options?.autoHide, options.id]);

  return <div onClick={() => hideToast(options.id)}>{options.message}</div>;
};
