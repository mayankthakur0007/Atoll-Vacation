import React, { useState } from "react";
import { locationData } from "../data";
import 'react-responsive-modal/styles.css';
import ModalWrapper from "./modalWrapper";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [selectedLocation,setSelectedLocation] = useState(locationData[0].value)
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <section className="container px-4 my-16 grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2  font-['Caveat'] text-2xl">
        <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase font-extrabold mb-4">
          luxury included vacations
        </h3>
        <p className="mb-10 text-gray-600 text-justify">
          Discover the world with us and embark on unforgettable journeys to the
          most breathtaking destinations. Whether you're seeking adventure in
          exotic lands, relaxation on pristine beaches, or cultural immersion in
          vibrant cities, our expertly curated travel experiences promise to
          create memories that last a lifetime. From personalized itineraries to
          exclusive deals, let us be your trusted guide in making your travel
          dreams come true. Adventure awaits—let's explore together!
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className="text-center">
            <h4 className="bg-gradient-to-r from-pink-600 via-purple-500 to-blue-400 inline-block text-transparent bg-clip-text uppercase font-extrabold mb-2">leading service</h4>
            <p className="uppercase text-gray-600">
              Leading the way in exceptional travel services, where your dream
              destinations become reality.
            </p>
          </div>
          <div className="text-center">
            <h4 className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text uppercase font-extrabold mb-2">automated booking</h4>
            <p className="uppercase text-gray-600">
              Book your next adventure in minutes with our fast and easy
              reservation system!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="border px-4 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-indigo-400 uppercase text-center">
          <p className="py-2 font-bold text-2xl ">get an additional 10% off</p>
          <p className="py-2 text-2xl">12 hours left</p>
          <p className="py-2 text-2xl text-black cursor-pointer">
            book now and save
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="destination">Destination</label>
          <select
            name="destinations"
            id="destination"
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
            className="block w-full p-2 border rounded"
          >
            {locationData.map((item) => (
              <option
                key={item.id}
                value={item.value}
              >
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="my-4">
          <label htmlFor="checkIn">Check-In</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            className="block w-full p-2 border rounded"
          ></input>
        </div>
        <div className="my-4">
          <label htmlFor="checkOut">Check-Out</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            className="block w-full p-2 border rounded"
          ></input>
        </div>
        <button
          onClick={() => {
            if (
              document.getElementById("checkIn").value == "" ||
              document.getElementById("checkOut").value == ""
            ) {
              return false;
            } else onOpenModal();
          }}
          className="btn"
        >
          Rates & Availabilities
        </button>
      </div>
      <div>
        <ModalWrapper
          open={open}
          selectedLocation={selectedLocation}
          onClose={onCloseModal}
        />
      </div>
    </section>
  );
};

export default Search;
