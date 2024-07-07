import React, { useContext } from 'react'
import { locationData } from "../data";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { AppContext } from '../context';
import { Toaster } from 'react-hot-toast';

const ModalWrapper = (props) => {
  // const {setLocation} = useContext(PackageContext);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Modal
        open={props.open}
        onClose={() => {
          props.onClose();
        }}
        classNames={{
          modal: "md:w-108",
          closeIcon: "fill-white"
        }}
        center
      >
        <div className="flex font-['Caveat'] flex-col md:flex-row gap-2">
          {locationData
            .find((e) => e.value == props.selectedLocation)
            ?.packages.map((ele) => (
              <div
                key={ele.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img className="rounded-t-lg" src={ele.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-white">
                      {ele.plan}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-black dark:text-white">
                    ₹{ele.price} per person
                  </p>
                  <ul className="points">
                    {ele?.points.map((p) => (
                      <>
                        <li className="font-normal font-3xl text-black dark:text-white">
                          {p.toUpperCase()}
                        </li>
                      </>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setLocation(ele);
                    }}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get Quotation
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWrapper