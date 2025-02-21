import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import { FaGlobe, FaMinus, FaMoon, FaPlus, FaSun } from "react-icons/fa";
import UserName from "../components/UserName";

const Selection = () => {
  const { state } = useLocation();
  const { movie } = state || {};
  const [ticketCount, setTicketCount] = useState(1);
  const [time, setTime] = useState("12:00");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBookingTicket = () => {
    if (!movie) {
      toast.error("No movie selected!");
      return;
    }

    const booking = {
      name: movie.name,
      ticketCount,
      time,
      date,
      amount: ticketCount * 25,
    };

    setLoading(true);

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    toast.success("Tickets Booked");
    setTimeout(() => {
      setLoading(false);
      navigate("/activity");
    }, 5000);
  };

  return (
    <div className="h-screen flex">
      <Nav />

      <div className="flex-1 flex-col px-8 py-6">
        <UserName />
        <img
          src={movie?.image}
          alt={movie?.name}
          className="w-full max-w-3xl h-72 rounded-md object-cover shadow-xl "
        />

        <h2 className="text-2xl font-bold mt-4">
          {movie?.name} ({movie?.year})
        </h2>

        <div className="flex items-center mt-10">
          <span className="mr-2 font-bold">Ticket Count</span>
          <div className="mx-10">
            <button
              onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
              className="rounded-md p-2"
            >
              <FaMinus className="text-black cursor-pointer" />
            </button>
            <span className="mx-2 py-2 px-7 text-white font-bold bg-black rounded-md">
              {ticketCount}
            </span>
            <button
              onClick={() => setTicketCount(ticketCount + 1)}
              className="p-2 rounded-md"
            >
              <FaPlus className="text-black cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="mt-10">
          <span className="mr-2 font-bold">Show Time</span>
          <button
            onClick={() => setTime("09:00")}
            className={`py-2 ml-15 mx-6 px-8 font-semibold cursor-pointer rounded-md ${
              time === "09:00" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            <FaSun className="inline mr-2" /> 9:00
          </button>
          <button
            onClick={() => setTime("12:00")}
            className={`py-2 mx-4 px-8 font-semibold cursor-pointer rounded-md ${
              time === "12:00" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            <FaGlobe className="inline mr-2" /> 12:00
          </button>
          <button
            onClick={() => setTime("18:00")}
            className={`py-2 mx-6 px-8 font-semibold cursor-pointer rounded-md ${
              time === "18:00" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            <FaMoon className="inline" /> 18:00
          </button>
        </div>

        <div className="mt-10">
          <span className="mr-2 font-bold">Date</span>
          <div className="mx-27 inline-flex items-center bg-gray-300 p-2 rounded-md">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="font-bold bg-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleBookingTicket}
          disabled={loading}
          className="mt-10 w-xs bg-black p-3 rounded-lg hover:bg-gray-700 text-white font-bold"
        >
          {loading ? (
            <span className="loading-spinner"></span>
          ) : (
            "Book Ticket"
          )}
        </button>
      </div>
    </div>
  );
};

export default Selection;
