import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
    {
        path: "/tv", // url path
        element: <Main />
    },
    {
        path : "/movie",
        element: <Movie />
    }
])

export default router;