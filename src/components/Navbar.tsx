import { signOut } from "@firebase/auth"
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";

interface NavProps {
  authenticatedUserID: string;
}

function Navbar(props: NavProps) {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    // {
    //   routeTitle: "RSVP",
    //   routeLocation: "/rsvp",
    //   isLoggedIn: true,
    // },
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
      windowHeight > 500 ? setStickyClass('sticky top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  const viewableRouteWhenLoggedIn = () => {
    return routes.map((route) => {
      if (route.isLoggedIn && props.authenticatedUserID.length > 0) {
        return (
          <li key={route.routeTitle}>
            <Link
              to={route.routeLocation}
              className="flex-row text-stone-600 hover:text-stone-900"
              onClick={ () => {
                route.routeTitle === "Sign Out"
                ? signOut(auth).then(() => {
                  navigate("/")
                })
                : navigate(route.routeLocation) ;
                setIsNavOpen(false)
              }}
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
              className="flex-row hover:text-stone-900"
              onClick={() => setIsNavOpen(false)}
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
      <nav className={`${stickyClass} bg-stone-200 sticky top-0 w-full z-50 py-5 px-10 text-xs`}>
        <div className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" 
            onClick={ () => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>
        
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          </div>
          <ul className="flex flex-col items-center text-xl justify-between">
          {viewableRouteWhenLoggedIn()}
          </ul>
          </div>
        </div>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex lg:items-center lg:justify-around">
        {viewableRouteWhenLoggedIn()}
        </ul>
      </nav>

    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        background: rgb(231 229 228);
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index:10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      `}
    </style>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;