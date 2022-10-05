import React from "react";
import EventItem from "./EventItem";

function EventList({ events }) {
  return (
    <ul className="w-[90%] max-w-[40rem] my-[5rem] mx-auto">
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
