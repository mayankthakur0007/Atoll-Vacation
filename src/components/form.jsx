import React from 'react'
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export const Form = (props) => {
  return (
    <form
      class="font-['Caveat']"
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
              toast.success(
                "Query submitted successfully. We'll get back to you shortly"
              );
              setPackageSelected({});
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
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="from_name"
          id="from_name"
          class="block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="from_name"
          class="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="message"
          readOnly
          value={`${props.selectedPackage}`}
          id="message"
          class="block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
      </div>
      <br></br>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
