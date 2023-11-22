import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast, msg }) => {
  return (
    <div>
      <h4>{msg}</h4>
      <button onClick={closeToast}>X</button>
    </div>
  );
};

const ToastNotification = () => {
  const notify = () => {
    // toast("Basic Notification!", { position: toast.POSITION.TOP_CENTER });
    toast(<CustomToast msg="Your message goes here" />);
    // toast.success("Basic Notification!", { autoClose: false });
    // toast.info("Basic Notification!");
    // toast.error("Basic Notification!");
    // toast.warn("Basic Notification!");
  };

  return (
    <div>
      <h2>Toast Notifications!</h2>
      <button onClick={() => notify()}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;
