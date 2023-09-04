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
    <div className="w-full top-0 left-0 bg-slate-400">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <span className="text-3xl text-indigo-600">
            <MdSportsGymnastics />
          </span>
          <span className="font-bold md:text-2xl cursor-pointer font-sans">
            Borhan&apos;s GYM
          </span>
        </div>
        <div className="relative mr-2 sm:mb-12">
          <button onClick={toggleNav} className="sm:hidden block ">
            <FaBars />
          </button>

          {/* Navigation menu */}
          <ul
            className={`sm:flex sm:items-center ${
              isNavOpen ? "block" : "hidden"
            } absolute top-full right-0 bg-slate-400  p-2 `}
          >
            {Navlinks.map((linkItem, index) => (
              <li key={index} className="md:ml-3 text-xl mr-4">
                <Link
                  to={linkItem.link}
                  className="text-gray-800 text-2xl  hover:text-blue-800 duration-500  md:space-x-12"
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
