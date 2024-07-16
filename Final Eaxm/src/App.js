import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react'; // Added useState import
import { GET_RESERVATION_PENDING, GET_ROOMDETAILS_PENDING, GET_ROOMLIST_PENDING, GET_USER_PENDING } from './redux-saga/user/action/action';
import Navbar from './admin/header/Navbar';
import RoomDetails from './admin/pages/RoomDetails';
import RoomList from './admin/pages/RoomList';
import Reservation from './admin/pages/Reservation';
import ReservationList from './admin/pages/ReservationList';
import Login from './compponannt/Login';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoginUser from './compponannt/LoginUser';
import UserNav from './admin/header/UserNav';
import RoomType from './admin/pages/RoomType';
import RoomManage from './admin/pages/RoomManage';

const getRole = () => {
  return localStorage.getItem("role");
};

function App() {
  const role = getRole();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false); // Added loggedIn state

  useEffect(() => {
    if (role && role !== "") {
      setLoggedIn(true); // Set loggedIn to true if role exists
    }
  }, [role]); // Check for changes in role

  useEffect(() => {
    // Run these dispatches only after login
    if (loggedIn && role === "admin") {
      dispatch({ type: GET_ROOMDETAILS_PENDING });
      dispatch({ type: GET_ROOMLIST_PENDING });
      // dispatch({ type: GET_RESERVATION_PENDING });
    }
    if (loggedIn && role === "user") {
      dispatch({ type: GET_RESERVATION_PENDING });
      dispatch({ type: GET_ROOMDETAILS_PENDING });
      dispatch({ type: GET_ROOMLIST_PENDING });
    }
  }, [loggedIn, dispatch]); // Check for changes in loggedIn and dispatch

  const isLoginPage = location.pathname === "/";

  if (!role || role === "") {
    return (
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/roomdetails" element={<RoomDetails />} />
            <Route path="/roomlist" element={<RoomList />} />
            <Route path='/roommanage' element={<RoomManage />} />
          </Routes>
        </div>
      </>
    );
  }

  if (role === "user") {
    return (
      <>
        <UserNav />
        <div className="container">
          <Routes>
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/reservationlist" element={<ReservationList />} />
            <Route path="/roomdetails" element={<RoomDetails />} />
            <Route path="/roomtype" element={<RoomType />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;



