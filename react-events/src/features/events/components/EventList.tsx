import { useState } from "react";
import EventCard from "./EventCard";
import { useEvents } from "../hooks/useEvents";

const EventList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data, dataUpdatedAt, isError, error, isLoading } = useEvents();

  if (isLoading) {
    return <p>Laden....</p>;
  }

  if (isError) {
    return <p>Er is iets fout gegaan: {error.message}</p>;
  }

  return (
    <div>
      <p>{new Date(dataUpdatedAt).toLocaleTimeString()}</p>
      <button
        onClick={() => {
          setIsRefreshing(!isRefreshing);
        }}>
        Refresh data
      </button>
      {data?._embedded.events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
};

export default EventList;
