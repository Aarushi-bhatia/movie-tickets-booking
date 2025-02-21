import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify'
import Booking from './components/BookMovie'
import Login from './components/Login'
import Selection from './components/SelectMovie';
import Activity from './components/Activity';

function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
