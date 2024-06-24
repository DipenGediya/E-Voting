import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="/">VOTING</a>

                    <div class="btn-group dropstart">
                        <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="50" height="50" class="rounded-circle me-2" />                         
                        </a>
                        <ul class="dropdown-menu p-2" style={{width:"250px"}}>                            
                            <label>Card No :- user </label><br />
                            <label>Name :- user </label><br />
                            <label>Father Name :- user vewgw</label><br />
                            <label>gender :- user</label><br />
                            <label>Birth Date :- 11/1/201</label><br />
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar