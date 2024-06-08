import { createContext, useContext } from "react";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export default ToastContext;
