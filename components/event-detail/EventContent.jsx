import React from "react";

function EventContent({ text, children }) {
  return (
    <section className="text-[1.5rem] text-[#3a3a3a] w-[90%] max-w-[40rem] m-auto mt-[8rem] text-center">
      {children}
    </section>
  );
}

export default EventContent;
