import React from "react";
import { toast } from "react-toastify";
import "./toast.css";
import "react-toastify/dist/ReactToastify.css";

function ToastPage() {
  const toastClick = () => {
    toast("default toast");
    toast.error("error toast");
    toast.success("success toast");
    toast.info("info toast");
  };

  return (
    <div>
      <button onClick={toastClick}>Notify Toast</button>
    </div>
  );
}

export default ToastPage;
