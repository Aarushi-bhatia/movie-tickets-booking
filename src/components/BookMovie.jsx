import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle, FaGlobe } from "react-icons/fa";

const movies = [
  { id: 1, name: "Godfather", year: 1975, image: "godfather.jpg" },
  { id: 2, name: "Inception", year: 2010, image: "inception.jpg" },
  { id: 3, name: "Avengers: Endgame", year: 2019, image: "avengers.png" },
  { id: 4, name: "The Menu", year: 2022, image: "themenu.jpg" },
  { id: 5, name: "Get Out", year: 2017, image: "getout.jpg" },
  {
    id: 6,
    name: "National Treasure",
    year: 2004,
    image: "nationaltreasure.jpg",
  },
];

const Booking = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectMovie = (movie) => {
    navigate("/selection", { state: { movie } });
  };

  return (
    <div className="h-screen flex">
      <div className="w-64 m-5 rounded-md bg-black text-white p-5 flex flex-col">
        <div className="flex items-center gap-3 mx-auto mt-6">
          <img src="icon.png" className="w-10" />
          <h1 className="text-3xl font-bold ">NeoBuild</h1>
        </div>
        <nav className="mt-12 space-y-4">
          <button className="flex items-center space-x-2 py-3 px-2 bg-white text-black rounded-md w-full font-bold">
            <div className="flex items-center gap-3 mx-auto">
              <img src="booking.png" alt="" className="w-5" />
              Booking
            </div>
          </button>
          <button className="flex items-center space-x-2 py-3 px-2 hover:bg-gray-800 rounded-md w-full font-bold">
            <div className="flex items-center gap-3 mx-auto">
              <img src="activity.png" alt="" className="w-5" />
              Activity
            </div>
          </button>
        </nav>
      </div>
      <div className="flex-1 pb-8 pl-8 pt-3">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-3xl">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 pl-5 border border-gray-300 bg-gray-300 rounded-md placeholder-black font-bold"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-8" />
          </div>
          <div className="flex items-center gap-3 pr-7">
            <img
              src="account.png"
              className="w-14 bg-gray-300 rounded-full p-3"
            />
            <p className="font-semibold text-xl">Naval Ravikant</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Good Morning Mr. Naval Ravikant!
        </h2>
        <div className="w-4xl max-w-[1000px] h-[500px]">
          <div className="grid grid-cols-3 gap-4">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className=" cursor-pointer"
                onClick={() => handleSelectMovie(movie)}
              >
                <div className="rounded-lg shadow-md overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-bold">
                    {movie.name} ({movie.year})
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
