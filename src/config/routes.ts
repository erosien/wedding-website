import Accomodations from "../pages/Accomodations";
import Itinerary from "../pages/Itinerary";
import Details from "../pages/Details";
import Home from "../pages/Home";
import SongRecs from "../pages/SongRecs";
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: RouteType[] = [
    {
        path: "/",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/accomodations",
        component: Accomodations,
        name: "Accomodations",
    },
    {
        path: "/itinerary",
        component: Itinerary,
        name: "Itinerary",
    },
    {
        path: "/details",
        component: Details,
        name: "Details",
    },
    {
        path: "/songrecs",
        component: SongRecs,
        name: "SongRecs",
    },
    {
        path: "/signup",
        component: SignUp,
        name: "Sign Up",
    },
    {
        path: "/signin",
        component: SignIn,
        name: "Sign In",
    }
];

export default routes;