import React from "react";
import EventList from "../components/event/EventList";
import { getFeaturedEvents } from "../DUMMY_DATA";

function FeaturedEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default FeaturedEventsPage;
