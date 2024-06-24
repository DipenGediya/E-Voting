import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { BASE_URL, POST_USER_LOGIN } from '../../../redux-saga/constant';
import { GET_USER_PENDING } from '../../../redux-saga/admin/action';
import { Link } from 'react-router-dom';

const Userloging = () => {

    let dispatch = useDispatch()

    let cardNo = useRef()
    let password = useRef()

    let userData = useSelector((state) => state.userReducer.user)
    console.log(userData);

    useEffect(() => {
        dispatch({ type: GET_USER_PENDING })
    }, [])

    async function userLogin() {
        let user = {
            cardNo: cardNo.current.value,
            password: password.current.value,
        }

        console.log(user);

        if (cardNo.current.value == "" || password.current.value == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter CardNo and Password",
            });
        }
        else {
            try {
                let res = await axios.post(BASE_URL + POST_USER_LOGIN, user)
                console.log(res,"userlogin");
                let data = res.data.data;
                let status = res.status;

                if (status == 200) {
                    if (userData.find((val) => val.cardNo == user.cardNo)) {
                        localStorage.setItem("role", "user");
                        localStorage.setItem("userDetails", JSON.stringify(data))
                        setTimeout(() => {
                            window.location.href = "/voting"
                        }, 500)
                        cardNo.current.value = "";
                        password.current.value = "";
                    }
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Enter Valid CardNo and Password",
                });
                cardNo.current.value = "";
                password.current.value = "";
                console.log(error);
            }
        }
    }

    return (
        <>
            <div className="userlogin w-100">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <img src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/vote-indian-general-election-banner-with-voters-finger-design_1017-50184.jpg?size=*:250" alt="" />
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <form class="p-4 border rounded" style={{ width: "55%" }}>
                            <div class="mb-3">
                                <label class="form-label">Card No :-</label>
                                <input type="text" ref={cardNo} class="form-control" placeholder="Enter Card Number" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password :-</label>
                                <input type="password" ref={password} class="form-control" placeholder="Password" />
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                                    <label class="form-check-label" for="dropdownCheck2">
                                        Show Password
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mb-2" onClick={userLogin}>Sign in</button>
                            <Link to={"/adminlogin"} type="submit" class="btn btn-primary w-100">Admin Login</Link>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userloging