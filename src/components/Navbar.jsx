import React from 'react';

const Navbar = () => {
    return (
        <nav 
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" 
            id="navbarBlur" navbar-scroll="true"
        >

            <div className="navbar-content">

                <a class="navbar-brand brand m-0" href="/">
                    {/* <img src="../assets/img/logo-ct.png" class="navbar-brand-img h-100 w-15" alt="..."/> */}
                    <span class="ms-1 font-weight-bold">AMS Web App</span>
                </a>


            </div>

            <div className="container-fluid py-1 px-3">

                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">

                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group">
                            <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Type here..." />
                        </div>
                    </div>

                    <ul className="navbar-nav  justify-content-end">

                        <li className="nav-item d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                                <i className="fas fa-lock"></i>
                                <span className="d-sm-inline d-none">Logout</span>
                            </a>
                        </li>

                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;