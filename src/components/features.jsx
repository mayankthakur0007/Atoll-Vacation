import React from 'react'
import money from '../assets/money.png'
import thumb from '../assets/thumb.png'
import heart from '../assets/heart.png'
import hand from '../assets/hand.png'
import bulb from '../assets/bulb.png'
import call from '../assets/call.png'

function Features() {
  return (
    <section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="bg-black inline-block text-transparent bg-clip-text text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {`Why Atoll Vacations?..`}
          </h2>
        </div>
        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <img height={100} width={100} src={bulb} className='bg-white' />
            <h3 class="mt-12 text-3xl text-black font-bold text-gray-900">RELIABLE</h3>
            <p class="mt-5 text-2xl text-gray-600">
              Rely on us for all your travel needs. Relax and enjoy while we
              handle all the details of your tour planning.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <img height={100} width={100} src={money} className='bg-white' />
            <h3 class="mt-12 text-3xl font-blackteal-200 text-gray-900">AFFORDABLE</h3>
            <p class="mt-5 text-2xl text-gray-600">
              We may not be the cheapest, but when it comes to value for money,
              we are unmatched.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <img height={100} width={100} src={heart} className='bg-white' />
            <h3 class="mt-12 text-3xl text-black font-bold text-gray-900">
              HONEYMOON SPECIALIST
            </h3>
            <p class="mt-5 text-2xl text-gray-600">
              Create memories you'll cherish forever. As the Honeymoon
              Specialists, we can help you plan the trip of a lifetime today.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
          <img height={100} width={100} src={hand} className='bg-white' />
            <h3 class="mt-12 text-3xl font-blackred-200 text-gray-900">TRUSTWORTHY</h3>
            <p class="mt-5 text-2xl text-gray-600">
              When you book with us, you can enjoy complete peace of mind thanks
              to our transparency and absence of hidden charges.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <img height={100} width={100} src={thumb} className='bg-white' />
            <h3 class="mt-12 text-3xl font-blackgreen-200 text-gray-900">EXPERIENCED</h3>
            <p class="mt-5 text-2xl text-gray-600">
              Passionate about travel, we understand the needs of travelers. Our
              specialists meticulously craft every holiday tour with care.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <img height={100} width={100} src={call} className='bg-white' />
            <h3 class="mt-12 text-3xl text-black font-bold text-gray-900">
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