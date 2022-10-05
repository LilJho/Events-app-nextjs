import { Fragment } from "react";
import EventList from "../../components/event/EventList";
import EventsSearch from "../../components/event/EventsSearch";
import { getAllEvents } from "../../DUMMY_DATA";
import { useRouter } from "next/router";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
