import { MainLogo } from "../assets/Icons/MainLogo";

export function Navbar() {
  return (
    <nav className="p-[1rem] bg-primary flex gap-4 items-center text-secondary">
      <MainLogo />
      <p className="font-semibold font-poppins text-[1.3em]">
        MOVIES BILLBOARD
      </p>
    </nav>
  );
}
