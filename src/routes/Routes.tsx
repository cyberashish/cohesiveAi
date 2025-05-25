
import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Home from "../pages/Home";

const routes = [
    {
        path:"/",
        Component: Layout,
        children: [
            {
                 index:true ,
                 Component: Home
            }
        ]
    }
]

export const router = createBrowserRouter(routes)