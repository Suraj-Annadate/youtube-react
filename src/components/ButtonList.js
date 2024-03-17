import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/appSlice';

const buttonList = [
  "All",
  "Mixes",
  "Music",
  "Gaming",
  "Live",
  "JavaScript",
  "Coding",
  "News",
  "SQL",
  "Laptops",
  "Recently Added",
  "Cricket",
  "Technology",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) =>{
    if(active!==tag){
      dispatch(setCategory(tag));
      setActive(tag);
    }
    //alert(tag)

  }
  //console.log(active);
  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar my-1">
      {buttonList.map((buttonName, index) => {
        return (
          <div key={index}>
            <button onClick={()=>{videoByTag(buttonName)}} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} font-medium mx-2 px-4 rounded-lg`}>
              <span className=" whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
