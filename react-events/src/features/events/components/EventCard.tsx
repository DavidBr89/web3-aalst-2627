import React from "react";
import type { TMEvent } from "../types";
import { Link } from "react-router";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  return (
    <Link to={`/events/${event.id}`}>
      <img src={firstImage.url} alt="" />
      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </Link>
  );
};

export default EventCard;
