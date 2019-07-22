import React from 'react';
import { toast } from 'react-toastify';

function ToastPage() {
  const toastClick = () => {
    toast('testing');
  };

  return (
    <div>
      <button onClick={toastClick}>Notify Toast</button>
    </div>
  );
}

export default ToastPage;
