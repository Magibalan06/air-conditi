import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"

function Header() {
  return (
    <div style={{backgroundColor: "#0057FF"}}>
      <div className="flex flex-wrap sm:justify-center justify-left text-white font-medium text-lg py-2 sm:px-12 px-5 m-auto ">
        <div className="flex">
          <CiLocationOn className="my-1 mr-2 w-8 h-8 sm:w-6 sm:h-6"/>
          <p className="md:mr-14 mr-0 mt-0.5">4140 Parker Rd. Allentown, New Mexico 31134</p>
        </div>
        <div className="flex sm:mt-0.5 mt-2">
          <BsTelephone className="mt-1 mr-2" />
          <p className="cursor-pointer hover:opacity-80 transition duration-200">(239) 555-0108</p>
          <p className="ml-4 cursor-pointer hover:opacity-80 transition duration-200">(406) 555-0120</p>
        </div>
      </div>
    </div>
  )
}

export default Header
