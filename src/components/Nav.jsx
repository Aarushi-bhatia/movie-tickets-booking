import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 m-5 rounded-md bg-black text-white p-5 flex flex-col">
    <div className="flex items-center gap-3 mx-auto mt-6">
      <img src="icon.png" className="w-10" />
      <h1 className="text-3xl font-bold ">NeoBuild</h1>
    </div>
    <nav className="mt-12 space-y-4">
      <button className={`flex cursor-pointer items-center space-x-2 py-3 px-2 rounded-md w-full font-bold ${location.pathname === "/booking" || location.pathname === "/selection" ? "bg-white text-black" : "hover:bg-gray-800"}`}
      onClick={()=>navigate("/booking")}>
        <div className="flex items-center gap-3 mx-auto">
          <img src="booking.png" alt="" className={`w-5 ${location.pathname === "/booking" || location.pathname === "/selection" ? "filter invert-0" : "filter invert"}`} />
          Booking
        </div>
      </button>
      <button className={`flex cursor-pointer items-center space-x-2 py-3 px-2 rounded-md w-full font-bold ${location.pathname === "/activity" ? "bg-white text-black" : "hover:bg-gray-800"}`}
      onClick={()=>navigate("/activity")}>
        <div className="flex items-center gap-3 mx-auto">
          <img src="activity.png" alt="" className={`w-5 ${location.pathname === "/activity" ? "filter invert" : "filter invert-0"}`} />
          Activity
        </div>
      </button>
    </nav>
  </div>
  )
}

export default Nav