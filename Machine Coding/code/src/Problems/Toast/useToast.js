import { useContext } from "react";
import { ToastContext } from "./Toast";

const useToast = () => {
  const { showToast, hideToast } = useContext(ToastContext);

  return { showToast, hideToast };
};

export default useToast;
