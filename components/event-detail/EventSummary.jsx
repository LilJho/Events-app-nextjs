import React from "react";

function EventSummary({ title }) {
  return (
    <section className="w-full h-[30vh] bg-gradient-to-bl from-[#008b79] to-[#1180a1]">
      <h1 className="m-0 pt-[1rem] text-[2rem] text-center drop-shadow-lg shadow-black text-white md:text-[5rem]">
        {title}
      </h1>
    </section>
  );
}

export default EventSummary;
