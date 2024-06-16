import React, { useState } from "react";
import bgVideo from "../assets/beachVid.mp4";
import { locationData } from "../data";
import InputAuto from "./inputAuto";
import ModalWrapper from "./modalWrapper";

const Hero = () => {
  // maps the appropriate column to fields property
  const [selectedLocation,setSelectedLocation] = useState("")
  const getSelectedVal = (value) => {
    setSelectedLocation(value)
    onOpenModal();
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const getChanges = (value) => {
    // console.log(value);
  };
  return (
    <header className="w-screen h-screen relative">
      <video
        src={bgVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="text-white mb-2">First Class Travel</h1>
        <h2 className="text-white mb-4">Search Worldwide Locations</h2>
        <InputAuto
          label=""
          pholder="Search Destination"
          data={locationData.map((entry) => entry.value)}
          onSelected={getSelectedVal}
          onChange={getChanges}
          className="grow flex border p-1 rounded-t-lg text-black bg-white max-w-[700px] w-[80%] mx-auto outline-none"
        />
      </div>
      <ModalWrapper open={open} selectedLocation={selectedLocation} onClose={onCloseModal} />
    </header>
  );
};

export default Hero;
