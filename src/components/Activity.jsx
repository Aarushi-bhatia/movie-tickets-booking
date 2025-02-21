import React, { useEffect, useState } from "react";

const Activity = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div>
      <h2>Activity</h2>
      {bookings.length > 0 ? (
        <div>
        {bookings.map((booking, index) => (
          <div key={index}>
            <p>Movie: {booking.name}</p>
            <p>Tickets: {booking.ticketCount}</p>
            <p>Time: {booking.time}</p>
            <p>Date: {booking.date}</p>
            <p>Amount: ${booking.amount}</p>
          </div>
        ))}
      </div>
      ):(
        <p>No bookings yet.</p>
      )}
      
    </div>
  );
};

export default Activity;
