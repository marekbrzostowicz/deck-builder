import logo from "../../assets/logo.png";
import { TbCardsFilled } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <nav
      className="w-full h-32 lg:h-22 bg-gradient-to-tl from-purple-950 via-indigo-950 to-purple-950 border border-purple-600 rounded-3xl flex flex-col
          lg:flex-row items-center justify-evenly lg:justify-between px-26"
    >
      <img src={logo} alt="" className="w-28" />
      <div className="flex items-center gap-24 text-indigo-300 font-black text-md">
        <div className="flex items-center gap-1">
          <TbCardsFilled size={23} className="text-indigo-500" />
          <p className="text-xl">Decks</p>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineLogout size={23} className="text-indigo-500" />
          <p className="text-xl">Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
