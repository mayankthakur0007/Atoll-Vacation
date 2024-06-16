import React, { useState } from 'react'
import { locationData } from "../data";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ModalWrapper = (props) => {
  const [formOpen, setOpenForm] = useState(false)
  return (
    <div>
    <div><Toaster/></div>
      <Modal
        open={props.open}
        onClose={() => {
          props.onClose();
          setOpenForm(false);
        }}
        center
      >
        {!formOpen && (
          <div className="flex font-['Caveat'] flex-row gap-2">
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
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {ele.plan}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      ₹{ele.price} per person
                    </p>
                    <button
                      onClick={() =>{
                       setOpenForm(true) ;
                      } }
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
        )}
        {formOpen && (
          <form
            class="max-w-md font-['Caveat'] mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_t0gp0uw",
                  "template_e8lx10t",
                  e.target,
                  "Pn1B5jbZsuJ6r56B7"
                )
                .then(
                  (result) => {
                    toast.success("Query submitted successfully. We'll get back to you shortly");
                    props.onClose();
                    //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }}
          >
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="from_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="from_email"
                class="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="phone"
                id="phone"
                maxLength={10}
                class="block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="phone"
                class="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone No.
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="from_name"
                  class="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default ModalWrapper