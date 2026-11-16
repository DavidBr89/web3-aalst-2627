import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import ContactPage from "../features/contact/pages/ContactPage";
import EventsPage from "../features/events/pages/EventsPage";
import EventsDetailPage from "../features/events/pages/EventsDetailPage";

const queryClient = new QueryClient({});

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    children: [
      {
        index: true,
        element: <EventsPage />,
      },
      {
        path: ":id",
        element: <EventsDetailPage />,
      },
      {
        path: ":id/venues",
        element: <App />,
      },
    ],
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  );
};

export default Providers;
