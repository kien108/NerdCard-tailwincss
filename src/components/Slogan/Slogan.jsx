import Cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
   return (
      <section className="relative text-36 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
         <div className="text-center select-none md:col-span-1 md:col-start-2">
            <p className="">
               Earn <span className="text-purple-500">More</span>
            </p>
            <p className="">Pay Less</p>
            <button className="btn md:text-24 md:px-8 md:py-[8px] text-white">
               Start
            </button>
         </div>
         <div className="mt-[69px] select-none md:absolute md:right-[-6rem] lg:right-[-5rem] flex items-center justify-center">
            <img src={Cards} alt="cards" />
         </div>
      </section>
   );
};

export default Slogan;
