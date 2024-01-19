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
        <p className="font-semibold font-poppins text-[1.3em]">
          MOVIE BILLBOARD
        </p>
      </div>

      <Link
        to={WEB_ROUTES.billboard}
        className="hover:line-through text-primary-violet"
      >
        BILLBOARD
      </Link>
    </nav>
  );
}
