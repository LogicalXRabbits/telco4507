import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex">
            {/* Page content here */}
            <label
              tabIndex={0}
              className="btn btn-ghost md:hidden"
              htmlFor="my-drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div onClick={() => navigate("/")} className="hidden md:block">
              <a className="btn btn-ghost normal-case text-[26px] ">TUJUARA</a>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4  min-h-full bg-base-200 text-base-content text-[15px] lg:text-[19px] lg:w-80">
              {/* Sidebar content here */}

              <div className="mt-7 space-y-3">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <li>
                    <NavLink to={"/Galery"}>Galery</NavLink>
                  </li>
                  <ul className="p-2 space-y-2">
                    <li>
                      <li>
                        <NavLink to={"/Galery/FirstSemester"}>
                          First Semester
                        </NavLink>
                      </li>
                    </li>
                    <li>
                      <li>
                        <NavLink to={"/Galery/SecondSemester"}>
                          SecondSemester
                        </NavLink>
                      </li>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/Member"}>Member</NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center  lg:flex">
      <div onClick={() => navigate("/")} className="md:hidden">
              <a className="btn btn-ghost normal-case text-[26px] ">TUJUARA</a>
            </div>
        <ul className="hidden md:flex menu menu-horizontal space-x-5 md:ml-7 lg:scale-125">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <NavLink to={"/Galery"}>Galery</NavLink>
              </summary>
              <ul className="p-0 space-y-2">
                <li>
                  <NavLink to={"/Galery/FirstSemester"}>First Semester</NavLink>
                </li>
                <li>
                  <NavLink to={"/Galery/SecondSemester"}>
                    SecondSemester
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to={"/Member"}>Member</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate hover:cursor-pointer transform hover:scale-110 pe-2">
          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
