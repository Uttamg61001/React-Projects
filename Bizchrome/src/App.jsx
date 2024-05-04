import { useState } from "react";
import ChatSection from "./pages/ChatSection";
import InboxSection from "./pages/InboxSection";
import VideoModel from "./components/VideoModel";
import CallModel from "./components/CallModel";

function App() {
  const [selected, setSelected] =  useState({});

  return (
    <>
      <div className=" min-h-screen flex w-full ">
{/*         
        <InboxSection selectedItem={selected} setSelectedItem={setSelected} />
        <ChatSection  selectedItem={selected} setSelectedItem={setSelected}/> */}
        <VideoModel/>
        {/* <CallModel/> */}
      </div>
    </>
  );
}

export default App;
