import { useQuery } from "@tanstack/react-query";
import { getEventById, getEvents } from "../api";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: ({ signal }) => getEvents(signal),
    refetchInterval: 1_000_000,
    // enabled: isRefreshing,
  });
};

export const useEventById = (id: string) => {
  return useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => getEventById(id, signal),
  });
};
