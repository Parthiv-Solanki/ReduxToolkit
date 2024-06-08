import { useState } from "react";
import ToastContext from "./toastService";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const open = (component, timeout = 5000) => {
    const id = Date.now();
    setToasts((toasts) => [...toasts, { id, component }]);
    setTimeout(() => close(id), timeout);
  };

  const close = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };
  console.log(toasts);
  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 absolute bottom-4 right-4">
        {toasts.map(({ id, component }) => {
          return (
            <div key={id}>
              <button onClick={() => close(id)}>Click</button>
              {component}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
