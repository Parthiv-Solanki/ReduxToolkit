import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateUser from "./pages/create-user";
import CrudTodoHome from "./pages/crud-todo-home";
import ThemeSwitcher from "./pages/theme-switcher";
import Toast from "./pages/toast";
import ToastProvider from "./context/toast/toastProvider";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <CrudTodoHome />,
      },
      {
        path: "/create",
        element: <CreateUser />,
      },
      {
        path: "/theme",
        element: <ThemeSwitcher />,
      },
      {
        path: "/toast",
        element: <Toast />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <ToastProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
