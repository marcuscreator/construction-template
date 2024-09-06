import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Topdetails() {
  return (
    <header className="bg-gray-100 text-black">
      <div className="container mx-auto py-2 px-2 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Mjengo.Ke</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-black-500 hover:text-blue-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-blue-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Topdetails;
