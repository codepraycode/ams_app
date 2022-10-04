import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
      <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3" id="sidenav-main">

            <div class="sidenav-header">
                <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a class="navbar-brand m-0" href="../pages/dashboard.html">
                    {/* <img src="../assets/img/logo-ct.png" class="navbar-brand-img h-100 w-15" alt="..."/> */}
                        <span class="ms-1 font-weight-bold">AMS Web App</span>
                </a>
            </div>

            <hr class="horizontal dark mt-0"/>

            <div class="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">

                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link  active" href="../pages/dashboard.html">
                            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i class="fa-regular fa-grid-2"></i>
                            </div>
                            <span class="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  " href="../pages/tables.html">
                            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-users"></i>
                            </div>
                            <span class="nav-link-text ms-1">Members</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  " href="../pages/billing.html">
                            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i class="fa fa-cog" aria-hidden="true"></i>
                            </div>
                            <span class="nav-link-text ms-1">Settings</span>
                        </a>
                    </li>

                </ul>
            </div>


      </aside>
  )
}

export default SideBar