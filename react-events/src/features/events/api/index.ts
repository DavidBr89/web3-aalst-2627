import type { TMEvent, TMResponse } from "../types";
import { tmApi } from "../../../shared/api/ticketMasterApi";

export const getEvents = async (abortSignal?: AbortSignal) => {
  const response = await tmApi.get<TMResponse>("/events", {
    params: {
      size: 40,
      countryCode: "BE",
      //   postalCode: "9300",
    },
    signal: abortSignal,
  });
  return response.data;
};

// export const getSuggestions = async () => {
//   const response = await tmApi.get("/suggestions");
//   return response.data;
// };

export const getEventById = async (id: string, signal?: AbortSignal) =>
  await tmApi.get<TMEvent>(`/events/${id}`, { signal });
