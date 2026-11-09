import React, { useEffect, useState } from "react";

import Axios from "axios";
import type { TMEvent, TMResponse } from "../types";
import EventCard from "./EventCard";
import { getEvents } from "../api";

const EventList = () => {
  const [events, setEvents] = useState<TMEvent[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  //   useEffect wordt opgeroepen na een commit
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data._embedded.events);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       console.log("Tick");
  //     }, 1000);

  //     // Cleanup functie returnen
  //     return () => {
  //       clearInterval(timerId);
  //     };
  //   }, []);

  return (
    <div>
      <button
        onClick={() => {
          setIsRefreshing(!isRefreshing);
        }}>
        Refresh data
      </button>
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
};

export default EventList;
