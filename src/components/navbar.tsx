import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import accountIcon from "../assets/accountAlert.svg";
import { Heart, Search } from "akar-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation(); // Get current location

  return (
    <div className="flex py-[1.875rem] pl-[3.125rem] pr-[6.25rem] items-center justify-between ">
      <div className="flex space-x-1 ">
        <img src={logo} alt="" className=" w-[3.125rem] " />
        <h1 className=" font-bold text-[2.125rem] ">Furniro</h1>
      </div>
      <div className="hidden md:block space-x-[4.6875rem] ">
        {links.map((link) => (
          <Link
            to={link.path}
            className={
              location.pathname === link.path
                ? "text-primary font-bold hover:text-primary/90 ease-in-out transition "
                : "text-[#000000] font-normal hover:text-primary/90 ease-in-out transition "
            }
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className=" space-x-[2.8125rem] items-center hidden md:flex">
        <div className="hover:bg-primary/30 p-2 ease-out transition rounded-full ">
        <img src={accountIcon} alt="" className=" cursor-pointer  size-6 " />
        </div>
        <div className="hover:bg-primary/30 p-2 ease-out transition rounded-full ">
        <Heart size={24} className=" cursor-pointer  " />
        </div>
        <div className="hover:bg-primary/30 p-2 ease-out transition rounded-full ">
        <Search size={24} className=" cursor-pointer  " />
        </div>
        <div className="hover:bg-primary/30 p-2 ease-out transition rounded-full ">
        <AiOutlineShoppingCart size={24} className=" cursor-pointer  " />
        </div>
      </div>
    </div>
  );
}
