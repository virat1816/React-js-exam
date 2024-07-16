import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_RESERVATION_PENDING } from '../../redux-saga/user/action/action';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Reservation = () => {
    const name = useRef();
    const type = useRef();
    const roomnumber = useRef();
    const phone = useRef();
    const checkin = useRef();
    const checkout = useRef();

    const [selectedroom, setSelectedroom] = useState('');
    const [selectedroomtype, setSelectedroomtype] = useState('');
    const roomlist = useSelector((state) => state?.userReducer?.roomlist);
    const availableRooms = roomlist?.filter(room => room.status === 'available');

    const businessroom = availableRooms?.filter(room => room.type === 'BUSINESS');
    const deluxeroom = availableRooms?.filter(room => room.type === 'DELUXE');
    const generalroom = availableRooms?.filter(room => room.type === 'GENERAL');
    const commonroom = availableRooms?.filter(room => room.type === 'COMMON');

    const handleRoomTypeChange = (e) => {
        setSelectedroomtype(e.target.value);
        setSelectedroom('');
    };

    const handleRoomnumberChange = (e) => {
        setSelectedroom(e.target.value);
    };

    const dispatch = useDispatch();

    const addUser = () => {
        const data = {
            type: selectedroomtype,
            roomnumber: selectedroom,
            name: name.current.value,
            phone: phone.current.value,
            checkin: checkin.current.value,
            checkout: checkout.current.value,
        };

        // Validate input fields
        if (phone.current.value === "" || name.current.value === "" || selectedroomtype === "" || selectedroom === "" || checkin.current.value === "" || checkout.current.value === "") {
            // Show error alert if any field is empty
            Swal.fire({
                icon: "error",
                title: "Please complete all fields",
            });
        } else {
            // Dispatch action to add reservation
            dispatch({ type: POST_RESERVATION_PENDING, payload: data });
           setTimeout(() => {
            window.location.href = window.location.href;
           },2000);
            // Show success alert
            Swal.fire({
                icon: "success",
                title: "Reservation Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            // Reset form fields
            name.current.value = "";
            phone.current.value = "";
            setSelectedroom('');
            setSelectedroomtype('');
            checkin.current.value = "";
            checkout.current.value = "";
        }
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1 className="mt-5"> RESERVATION YOUR ROOM</h1>
                <div className="box">
                    <select  className="form-select" aria-label="Default select example" value={selectedroomtype} ref={type} onChange={handleRoomTypeChange}>
                        <option value="">Select room type</option>
                        <option value="BUSINESS">Business</option>
                        <option value="DELUXE">Deluxe</option>
                        <option value="GENERAL">General</option>
                        <option value="COMMON">Common</option>
                    </select>
                </div>
                <div className="box">
                    <select className="form-select"  aria-label="Default select example" value={selectedroom} ref={roomnumber} onChange={handleRoomnumberChange}>
                        <option value="">Select room</option>
                        {selectedroomtype === 'BUSINESS' && businessroom?.map((val, index) => (
                            <option key={index} value={val?.room}>{val?.room}</option>
                        ))}
                        {selectedroomtype === 'DELUXE' && deluxeroom?.map((val, index) => (
                            <option key={index} value={val?.room}>{val?.room}</option>
                        ))}
                        {selectedroomtype === 'GENERAL' && generalroom?.map((val, index) => (
                            <option key={index} value={val?.room}>{val?.room}</option>
                        ))}
                        {selectedroomtype === 'COMMON' && commonroom?.map((val, index) => (
                            <option key={index} value={val?.room}>{val?.room}</option>
                        ))}
                    </select>
                </div>
                <div className="box">
                    <input type="text" placeholder=""  id="name" ref={name} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="box">
                    <input type="number" placeholder=""  id="phone" ref={phone} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="box">
                    <input type="date" placeholder="" id="checkin" ref={checkin} />
                    <label htmlFor="checkin">Check in date</label>
                </div>
                <div className="box">
                    <input type="date" placeholder="" id="checkout" ref={checkout} />
                    <label htmlFor="checkout">Check out date</label>
                </div>
                <button onClick={addUser}>ADD RESERVATION</button>
                <Link to={"/reservationlist"}>SEE RESERVATION HISTORY</Link>
            </form>
        </div>
    );
};

export default Reservation;
