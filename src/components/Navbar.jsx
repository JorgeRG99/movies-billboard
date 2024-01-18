import { Link } from "react-router-dom";
import { MainLogo } from "./Icons/MainLogo";
import { WEB_ROUTES } from "../config";

export function Navbar() {
  return (
    <nav className="p-[1rem] bg-primary flex gap-4 items-center text-secondary fixed top-0 z-50 w-full">
      <Link to={WEB_ROUTES.home}>
        <MainLogo />
      </Link>
      <p className="font-semibold font-poppins text-[1.3em]">MOVIE BILLBOARD</p>
    </nav>
  );
}
