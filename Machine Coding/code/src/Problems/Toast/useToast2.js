import { useContext } from "react";
import { Toast2Context } from "./Toast2";

const useToast2 = () => {
  const { showToast, hideToast } = useContext(Toast2Context);

  return { showToast, hideToast };
};

export default useToast2;
