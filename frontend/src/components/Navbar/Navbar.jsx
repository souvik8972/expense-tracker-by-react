/* eslint-disable react/prop-types */
import { GiTakeMyMoney } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setShowLogin }) => {
  let token=false
  return (
    <div className="h-[10vh] w-full flex justify-between items-center max-sm:mb-0 bg-metal text-white ">
    <div className="  ml-[5vw]">
              <h3 className=" flex text-3xl uppercase font-marcellus text-shadow-lg  text-white"><GiTakeMyMoney />Hisabi</h3>
    </div>
    <div className="mr-[5vw] ">
        {!token ? <button onClick={() => { setShowLogin(true) }} className="font-bold text-metal bg-white hover:bg-light-purple hover: capitalize rounded-md p-5 pt-1 pb-2 ">Sign up</button> : <div  className="font-bold text-white text-3xl hover: capitalize rounded-md p-5 pt-1 pb-2 "><CgProfile/></div>}
            
    </div>
    
      
    </div>
  )
}

export default Navbar
