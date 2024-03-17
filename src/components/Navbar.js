import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  toggleSidebar,
  setSearchSuggestion,
} from "../utils/appSlice";
import { useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import axios from "axios";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);
  const searchVideo = () => {
    dispatch(setCategory(input));
    //setInput("");
  };

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      //console.log(res.data);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(()=>{    //debouncing
      showSuggestion();
    },200)
   
    return()=>{
      clearTimeout(timer);
    }
  }, [input]);

  //console.log(open)
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] bg-white">
      <div className=" flex w-[96%] justify-between items-center py-3">
        <div className="flex items-center">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={toggleHandler}
            size={"24px"}
          />
          <img
            className="px-4 cursor-pointer"
            width={"115px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
            alt="yt_logo"
          />
        </div>
        <div className="flex w-[40%] items-center">
          <div className=" flex w-[100%] ">
            <input
              value={input}
              onFocus={openSuggestion}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className=" w-full outline-none py-2 px-4 border border-gray-400 rounded-l-full"
            />

            <button
              onClick={searchVideo}
              className="py-2 border border-gray-400 rounded-r-full px-4"
            >
              <CiSearch size={"24px"} />{" "}
            </button>
          </div>
          {suggestion && searchSuggestion.length !== 0 && (
            <div className=" absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
              <ul>
                {searchSuggestion.map((text, idx) => {
                  return (
                    <div className=" flex items-center px-4 hover:bg-gray-100">
                      <CiSearch size={"24px"} />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="flex w-[10%] justify-between items-center">
          <RiVideoAddLine size={"24px"} className="cursor-pointer" />
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <Avatar
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size={30}
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
