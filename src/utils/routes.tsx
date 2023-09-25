import { createBrowserRouter } from "react-router-dom";
import { RouteNames } from "./route-names";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: RouteNames.ROOT,
        element: <App />,
        children: [
            {
                
            }
        ]
    }
]);

