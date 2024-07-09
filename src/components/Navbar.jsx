import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";
import mail from '../assets/mail.png';
import phone from "../assets/phone.png";
import ModalWrapper from "./modalWrapper";
import { AppContext } from "../context";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'

const Navbar = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  const {setPackage} = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [selectedLocation,setSelectedLocation] = useState()
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    toggleNavIsShown();
  };
  return (
    <nav className="flex justify-between md:justify-center bg-black items-center h-20 px-4 z-10 w-full text-white">
      <img
        className="max-w-full max-h-full aspect-[3/2] object-contain "
        src={logo}
      />
      <ul className="hidden rounded-2xl md:flex">
        <li>
          <div className="dropdown">
            <button
              onClick={() => setPackage("")}
              className="dropbtn font-bold"
            >
              Home
              <i className="fa fa-caret-down"></i>
            </button>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn font-bold">
              Domestic
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Himachal Pradesh
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Rajasthan
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Kerela
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Leh
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn font-bold">
              International
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Cordelia Cruise
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Dubai
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Thailand
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Singapore
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn font-bold">
              Beaches
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Bali
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Maldives
              </a>
              <a
                onClick={(e) => {
                  setSelectedLocation(e.target.innerText.toUpperCase());
                  onOpenModal();
                }}
              >
                Mauritius
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="hidden md:flex">
        <div className="flex px-2">
          <img className="rounded-t-lg px-2" src={phone} alt="" />
          <h3>+91-7973358026</h3>
        </div>
        <div className="flex">
          <img className="rounded-t-lg" src={mail} alt="" />
          <h3>atollvacations@gmail.com</h3>
        </div>
      </div>
      <div className="hidden md:flex">
        <div>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=61562134552280&mibextid=ZbWKwL"
            className="mx-4"
            url="www.facebook.com"
          />
        </div>
        <div>
          <SocialIcon
            href="https://www.instagram.com/atollvacations?igsh=MTNrdHg4b3Brc3BseA=="
            className="mx-4"
            url="www.instagram.com"
          />
        </div>
      </div>
      {!navIsShown && (
        <>
          <div className="px-4"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
            onClick={toggleNavIsShown}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </>
      )}
      {navIsShown && (
        <div className="md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6">
          <div className="flex justify-between">
            <h1>Atoll Vacations</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={toggleNavIsShown}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-col mb-4">
            <li>
              <div className="dropdown">
                <button
                  onClick={() => setPackage("")}
                  className="dropbtn1 font-bold"
                >
                  Home
                  <i className="fa fa-caret-down"></i>
                </button>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn1 font-bold">
                  Domestic
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Himachal Pradesh
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Rajasthan
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Kerela
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Leh
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn1 font-bold">
                  Beaches
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Bali
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Maldives
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Mauritius
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn1 font-bold">
                  International
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Cordelia Cruise
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Dubai
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Thailand
                  </a>
                  <a
                    onClick={(e) => {
                      setSelectedLocation(e.target.innerText.toUpperCase());
                      onOpenModal();
                    }}
                  >
                    Singapore
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <div className="flex mb-2">
              <img className="rounded-t-lg px-2" src={phone} alt="" />
              <h3>+91-7973358026</h3>
            </div>
            <div className="flex">
              <img className="rounded-t-lg px-2" src={mail} alt="" />
              <h3>atollvacations@gmail.com</h3>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61562134552280&mibextid=ZbWKwL"
                className="mx-2 mt-2"
                url="www.facebook.com"
              />
            </div>
            <div>
              <SocialIcon
                href="https://www.instagram.com/atollvacations?igsh=MTNrdHg4b3Brc3BseA=="
                className="mx-2 mt-2"
                url="www.instagram.com"
              />
            </div>
          </div>
        </div>
      )}
      <ModalWrapper
        open={open}
        selectedLocation={selectedLocation}
        onClose={onCloseModal}
      />
    </nav>
  );
};

export default Navbar;
