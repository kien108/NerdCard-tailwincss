import { useEffect, useState } from "react";

const useDarkMode = () => {
   const [isDarkMode, setDarkMode] = useState(
      () => localStorage.theme === "dark"
   );
   const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
   };

   useEffect(() => {
      const html = window.document.documentElement;

      if (isDarkMode) {
         html.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         html.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [isDarkMode]);

   return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
