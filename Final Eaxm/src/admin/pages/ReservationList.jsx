import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_RESERVATION } from '../../redux-saga/constant';
import { DELETE_RESERVATION_PENDING, UPDATE_RESERVATION_PENDING } from '../../redux-saga/user/action/action';
import Swal from 'sweetalert2';

const ReservationList = () => {
    let reservationlist = useSelector((state) => state.userReducer.reservation);





    let dispatch = useDispatch()

    let [view, setview] = useState()

    // delete user

    let handleDelete = (id) => {

        console.log(id);
        Swal.fire({
            icon: "success",
            title: "Reservation Delete Succesfully",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch({ type: DELETE_RESERVATION_PENDING, payload: id })



    }

    // update user

    let handleview = (id, index) => {
        let data = reservationlist[index]

        setview(data)

    }

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    }

    let handleupdate = () => {
        console.log(view);
        Swal.fire({
            icon: "success",
            title: "Reservation Update Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch({ type: UPDATE_RESERVATION_PENDING, payload: view })


    }








    return (
        <div>

            <h1 className='mt-5'>RSERVATION LIST </h1>

            <table class="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">CHECK IN DATE</th>
                        <th scope="col">CHECK OUT DATE</th>
                        <th scope="col">DELETE</th>
                        <th scope="col">UPDATE</th>


                    </tr>
                </thead>
                <tbody>

                    {reservationlist?.map((val, index) => (<tr style={{ height: "10px" }}>
                        <td>{val.roomnumber}</td>
                        <td>{val.type}</td>
                        <td>{val.name}</td>
                        <td>{val.phone}</td>
                        <td>{val.checkin}</td>
                        <td>{val.checkout}</td>


                        <td onClick={() => handleDelete(val.id)} >CANCEL</td>
                        <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>VIEW</td>
                    </tr>))}



                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog p-0" style={{ width: "400px" }}>
                            <div class="modal-content">

                                <div class="modal-body">
                                    <div class="card" style={{ width: "23rem" }}>
                                        <div class="card-body">
                                            <form className="">

                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">NAME</label>
                                                    <input type="text" name="name" value={view?.name} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">PHONE</label>
                                                    <input type="number" name="phone" value={view?.phone} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">CHECK IN </label>
                                                    <input type="date" name="checkin" value={view?.checkin} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">CHECK OUT</label>
                                                    <input type="date" name="checkout" value={view?.checkout} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={handleupdate}>UPDATE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </tbody>
            </table>

        </div >
    )
}

export default ReservationList
