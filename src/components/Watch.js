import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //console.log("video id is", videoId);
  const dispatch = useDispatch()

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      //const resData = await res.json();
      //console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };


  const sendMessage =()=>{
    dispatch(setMessage({
      name:"Virat",
      message:input,
    }))
    setInput("")
  }

  useEffect(() => {
    getSingleVideo();
  });
  //console.log(singleVideo);

  return (
    <div className=" flex ml-4 w-[100%] mt-2">
      <div className="flex w-[88%]">
        <div>
          <iframe
            width="700"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold mt-2 text-medium w-[95%]">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex ">
                <Avatar
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  size={30}
                  round={true}
                  className="cursor-pointer"
                />
                <h1 className="font-bold ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center px-[10%] mr-2">
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 mr-2 rounded-full">
                <AiOutlineLike size={"20px"} className="mr-5" />
                <AiOutlineDislike size={"20px"} />
              </div>
              <div className=" flex items-center cursor-pointer bg-gray-200 px-4 py-2 mr-2 rounded-full">
                <PiShareFat size={"20px"} className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <GoDownload size={"20px"} className="mr-2" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] border border-gray-300 ml-8 rounded-lg h-fit p-4">
          <div className="flex justify-between items-center">
            <h1>Top Watch</h1>
            <BsThreeDotsVertical />
          </div>
          <div className=" overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat/>
          </div>
          <div className="flex items-center justify-between border-t p-2">
            <div className="flex items-center w-[90%]">
              <div>
                <Avatar
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  size={30}
                  round={true}
                  className="cursor-pointer"
                />
              </div>
              <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className=" border-b border-gray-300 outline-none ml-2"
                type="text"
                placeholder="Send message"
                width={"auto"}
              />
              <div className="cursor-pointer py-2 ">
              <LuSendHorizonal onClick={sendMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
