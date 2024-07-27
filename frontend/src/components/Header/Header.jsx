import Spline from '@splinetool/react-spline';
import wave from "../../assets/wave.svg";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='h-[90vh] z-0 flex relative overflow-hidden max-sm:flex-col'>
            {/* Position the SVG here before other elements */}
            <img src={wave} className='absolute top-0 z-0' alt="Wave SVG" />

            {/* Your circles and other elements */}
            <div className="circle w-[50rem] h-[50rem] bg-white absolute rounded-[50%] opacity-10 left-[-45vh] z-10"></div>
            <div className="circle w-[5rem] h-[5rem] bg-white absolute rounded-[50%] opacity-10 right-[-10px] z-10"></div>
            <div className="circle w-[5rem] h-[5rem] bg-white absolute rounded-[50%] opacity-10 right-[3rem] top-[20px] z-10"></div>

            {/* Main content */}
            <div className='relative w-[70vw] flex flex-col items-center max-sm:w-[100%] z-20'>
                <h1 className='text-[9rem] font-marcellus text-white text-shadow-lg  mt-[20%] max-sm:text-center max-sm:text-6xl max-sm:mt-[5%]'>Hisabi</h1>
                <h1 className='text-metal top-[18vw]  max-sm:text-3xl max-sm:relative max-sm:top-0 font-marcellus text-[3rem] absolute'>Expense Tracker </h1>
                <p className='mt-[1vw] text-metal'>Simple way to manage personal finances</p>

                <NavLink to="/dashboard" className="font-bold mt-6 text-metal ease delay-0 bg-white hover:bg-metal hover:text-white border-metal border-2 transition-all ease-in-out capitalize rounded-md p-6 pt-2 pb-2">
                    Get started
                </NavLink>
            </div>

            {/* Spline component */}
            <Spline
                scene="https://prod.spline.design/98mnzor6NKryxufS/scene.splinecode"
                className='relative z-10'
            />
        </div>
    );
}
