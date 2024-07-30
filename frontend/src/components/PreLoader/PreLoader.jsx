import React from "react";
import Lottie from "lottie-react";
import Loader from "../../assets/Animation - 1722327350049.json";

const PreLoader = () => {
  return (
    <div className="w-[100vw] h-[100vh]  flex flex-col justify-center items-center">
      <Lottie className="size-80" animationData={Loader} loop={true} />
      <p className=" font-marcellus text-sm text-metal">
        Loading
        <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
        <span className="inline-block animate-bounce" style={{ animationDelay: '75ms' }}>.</span>
        <span className="inline-block animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
      </p>
    </div>
  );
};

export default PreLoader;
