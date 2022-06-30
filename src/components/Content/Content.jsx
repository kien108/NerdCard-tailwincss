import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";

const contentChecks = [
   "Card reports sent to your phone every weeks",
   "No extra charge",
   "Set spending limits and restrictions",
];

const cards = [
   {
      icon: <FaUser size={"24px"} />,
      content: {
         title: "Customers",
         value: "10245",
      },
   },
   {
      icon: <BsFillCreditCardFill size={"24px"} />,
      content: {
         title: "Cards Issued",
         value: "12045",
      },
   },
];

const Content = () => {
   const customer = useSpring({
      customers: Math.floor(Math.random() * 20000) + "",
      from: { customers: "0" },
   });

   return (
      <section className="md:grid md:grid-cols-4 md:items-center md:place-content-center md:px-[40px]">
         <div className="card md:m-0 md:col-span-1  md:py-[30px]">
            {cards?.length > 0 &&
               cards.map((card, index) => (
                  <div className="flex items-center gap-8" key={index}>
                     {card.icon}
                     <div className="flex flex-col items-center gap-1">
                        <span className="text-26">
                           <animated.div>
                              {customer.customers.to((val) => Math.floor(val))}
                           </animated.div>
                        </span>
                        <span className="text-13 font-semibold">
                           {card.content.title}
                        </span>
                     </div>
                  </div>
               ))}
         </div>
         <div className="text-13 flex flex-col w-full mt-[90px] px-[30px] font-semibold md:mt-0 md:px-0 md:text-16 md:col-span-2 md:col-start-3">
            {contentChecks?.length > 0 &&
               contentChecks.map((content, index) => (
                  <div className="content-check md:last:mb-0" key={index}>
                     <img
                        src={checkIconMobile}
                        alt="iconMobile"
                        className="fill-slate-500"
                     />
                     <p>{content}</p>
                  </div>
               ))}
         </div>
      </section>
   );
};

export default Content;
