import * as React from "react";
import { useRoutes } from "react-router-dom";
import Header from "../components/Header";
import RentalProperties from "../components/RentalProperties";
import Favorite from "../components/Favorite";

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "rent",
          element: <RentalProperties />,
        },
        {
          path: "favorite",
          element: <Favorite/>
        }
      ],
    },
  ]);

  return element;
}
export default Routes;
