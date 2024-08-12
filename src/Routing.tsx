import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC, useEffect } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Guard from "./components/Guard";
import { queryClient } from "./main";
import { useQuery } from "@tanstack/react-query";

const Routing: FC<{}> = ({}) => {
  const fn = async (): Promise<Object> =>
    await new Promise((resolve) =>
      resolve({
        connected: true,
      })
    );

  const { data } = useQuery({
    queryKey: ["log"],
    queryFn: fn,
    // enabled: able,
  });
  const query = queryClient.getQueriesData({
    queryKey: ["log"],
    exact: true,
  });

  let connectedI: boolean = false;

  if (query && query[0][1]) {
    console.log(query[0][1]);
    const { connected } = query[0][1] as any;
    connectedI = connected;
  }

  const Routes = createBrowserRouter([
    {
      path: "login",
      caseSensitive: false,
      element: <Login />,
    },
    {
      path: "signUp",
      caseSensitive: false,
      element: <SignUp />,
    },
    {
      path: "dashboard",
      caseSensitive: false,
      element: (
        <Guard isConnected={connectedI}>
          <Dashboard />
        </Guard>
      ),
    },
  ]);
  if (query && query[0][1]) {
    return <RouterProvider router={Routes} />;
  }
};

export default Routing;
