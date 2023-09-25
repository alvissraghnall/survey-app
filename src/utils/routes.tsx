import { createBrowserRouter } from "react-router-dom";
import { RouteNames } from "./route-names";
import App from "../App";
import Root from "../pages/Root";

export const router = createBrowserRouter([
    {
        path: RouteNames.ROOT,
        element: <App />,
        children: [
            {
                index: true,
                element: <Root />
            }
        ]
    }
]);

