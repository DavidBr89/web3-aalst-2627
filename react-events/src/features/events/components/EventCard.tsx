import React from "react";
import type { TMEvent } from "../types";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  return (
    <div>
      <img src={firstImage.url} alt="" />
      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
