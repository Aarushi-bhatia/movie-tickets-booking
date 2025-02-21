import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Selection = () => {
  const { state } = useLocation();
  const { movie } = state || {};
  const [ticketCount, setTicketCount] = useState(1);
  const [time, setTime] = useState("12:00");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const navigate = useNavigate();

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

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    toast.success("Tickets Booked");
    setTimeout(() => {
      navigate("/activity");
    }, 5000);
  };

  return (
    <div>
      <h2>Selection</h2>
      <p>Movie: {movie.name}</p>
      <input
        type="number"
        value={ticketCount}
        onChange={(e) => setTicketCount(Number(e.target.value))}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBookingTicket}>Book Ticket</button>
    </div>
  );
};

export default Selection;
