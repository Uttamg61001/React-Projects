import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ChatItem from "../components/ChatItem";
import '../App.css';


const chatitems = [
  {
    image: "./Avatar.png",
    heading: "Chat-Box",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "",
    active: true,
  },
  {
    image: "./Avatar2.png",
    heading: "Chat-Box",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "3",
    active: false,
  },
  {
    image: "./Avatar3.png",
    heading: "Chat-Box",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "",
    active: true,
  },
  {
    image: "./Avatar4.png",
    heading: "Chat-GPT",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "4",
    active: true,
  },
  {
    image: "./Avatar5.png",
    heading: "Chat-ong",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "1",
    active: false,
  },
  {
    image: "./Avatar6.png",
    heading: "Chat-G",
    para: "Here is a chat box",
    time: "8:09 pm",
    messages: "2",
    active: true,
  },
];

function InboxSection({selectedItem ,setSelectedItem}) {
  console.log(selectedItem);
  return (
  <div className= {`bg-white w-full sm:w-[455px] relative ${Object.keys(selectedItem).length>0 ? "sideBarhidden" : "sideBarBlock"}`}>
      <div className="flex items-center justify-between p-6 border-b-2 border-black-25">
        <div className="bg-[#FBBC05] rounded-full p-1">
          <MdKeyboardDoubleArrowLeft size={30} color="blue" />
        </div>
        <button className="bg-[#394EE1] px-3 py-1 text-lg text-white rounded-md">
          Inbox
        </button>
      </div>
      {chatitems.map((item, index) => {
        return (
          <ChatItem
            key={index}
            selected={selectedItem}
            setSelected={setSelectedItem}
            item = {item}
          />
        );
      })}
    </div>
  );
}

export default InboxSection;
