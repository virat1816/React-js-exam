import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ROOMLIST_PENDING, POST_ROOMLIST_PENDING, UPDATE_ROOMLIST_PENDING } from '../../redux-saga/user/action/action';
import Swal from 'sweetalert2';

const RoomList = () => {
    let room = useRef();
    let status = useRef();
    let type = useRef();

    const [selectedstatus, setselectedstatus] = useState('');
    const [selecttype, setselecttype] = useState('');
    const [view, setview] = useState();

    const roomlist = useSelector((state) => state.userReducer.roomlist);
    const dispatch = useDispatch();

    let addUser = () => {
        let data = {
            room: room.current.value,
            status: selectedstatus,
            type: selecttype,
        };

        // Validate input fields
        if (!room.current.value || !selectedstatus || !selecttype) {
            // Show error alert if any field is empty
            Swal.fire({
                icon: "error",
                title: "Please complete all fields",
            });
        } else {
            // Dispatch action to add room
            dispatch({ type: POST_ROOMLIST_PENDING, payload: data });

            Swal.fire({
                icon: "success",
                title: "Room Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });

            // Clear form fields
            room.current.value = '';
            setselectedstatus('');
            setselecttype('');
        }
    };

    let handleDelete = (id) => {
        Swal.fire({
            icon: "success",
            title: "Room Delete Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch({ type: DELETE_ROOMLIST_PENDING, payload: id });
    };

    let handleview = (id, index) => {
        let data = roomlist[index];
        setview(data);
    };

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    };

    let handleupdate = () => {
        Swal.fire({
            icon: "success",
            title: "Room Update Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch({ type: UPDATE_ROOMLIST_PENDING, payload: view });
    };

    const availableRooms = roomlist.filter(room => room.status === 'available');
    const unavailableRooms = roomlist.filter(room => room.status === 'unavailable');

    return (
        <div>
            {/* form */}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="box">
                    <input type="text" placeholder="" required id="room" ref={room} />
                    <label htmlFor="room">ROOM NO.</label>
                </div>

                <div className="box">
                    <select className="form-select" required aria-label="Default select example" value={selecttype} onChange={(e) => setselecttype(e.target.value)}>
                        <option value="" disabled>TYPE</option>
                        <option value="BUSINESS">BUSINESS</option>
                        <option value="DELUXE">DELUXE</option>
                        <option value="COMMON">COMMON</option>
                        <option value="GENERAL">GENERAL</option>
                    </select>
                </div>

                <div className="box">
                    <select className="form-select" required aria-label="Default select example" value={selectedstatus} onChange={(e) => setselectedstatus(e.target.value)}>
                        <option value="" disabled>STATUS</option>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>
                <button onClick={addUser}>ADD ROOM</button>
            </form>

            {/* all data */}
            <h1>ALL ROOMS</h1>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">DELETE</th>
                        <th scope="col">VIEW</th>
                    </tr>
                </thead>
                <tbody>
                    {roomlist?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>{val.type}</td>
                            <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* filter data */}
            <div>
                <h2>This Time Available Rooms</h2>
                <table className="table table-bordered table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ROOM</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {availableRooms.map((val, index) => (
                            <tr key={index} style={{ height: "10px" }}>
                                <td>{val.room}</td>
                                <td>{val.status}</td>
                                <td>{val.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>This Time Unavailable Rooms</h2>
                <table className="table table-bordered table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ROOM</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unavailableRooms.map((val, index) => (
                            <tr key={index} style={{ height: "10px" }}>
                                <td>{val.room}</td>
                                <td>{val.status}</td>
                                <td>{val.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog p-0" style={{ width: "400px" }}>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="card" style={{ width: "23rem" }}>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">ROOM NO</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="room" value={view?.room} onChange={handle} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">STATUS</label>
                                                <input type="text" name="status" value={view?.status} onChange={handle} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">TYPE</label>
                                                <input type="text" name="type" value={view?.type} onChange={handle} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleupdate}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomList;
