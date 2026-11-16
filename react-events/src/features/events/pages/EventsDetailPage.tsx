import React from "react";
import { useParams } from "react-router";

const EventsDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      Detail page
      <p>Event met id: {id}</p>
    </div>
  );
};

export default EventsDetailPage;
