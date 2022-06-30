import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import Content from "./components/Content/Content";
import { useEffect, useState } from "react";

function App() {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
   });
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handelSize = () => {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };
      window.addEventListener("resize", handelSize);
      handelSize();

      return () => window.removeEventListener("resize", handelSize);
   }, []);

   useEffect(() => {
      if (windowSize.width < 500) {
         setIsMobile(true);
      } else {
         setIsMobile(false);
      }
   }, [windowSize]);

   return (
      <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:text-white dark:from-purple-900 dark:to-purple-700 from-pink-500 to-blue-300 text-black scroll-w-[10px]">
         <NavBar isMobile={isMobile} />
         <Slogan />
         <Content />
      </div>
   );
}

export default App;
