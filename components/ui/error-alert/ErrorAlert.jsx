import React from "react";

function ErrorAlert({ children }) {
  return (
    <div className="my-4 mx-auto py-4 px-8 w-[90%] max-w-[40rem] bg-[#d5bdfc] text-[#38028d] font-bold text-[1.5rem] text-center rounded-md">
      {children}
    </div>
  );
}

export default ErrorAlert;
