import Spline from "@splinetool/react-spline";
import wave from "../../assets/wave.svg";
import { NavLink } from "react-router-dom";
import LottieSrc from "../../assets/Hng6iSnZ74.json";
import Lottie from "lottie-react";
import {motion, useTransform} from "framer-motion"
import { useTime } from "framer-motion"

export default function Header() {
    const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: true});

  return (
    <div className="h-[80vh] z-0 flex relative overflow-hidden  max-sm:flex-col max-sm:h-[100vh] select-none">
      {/* Position the SVG here before other elements */}
      <motion.img initial={{y:-500 }} animate={{y:0,opacity:1}} transition={{duration:1}} src={wave} className="absolute  mix-blend-difference -top-10 z-0" alt="Wave SVG" />

      {/* Your circles and other elements */}
      <motion.div style={{ rotate }} className="circle w-[50rem] h-[50rem] bg-white absolute rounded-[50%] opacity-10 left-[-45vh] z-10"></motion.div>
      <div className="circle w-[5rem] h-[5rem] bg-white absolute rounded-[50%] opacity-10 right-[-10px] z-10"></div>
      <div className="circle w-[5rem] h-[5rem] bg-white absolute rounded-[50%] opacity-10 right-[3rem] top-[20px] z-10"></div>

      {/* Main content */}
      <Lottie className="rotate-120 reflection" animationData={LottieSrc} loop={true} />
      <div className="relative w-[70vw] flex flex-col gap-0 items-center justify-stretch max-sm:w-[100%]  z-20">
        <motion.p  initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} className=" text-white text-shadow-lg text-9xl    text-shadow-lg mt-52 mb-0 font-Rubik mix-blend-difference max-sm:text-center max-sm:text-6xl max-sm:mt-[5%] pt-0 p-0 uppercase max-sm:text-metal ">
          Hisabi
        </motion.p>
        <motion.p initial={{x:-100}} animate={{x:0}} transition={{duration:0.5}} className="text-metal text-4xl bg-white ">
          Expense Tracker{" "}
        </motion.p>

        <p className="mt-[1vw] text-metal">
          Simple way to manage personal finances
        </p>

        <NavLink
          to="/dashboard"
          className="font-bold mt-6 text-metal ease delay-0 bg-white hover:bg-metal hover:text-white border-metal border-2 transition-all ease-in-out capitalize rounded-md p-6 pt-2 pb-2"
        >
          Get started
        </NavLink>
      </div>

      {/* Spline component */}
    </div>
  );
}
