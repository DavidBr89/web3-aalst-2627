import Axios from "axios";

export const tmApi = Axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
  params: {
    apikey: import.meta.env.VITE_TM_API_KEY,
  },
});
