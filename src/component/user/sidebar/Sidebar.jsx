import React from 'react'
import { adminPage, userPage } from './data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px", height: "90vh" }}>
                <ul class="nav nav-pills flex-column mb-auto">
                    {
                        userPage.map((val, index) => {
                            return (
                                <>
                                    <li class="nav-item">
                                        <Link to={val.path} class="nav-link text-dark fw-semibold" aria-current="page">{val.name}</Link>
                                    </li>
                                </>
                            )
                        })
                    }

                </ul>

            </div>

        </>
    )
}

export default Sidebar;