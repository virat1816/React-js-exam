import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
    let handleLogout = () => {

        window.location.href = '/'

        localStorage.clear()
        window.location.reload();
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">

                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <Link to="roomdetails">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">ROOM DETAILS</a>
                            </li>
                        </Link>
                        <Link to="roomtype">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">ROOM TYPE</a>
                            </li>
                        </Link>
                        <Link to="reservation">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">RESERVATION</a>
                            </li>
                        </Link>
                        <Link to="reservationlist">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">RESERVATION LIST</a>
                            </li>
                        </Link>
                        


                        <li class="nav-link">

                            <a onClick={handleLogout}>
                                <i class="bx bx-log-out icons"></i>
                                <span class="text nav-text">Log Out</span>
                            </a>

                        </li>


                    </ul>

                </div>
            </nav>




        </div>
    )
}

export default UserNav
