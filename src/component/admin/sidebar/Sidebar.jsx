import React from 'react'
import { adminPage } from './data';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    function logoutAdmin() {
        window.location.reload();
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px", height: "90vh" }}>
                <ul class="nav nav-pills flex-column mb-auto">
                    {
                        adminPage.map((val, index) => {
                            return (
                                <>
                                    <li class="nav-item">
                                        <Link to={val.path} class="nav-link text-dark fw-semibold" aria-current="page">{val.name}</Link>
                                    </li>
                                </>
                            )
                        })
                    }
                    <li className='fw-semibold ps-3' onClick={logoutAdmin}>Log Out</li>

                </ul>

            </div>

        </>
    )
}

export default Sidebar;