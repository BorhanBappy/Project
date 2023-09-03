import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSportsGymnastics } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Navlinks = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/gallery" },
  { name: "Plans", link: "/plans" },
  { name: "Trainers", link: "/trainers/John" },
  { name: "Contract", link: "/contract" },
  { name: "About", link: "/about" },

  // Add more links as needed
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      
          <div className="shadow-md  h- w-full top-0 left-0 bg-white">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <span className="text-3xl text-indigo-600 mr-1 ">
                  <MdSportsGymnastics />
                </span>
                <span className="font-bold text-2xl cursor-pointer font-sans">
                  Borhan's GYM
                </span>
              </div>
              <div className="md:float-right static relative mr-2 mb-12">
                {/* Add a button for medium screens */}
                {window.innerWidth <= 768 && (
                  <button
                    onClick={toggleNav}
                    className="md:hidden block text-gray-80 float-right mr-3"
                  >
                    {isNavOpen ? <FaBars /> : <FaBars />}
                  </button>
                )}
                {/* Navigation menu */}
                <ul
                  className={`md:flex md:items-center ${
                    isNavOpen ? "block" : "hidden"
                  } absolute top-full right-0 bg-white mt-1 p-2 `}
                >
                  {Navlinks.map((linkItem, index) => (
                    <li key={index} className="md:ml-3 text-xl mr-4">
                      <Link
                        to={linkItem.link}
                        className="text-gray-800 hover:text-blue-700 duration-500  hover:bg-slate-300 md:space-x-12"
                      >
                        {linkItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      
    </>
  );
}
