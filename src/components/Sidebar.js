import React from 'react'
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { LuUserSquare2 } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
//import { UseSelector } from 'react-redux';
//import store from '../utils/store';

const sideBarItem = [
    {
        icons: <CiHome size={"24px"}/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"}/>,
        title:"Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"}/>,
        title:"Subscriptions"
    },
    {
        title:"You >"
    },
    {
        icons: <LuUserSquare2 size={"24px"}/>,
        title: "Your Channel"
    },
    {
        icons: <FaHistory size={"24px"}/>,
        title:"History"
    },
    {
        icons: <GoVideo  size={"24px"}/>,
        title:"Your Videos"
    },
    {
        icons: <FaHistory size={"24px"}/>,
        title: "Watch later"
    },
    {
        icons: <BiLike  size={"24px"}/>,
        title:"Liked Videos"
    },
    {
        title:"SubScriptions"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Sid"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Techno Gamer"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Javascript"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"JavaTPoint"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Bollywood Songs"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Mortal"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Apna College"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Shraddha Khapra"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Code With Harry"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"SQL Masters"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Fail Game"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"T-series"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Ezsnippet"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"NDTV"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"BBC"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Job Update"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Coder Dost"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"MBA Pathshala"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Jos Talk"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Motivational speech"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Tech Dose"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Vex"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Timeliners"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"What if"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Guidly"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Studified"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Codefusion"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Technical Guruji"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Crashcourse"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Fraz"
    },
    {
        icons: <FaRegCircleUser  size={"24px"}/>,
        title:"Striver"
    },
    
]

const Sidebar = () => {
    //const open = false;
    const open = useSelector((store)=>store.app.open)
  return (
    <div className={`relative left-0 ${open ? "w-[20%]" : "w-[8%]"}  p-5 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden bg-white`}>
        {
            sideBarItem.map((item,index)=>{
                return(
                    //console.log(item)
                <div key={index} className="flex my-3 ml-2">
                    {item.icons}
                    <p className ={`ml-5 ${open? "": 'hidden'}`}>{item.title}</p>
                </div>
                )
            })
        }
      
    </div>
  )
}

export default Sidebar