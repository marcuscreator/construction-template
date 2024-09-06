import React from "react";

function ConstructionSection() {
  return (
    <section className="bg-white py-8">
      {/* Headings */}
      <div className="text-center mb-8 px-4">
        <h6 className="text-gray-600 text-sm md:text-base font-semibold">
          WE ARE SPECIALISTS IN
        </h6>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">
          WHAT WE DO
        </h2>
      </div>

      <div className="flex flex-col items-center py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">
          {/* Left Cards */}
          <div className="flex flex-col gap-4 md:gap-8 md:w-1/3">
            <div className="bg-white text-black p-6 ">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                HOME CONSTRUCTION
              </h3>
              <p>Details about home construction services.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                COMMERCIAL BUILDING
              </h3>
              <p>Details about commercial building services.</p>
            </div>
            <div className="bg-white text-black p-6 ">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                RENOVATIONS
              </h3>
              <p>Details about renovation services.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center mx-4 md:mx-8">
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80NV9oYWxmX2JvZHlfcG9ydHJhaXRfcGhvdG9fb2ZfYV9ibGFja19mZW1hbGVfY185ODM3MmE4YS0zMWM5LTQyN2EtYmEyMC04MDA0MDAxMTUzZTJfMS5qcGc.jpg"
              alt="Construction Worker"
              className="w-full max-w-xs md:max-w-md "
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4 md:gap-8 md:w-1/3">
            <div className="bg-white text-black p-6">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                INDUSTRIAL PROJECTS
              </h3>
              <p>Details about industrial projects.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                LANDSCAPING
              </h3>
              <p>Details about landscaping services.</p>
            </div>
            <div className=" text-black p-6 ">
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                INTERIOR DESIGN
              </h3>
              <p>Details about interior design services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConstructionSection;
