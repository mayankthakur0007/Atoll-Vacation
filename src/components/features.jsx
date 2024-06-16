import React from 'react'

function Features() {
  return (
    <section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-500 inline-block text-transparent bg-clip-text text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {`Why Atoll Vacations?..`}
          </h2>
        </div>
        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
              <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl text-purple-200 font-bold text-gray-900">RELIABLE</h3>
            <p class="mt-5 text-2xl text-gray-600">
              Rely on us for all your travel needs. Relax and enjoy while we
              handle all the details of your tour planning.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
              <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl font-bold text-teal-200 text-gray-900">AFFORDABLE</h3>
            <p class="mt-5 text-2xl text-gray-600">
              We may not be the cheapest, but when it comes to value for money,
              we are unmatched.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
              <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl text-yellow-200 font-bold text-gray-900">
              HONEYMOON SPECIALIST
            </h3>
            <p class="mt-5 text-2xl text-gray-600">
              Create memories you'll cherish forever. As the Honeymoon
              Specialists, we can help you plan the trip of a lifetime today.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
              <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl font-bold text-red-200 text-gray-900">TRUSTWORTHY</h3>
            <p class="mt-5 text-2xl text-gray-600">
              When you book with us, you can enjoy complete peace of mind thanks
              to our transparency and absence of hidden charges.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
              <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl font-bold text-green-200 text-gray-900">EXPERIENCED</h3>
            <p class="mt-5 text-2xl text-gray-600">
              Passionate about travel, we understand the needs of travelers. Our
              specialists meticulously craft every holiday tour with care.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
              <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
            </div>
            <h3 class="mt-12 text-3xl text-orange-200 font-bold text-gray-900">
              24/7 CUSTOMER SERVICE
            </h3>
            <p class="mt-5 text-2xl text-gray-600">
              Travel with us and enjoy your vacation with the support of a
              dedicated tour manager. If you need anything, we're just a phone
              call away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features