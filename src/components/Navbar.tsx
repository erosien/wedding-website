import { signOut } from "@firebase/auth"
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";

interface NavProps {
  authenticatedUserID: string;
}

function Navbar(props: NavProps) {
  const navigate = useNavigate();
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
      routeTitle: "Registry",
      routeLocation: "/registry",
      isLoggedIn: true,
    },
    {
      routeTitle: "RSVP",
      routeLocation: "/rsvp",
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

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  const viewableRouteWhenLoggedIn = () => {
    return routes.map((route) => {
      if (route.isLoggedIn && props.authenticatedUserID.length > 0) {
        return (
          <li key={route.routeTitle}>
            <Link
              to={route.routeLocation}
              className="flex-row hover:text-slate-500"
              onClick={ () =>
                route.routeTitle === "Sign Out"
                ? signOut(auth).then(() => {
                  navigate("/")
                })
                : navigate(route.routeLocation)
              }
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
      <nav className={`${stickyClass} bg-stone-200 fixed top-0 w-full z-100 py-5 px-10`}>
        <ul className="flex items-center justify-around p-5">
          {viewableRouteWhenLoggedIn()}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;