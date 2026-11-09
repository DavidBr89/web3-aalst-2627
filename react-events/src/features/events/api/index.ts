import type { TMEvent, TMResponse } from "../types";
import { tmApi } from "../../../shared/api/ticketMasterApi";

export const getEvents = async () => {
  return await tmApi.get<TMResponse>("/events", {
    params: {
      size: 40,
      countryCode: "BE",
      //   postalCode: "9300",
    },
  });
};

export const getEventById = async (id: string) =>
  await tmApi.get<TMEvent>(`/events/${id}`);
