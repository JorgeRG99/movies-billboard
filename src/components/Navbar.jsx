import { Link } from "react-router-dom";
import { MainLogo } from "./Icons/MainLogo";
import { WEB_ROUTES } from "../config";

export function Navbar() {
  return (
    <nav className="p-[1rem] bg-primary flex justify-between items-center text-secondary fixed top-0 z-50 w-full">
      <div className="flex gap-4 items-center">
        <Link to={WEB_ROUTES.home}>
          <MainLogo />
        </Link>
        <p className="font-semibold font-poppins text-[1.3em] hidden sm:block">
          MOVIE BILLBOARD
        </p>
      </div>

      <div className="space-x-6">
        <Link
          to={WEB_ROUTES.billboard}
          className="hover:line-through text-primary-violet"
        >
          BILLBOARD
        </Link>
        <Link
          to={WEB_ROUTES.yourTickets}
          className="hover:line-through text-primary-violet"
        >
          YOUR TICKETS
        </Link>
        <Link
          to={WEB_ROUTES.favorites}
          className="hover:line-through text-primary-violet"
        >
          FAVORITES
        </Link>
      </div>
    </nav>
  );
}
