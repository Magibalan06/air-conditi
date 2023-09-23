"use client"
import Header from "../../components/header"
import {PiEqualsBold} from "react-icons/pi"
import {BiSolidCart} from "react-icons/bi"
import {IoCloseOutline} from "react-icons/io5"
import { useState } from "react"

export default function Home() {

   const [headerVal, setHeaderVal] = useState(null)

  const [openNav, setOpenNav] = useState(false)

  return (
    <div className="relative">
      <Header/>
      {/* <div style={{backgroundColor: "#0057FF"}}>
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
      </div> */}
      <div className="border lg:w-9/12 w-11/12 m-auto">
        <div className="flex justify-around mt-5 xl:flex hidden">
          <p className="cursor-pointer py-3 font-semibold text-xl">Conditioning</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(1)} onMouseLeave={() => setHeaderVal(null)}>Demos</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(2)} onMouseLeave={() => setHeaderVal(null)}>About Us</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(3)} onMouseLeave={() => setHeaderVal(null)}>Services</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(4)} onMouseLeave={() => setHeaderVal(null)}>Pricing</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(5)} onMouseLeave={() => setHeaderVal(null)}>Projects</p>
          <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(6)} onMouseLeave={() => setHeaderVal(null)}>All Pages</p>
          <BiSolidCart className="cursor-pointer my-3 text-2xl" style={{color: "#0057FF"}} />
          <div className="cursor-pointer">
            <p className="border touchBtn rounded-full px-7 py-3 text-lg">Get in Touch</p>
          </div>
        </div>

        <div className="flex justify-between px-10 mt-5 xl:hidden flex">
          <p className="cursor-pointer py-3 font-semibold text-xl">Conditioning</p>
          <div className="flex">
            <BiSolidCart className="cursor-pointer my-3 mr-5 text-2xl" style={{color: "#0057FF"}} />
            {openNav ? 
              <IoCloseOutline className="mt-3 text-xl" onClick={() => setOpenNav(!openNav)} />
            :
              <PiEqualsBold className="mt-3 text-xl" onClick={() => setOpenNav(!openNav)} />
            }
          </div>
        </div>

        {openNav ? 
          <div className={`justify-around xl:hidden absolute z-30 bg-white w-10/12 px-5 py-4 top-0 left-0 transition delay-500 absolute ${openNav ? "left-0": "left-[-1090px]"}`}>
            <div className="flex justify-between">
              <p className="cursor-pointer py-3 font-semibold text-xl mb-4">Conditioning</p>
              <IoCloseOutline className="mt-3 text-2xl" onClick={() => setOpenNav(false)} />
            </div>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(1)} onMouseLeave={() => setHeaderVal(null)}>Demos</p>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(2)} onMouseLeave={() => setHeaderVal(null)}>About Us</p>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(3)} onMouseLeave={() => setHeaderVal(null)}>Services</p>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(4)} onMouseLeave={() => setHeaderVal(null)}>Pricing</p>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(5)} onMouseLeave={() => setHeaderVal(null)}>Projects</p>
            <p className="cursor-pointer py-3 text-lg text-gray-500 hover:text-blue-400" onMouseEnter={() => setHeaderVal(6)} onMouseLeave={() => setHeaderVal(null)}>All Pages</p>
            <div className="cursor-pointer w-40">
              <p className="border touchBtn rounded-full px-7 py-3 text-lg">Get in Touch</p>
            </div>
          </div>
        :
          null
        }

        <div className="flex flex-row-reverse flex-wrap justify-between">
          <div className="m-auto relative">
            {/* <img src="https://assets.website-files.com/63fcdfb364b3e7326f0f6a79/63fdd8734486a56a441e2a03_Blue%20Bg%20Banner.png" alt="" className="" /> */}
            <img src="https://assets.website-files.com/63fcdfb364b3e7326f0f6a79/63fdd5a1fe46e419650fb6f1_Man%20Image.png" alt="" className="" />
          </div>
          <div className="lg:w-7/12 w-11/12 mt-24 pl-7 pb-32 m-auto">
            <p className="text-lg font-medium scrolling-text" style={{color: "#0057FF"}}>#1 HVAC System Services in USA</p>
            <p className="md:text-6xl sm:text-4xl text-2xl scrolling-text font-bold mt-5" style={{color: "#00205c", lineHeight: "110%"}}>Air conditioning system for your home and office comfort</p>
            <p className="sm:text-lg text-base font-medium mt-7 scrolling-text" style={{color: "#5f6e89"}} >Customers worldwide rely on Air Conditioning{`'`}s innovative solutions and services to meet their most essential needs and overcome their biggest challenges in various settings.</p>
            <div className="flex flex-wrap mt-10 scrolling-text">
              <div className="cursor-pointer mb-4 mr-4">
                <p className="border servicesBtn rounded-full px-7 py-3 text-lg">Services</p>
              </div>
              <div className="cursor-pointer mb-4 scrolling-text">
                <p className="border touchBtn rounded-full px-7 py-3 text-lg">Get in Touch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-w-7xl m-auto my-28">
        <div className="m-auto">
          <div className="lg:w-80 w-11/12 mb-6 mx-4 mt-6">
            <div className="imageContainer scrolling-text">
              <img className="cursor-pointer" src="https://assets.website-files.com/63fcdfb364b3e7ab290f6a81/64351ee8ccb1e5f0ab004fc6_gallery%20image%204.jpg" alt="" />
            </div>
            <p className="text-2xl my-4 font scrolling-text-bold" style={{color: "#00205c"}}>Heating</p>
            <p className="font-medium text-lg scrolling-text" style={{color: "#5f6e89", lineHeight: "150%"}}>Heating systems typically use a furnace, boiler, or heat pump to generate heat and distribute it throughout a building.</p>
            <p className="mt-4 text-lg scrolling-text font-medium cursor-pointer " style={{color :"#0057ff"}}>Learn More {">"}</p>
          </div>
        </div>
        <div className="m-auto">
          <div className="lg:w-80 w-11/12 mb-6 mx-4 mt-6">
            <div className="imageContainer scrolling-text">
              <img className="cursor-pointer" src="https://assets.website-files.com/63fcdfb364b3e7ab290f6a81/64351d83fd7e73d4590fccaf_gallery%20image%202.jpg" alt="" />
            </div>
            <p className="text-2xl my-4 font-bold" scrolling-text style={{color: "#00205c"}}>Ventilation</p>
            <p className="font-medium text-lg scrolling-text" style={{color: "#5f6e89", lineHeight: "150%"}}>Air Conditioning Ventilation involves the movement of fresh outdoor air into and stale indoor air out of a building or enclosed space.</p>
            <p className="mt-4 text-lg scrolling-text font-medium cursor-pointer " style={{color :"#0057ff"}}>Learn More {">"}</p>
          </div>
        </div>
        <div className="m-auto">
          <div className="lg:w-80 w-11/12 mb-6 mx-4">
            <div className="imageContainer scrolling-text">
              <img className="cursor-pointer" src="https://assets.website-files.com/63fcdfb364b3e7ab290f6a81/64351e5115d33eda6625437a_gallery%20image%203.jpg" alt="" />
            </div>
            <p className="text-2xl my-4 font-bold" scrolling-text style={{color: "#00205c"}}>Air Conditioning</p>
            <p className="font-medium text-lg scrolling-text" style={{color: "#5f6e89", lineHeight: "150%"}}>Air Conditioning Systems are used to regulate the temperature, humidity, and air quality in indoor environments.</p>
            <p className="mt-4 text-lg scrolling-text font-medium cursor-pointer" style={{color :"#0057ff"}}>Learn More {">"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-w-6xl m-auto mb-40">
        <div className="m-auto">
          <img src="https://assets.website-files.com/63fcdfb364b3e7326f0f6a79/63fdfaca72d28c2057790eb3_Company%20Image.webp" alt="" />
        </div>
        <div className="md:w-1/2 w-11/12 sm:pl-12 pl-5 mt-10">
          <p className="sm:text-5xl text-4xl font-bold" style={{color :"#00205c", lineHeight: "130%"}}>We are air conditioning system company</p>
          <p className="text-lg font-medium my-10" style={{color :"#5f6e89"}}>Innovative and customized to your needs, the Air Conditioning 128 Ultimate Comfort System creates the ideal home environment for you.</p>
          <div className="flex my-5">
            <p className="check-box" />
            <p className="ml-5 font-bold text-2xl" style={{color :"#00205c"}}>Financing Available</p>
          </div>
          <div className="flex my-5">
            <p className="check-box" />
            <p className="ml-5 font-bold text-2xl" style={{color :"#00205c"}}>100% Successful Projects</p>
          </div>
          <div className="flex my-5">
            <p className="check-box" />
            <p className="ml-5 font-bold text-2xl" style={{color :"#00205c"}}>Online Support</p>
          </div>
          <div className="flex my-5">
            <p className="check-box" />
            <p className="ml-5 font-bold text-2xl" style={{color :"#00205c"}}>Easy to use</p>
          </div>
        </div>
      </div>

    </div>
  )
}
