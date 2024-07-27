import { useState } from "react";
import { TbEyeClosed } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
// eslint-disable-next-line react/prop-types
const SignupForm = ({ setShowLogin }) => {
    const [viewPassword, setViewPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div   className="w-[100vw] h-[100vh] z-50 fixed top-0 flex items-center justify-center">
            <div className="w-full h-full backdrop-sepia-[.85] bg-slate-100 absolute opacity-90" ></div>
            <div className="h-full z-20 w-full flex flex-col items-center justify-center">
                <h3 className="text-4xl capitalize mb-8 font-marcellus">{isSignup ? 'Sign up' : 'Login'}</h3>
                <motion.form animate={{ y: [-500, 0] }}
                    transition={{ ease: "easeInOut", duration:0.5 }}
                    exit={{ y: [0,-500] }} className="border-2 border-dashed relative border-gray-300 p-8 w-80 bg-white shadow-lg rounded-lg">
                    <p onClick={() => { setShowLogin(false) }} className="absolute top-5 text-xl cursor-pointer text-metal font-extrabold right-5"><RxCross2 /></p>
                    {isSignup && (
                        <div className="flex flex-col gap-2 pb-4">
                            <label htmlFor="username" className="text-metal">Username</label>
                            <input required
                                type="text"
                                id="username"
                                name="username"
                                className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-2 pb-4">
                        <label htmlFor="email" className="text-metal">Email</label>
                        <input required
                            type="email"
                            id="email"
                            name="email"
                            className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
                        />
                    </div>
                    <div className="flex flex-col gap-2 pb-4">
                        <label htmlFor="password" className="text-metal">Password</label>
                        <div className="flex items-center">
                            <input required
                                type={viewPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full h-10 pl-2 text-metal border border-gray-300 rounded-md"
                            />
                            <div
                                className="ml-[-2rem] cursor-pointer"
                                onClick={() => setViewPassword(!viewPassword)}
                            >
                                {viewPassword ? <MdOutlineRemoveRedEye /> : <TbEyeClosed />}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full border bg-metal text-white font-bold py-2 rounded-md hover:bg-white hover:border hover:border-metal hover:text-metal transition duration-300"
                    >
                        {isSignup ? 'Sign Up' : 'Login'}
                    </button>
                    <p className="mt-4 text-center text-metal">
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSignup(!isSignup);
                            }}
                            className="text-dark-blue hover:underline"
                        >
                            {isSignup ? 'Sign in' : 'Sign up'}
                        </a>
                    </p>
                </motion.form>
            </div>
        </div>
    );
};

export default SignupForm;
