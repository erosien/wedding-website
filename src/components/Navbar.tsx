import { Link } from "react-router-dom";
import { auth } from "../config/firebase.config";

function Navbar() {
  const routes = [
    {
      routeTitle: "Home",
      routeLocation: "/",
      isLoggedIn: true,
    },
    {
        routeTitle: "Details",
        routeLocation: "/details",
        isLoggedIn: true,
    },
    {
        routeTitle: "Accomodations",
        routeLocation: "/accomodations",
        isLoggedIn: true,
    },
    {
        routeTitle: "Itinerary",
        routeLocation: "/itinerary",
        isLoggedIn: true,
    },
    {
        routeTitle: "Song Requests",
        routeLocation: "/songrecs",
        isLoggedIn: true,
    },
    {
      routeTitle: "Sign Up",
      routeLocation: "/signup",
      isLoggedIn: false,
    },
    {
        routeTitle: "Sign In",
        routeLocation: "/signin",
        isLoggedIn: false,
    },
    {
        routeTitle: "Sign Out",
        routeLocation: "/signout",
        isLoggedIn: true,
    },
  ];

  const viewableRouteWhenLoggedIn = () => {
    return routes.map((route) => {
      if (route.isLoggedIn && auth.currentUser) {
        return (
          <li key={route.routeTitle}>
            <Link
              to={route.routeLocation}
              className="flex-row hover:text-slate-500"
            >
              {route.routeTitle}
            </Link>
          </li>
        );
      } else if (!auth.currentUser && !route.isLoggedIn) {
        return (
          <li key={route.routeTitle}>
            <Link
              to={route.routeLocation}
              className="flex-row hover:text-slate-500"
            >
              {route.routeTitle}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <div>
      <nav className="bg-stone-200 fixed top-0 w-full z-100 py-5 px-10">
        <ul className="flex items-center justify-around p-5">
          {viewableRouteWhenLoggedIn()}
        </ul>
      </nav>
      <div className="mb-24"></div>
    </div>
  );
}

export default Navbar;