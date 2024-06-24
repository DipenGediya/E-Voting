import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import { BASE_URL, POST_ADMIN } from '../../../redux-saga/constant';
import { Link } from 'react-router-dom';

const Adminlogin = () => {

    let name = useRef();
    let password = useRef();

    async function adminLogin() {
        let admin = {
            name: name.current.value,
            password: password.current.value,
        }
        console.log(admin);

        if (name.current.value == "" || password.current.value == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter CardNo and Password",
            });
        }
        else {
            try {
                let res = await axios.post(BASE_URL + POST_ADMIN, admin)
                let data = res.data.data;
                let status = res.status;

                if (status == 200) {
                    localStorage.setItem("role", "admin");
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully Login",
                        icon: "success "
                    });

                    setTimeout(() => {
                        window.location.href = "/dashborad"
                    }, 500)

                    name.current.value = "";
                    password.current.value = "";
                }
            } catch (error) {
                name.current.value = "";
                password.current.value = "";

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Enter Valid Name and Password",
                });
                console.log(error);
            }
        }

    }

    function userLoginPage(e) {
        e.preventDefault();
        window.location.href="/userloging"
    }
    return (
        <div className="userlogin w-100">
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <img src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/vote-indian-general-election-banner-with-voters-finger-design_1017-50184.jpg?size=*:250" alt="" />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <form class="p-4 border rounded" style={{ width: "55%" }}>
                        <div class="mb-3">
                            <label class="form-label">Name :-</label>
                            <input type="text" class="form-control" ref={name} placeholder="Enter Name" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password :-</label>
                            <input type="password" class="form-control" ref={password} placeholder="Password" />
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                                <label class="form-check-label" for="dropdownCheck2">
                                    Show Password
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-2" onClick={adminLogin}>Sign in</button>
                        <Link to={"/"} type="submit" class="btn btn-primary w-100">User Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Adminlogin