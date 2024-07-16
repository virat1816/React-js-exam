import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { LOGIN_ADMIN, base_url } from '../redux-saga/constant';

const Login = () => {
    // Refs for input fields
    let name = useRef();
    let password = useRef();

    // State to manage loading status
    const [loading, setLoading] = useState(false);

    let handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission causing page reload

        // Set loading state to true when form is submitted
        setLoading(true);

        // Get input values from refs
        let data = {
            name: name.current.value,
            password: password.current.value,
        };

        // Validate input fields
        if (name.current.value === "" || password.current.value === "") {
            setLoading(false); // Reset loading state
            // Show error alert if any field is empty
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 1000,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: "error",
                title: "Please complete all fields",
            });
        } else {
            try {
                // Make POST request to user login endpoint
                const res = await axios.post("http://13.127.211.205:8000/v1/login/admin", data);

                console.log(res.status);
                if (res.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    localStorage.setItem("role", "admin");
                    setTimeout(() => {
                        window.location.href = '/roomdetails';
                    }, 1000);
                }
            } catch (error) {
                console.error(error);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1000,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });
                Toast.fire({
                    icon: "error",
                    title: "Invalid credentials",
                });
            } finally {
                setLoading(false); // Reset loading state
            }
        }
    };

    return (
        <div className="main-bg">
            <div className="box-container">
                <div id="a">
                    <div className="circle-ripple"></div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h1 className="heading-left">ROOM MANAGE</h1>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="wrap-login100">
                            <span className="login100-form-title">
                                ADMIN LOGIN
                            </span>
                            <form className="login100-form validate-form p-l-55 p-r-55 p-t-20" onSubmit={handleSubmit}>
                                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                    <input className="input100" type="text" name="username" placeholder="Username" ref={name} required />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Please enter password">
                                    <input className="input100" type="password" name="pass" placeholder="Password" ref={password} required />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" type="submit" disabled={loading}>
                                        {loading ? 'Logging in...' : 'LOG IN'}
                                    </button>
                                </div>
                                <div className="flex-col-c p-t-140 p-b-40">
                                    <Link to={'/loginuser'} className="txt3">
                                        USER LOGIN
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
