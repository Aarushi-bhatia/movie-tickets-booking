import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import UserName from "../components/UserName";

const Activity = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div className="h-screen flex ">
      <Nav />
      <div className="flex-1 py-14 px-8">
      <UserName />
        <h2 className="text-2xl font-bold mb-4">Activity</h2>
        {bookings.length > 0 ? (
          <table className="w-4xl border-collapse ">
            <thead>
              <tr className="border-b text-xl">
                <th className="p-2">ID</th>
                <th className="p-2">Movie</th>
                <th className="p-2">Tickets</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Time</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="text-center font-semibold">
                  <td className="p-2 py-5 border-b">{String(index + 1).padStart(2, '0')}</td>
                  <td className="p-2 border-b">{booking.name}</td>
                  <td className="p-2 border-b">{booking.ticketCount}</td>
                  <td className="p-2 border-b">${booking.amount.toFixed(2)}</td>
                  <td className="p-2 border-b">{booking.time}</td>
                  <td className="p-2 border-b">{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-4">No bookings yet.</p>
        )}
      </div>
    </div>
  );
};

export default Activity;
