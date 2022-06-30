import { useEffect, useRef, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../customHook/useDarkmode";
import "./navbar.css";
const navbar = ["Home", "Products", "About Us", "Contact"];

const NavBar = ({ isMobile }) => {
   const [openMenu, setOpenMenu] = useState(false);
   const [isDarkMode, toggleDarkMode] = useDarkMode();
   const menuMobileRef = useRef(null);

   const handelMenu = () => {
      setOpenMenu(!openMenu);
      menuMobileRef.current?.classList.toggle("translate-x-[120%]");
      menuMobileRef.current?.classList.toggle("translate-x-0");
   };

   console.log("darkmode", isDarkMode);
   return (
      <nav className="flex items-center fixed z-10 right-0 left-0 top-0 px-4 py-[20px] lg:px-6">
         <div className="flex items-center gap-2">
            <div className="text-20 font-bold select-none cursor-pointer animate-wiggle">
               NerdCard
            </div>
            {isDarkMode ? (
               <FaMoon
                  size={"24px"}
                  color="#e9c46a"
                  className="cursor-pointer hover:opacity-[0.8] transition-all duration-150 animate-wiggle"
                  onClick={() => toggleDarkMode()}
               />
            ) : (
               <BsSunFill
                  size={"24px"}
                  color="#e9c46a"
                  className="cursor-pointer hover:opacity-[0.8] transition-all duration-150 animate-spin"
                  onClick={() => toggleDarkMode()}
               />
            )}
         </div>
         <ul className="ml-auto text-16 font-semibold ">
            {!openMenu ? (
               <HiOutlineMenu
                  size={"24px"}
                  className="cursor-pointer hover:hover:text-purple-600 transition-all duration-150 md:hidden"
                  onClick={handelMenu}
               />
            ) : (
               <MdOutlineClose
                  size={"24px"}
                  className="cursor-pointer hover:text-purple-600 transition-all md:hidden"
                  onClick={handelMenu}
               />
            )}

            <div
               className="md:hidden menu absolute z-[999] right-2  bg-purple-700 text-center text-13 text-white rounded-[10px] shadow-md transition-all translate-x-[120%]"
               ref={menuMobileRef}
            >
               {navbar?.length > 0 &&
                  navbar.map((option, index) => (
                     <li
                        className="cursor-pointer px-12 py-4 hover:bg-purple-600 w-full rounded-[10px] select-none"
                        key={index}
                     >
                        {option}
                     </li>
                  ))}
            </div>
            {/* {openMenu && (

            )} */}

            <div className="hidden md:flex items-center gap-10">
               {navbar?.length > 0 &&
                  navbar.map((option, index) => (
                     <li
                        className="text-14 text-semibold hover:text-purple-500 transition-all duration-500 cursor-pointer last:ml-28 select-none"
                        key={index}
                     >
                        {option}
                     </li>
                  ))}
            </div>
         </ul>
      </nav>
   );
};

export default NavBar;
