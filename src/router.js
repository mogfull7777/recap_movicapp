import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import TvDetail from "./pages/TvDetail";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
    {
        path: "/", // url path
        element: <Main />
    },
    {
        path : "/movie",
        element: <Movie />
    },
    {
        path : "/:tvid",
        element: <TvDetail />
    },
    {
        path : "/movie/:movieid",
        element: <MovieDetail />
    }
])

export default router;