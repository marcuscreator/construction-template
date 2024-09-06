"use client";
import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <section className="bg-white" >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 bg-white sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Construction Foremans
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 bg-black">
          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              TOTAL PROJECTS
            </dt>

            <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">
              <CountUp end={500} duration={2.5} />
            </dd>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              STAFF MEMBERS
            </dt>

            <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">
              <CountUp end={240} duration={2.6} />
            </dd>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              HOURS OF WORK
            </dt>

            <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">
              <CountUp end={8600} duration={2.7} />
            </dd>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              COUNTIES EXPERIENCE
            </dt>

            <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">
              <CountUp end={47} separator="," duration={2.8} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Stats;
