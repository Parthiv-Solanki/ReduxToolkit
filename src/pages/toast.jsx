import React from "react";
import { useToast } from "../context/toast/toastService";

const Toast = () => {
  const toast = useToast();
  const handleFail = () => {
    toast.open(
      <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
        <div className="font-bold">Action Failed</div>
      </div>,
      1000
    );
  };
   const handleLogin = () => {
    toast.open(
      <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
        <div className="font-bold">Login</div>
      </div>,
      1000
    );
  };
  const handleActivate = () => {
    toast.open(
      <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
        <div className="font-bold">Activate</div>
      </div>,
      1500
    );
  };
  return (
    <>
      <button
        className="border-2 rounded-md border-gray-700 p-5 mr-10"
        onClick={handleFail}
      >
        Fail
      </button>
      <br />
      <br />
      <button
        className="border-2 rounded-md border-gray-700 p-5 mr-10"
        onClick={handleLogin}
      >
        Login
      </button>
      <br />
      <br />
      <button
        className="border-2 rounded-md border-gray-700 p-5 mr-10"
        onClick={handleActivate}
      >
        Activate
      </button>
      <br />
    </>
  );
};

export default Toast;
