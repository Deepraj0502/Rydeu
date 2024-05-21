import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import "flowbite-datepicker";
import "flowbite/dist/datepicker.turbo.js";
import Datepicker from "flowbite-datepicker/Datepicker";

export default function CityPage() {
  useEffect(() => {
    initFlowbite();
    setTimeout(() => {
      const datepickerEl = document.getElementById("datepickerId");
      new Datepicker(datepickerEl, {
        // options
      });
    }, 500);
  }, []);
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-[99]">
        <div className="px-10 flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-10">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://cdn.rydeu.com/static/assets/Main_logo/MainLogo.svg"
                className="h-8"
                alt="Logo"
              />
            </a>
            <p className="font-bold cursor-pointer text-md">Transfers</p>
            <p className=" text-md cursor-pointer">Bus Hire</p>
            <p
              className=" text-md cursor-pointer"
              onClick={() => {
                window.location.href = "/book";
              }}
            >
              Booking Request
            </p>
          </div>

          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div
              className="flex gap-1 mr-4 cursor-pointer"
              onClick={() => {
                window.location.href = "/help";
              }}
            >
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group.png?updatedAt=1716207595605"
                alt=""
                className="w-4.5 h-4.5"
              />
              <p className="text-sm relative bottom-0.5">Help</p>
            </div>
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-100 justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer pr-8"
            >
              <svg
                className="w-8 h-4 rounded-sm me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
              >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth={300}
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlinkHref="#a" y={420} />
                          <use xlinkHref="#a" y={840} />
                          <use xlinkHref="#a" y={1260} />
                        </g>
                        <use xlinkHref="#a" y={1680} />
                      </g>
                      <use xlinkHref="#b" x={247} y={210} />
                    </g>
                    <use xlinkHref="#c" x={494} />
                  </g>
                  <use xlinkHref="#d" x={988} />
                  <use xlinkHref="#c" x={1976} />
                  <use xlinkHref="#e" x={2470} />
                </g>
              </svg>
              Deutsch | EUR
            </button>
            {/* Dropdown */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul className="py-2 font-medium" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center font-100">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      Deutsch
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      中文 (繁體)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="flex items-center md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse bg-white border border-[#DFDFDF] shadow-sm py-0 p-2 rounded-full">
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-6 h-6 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjGnnelatTe1FbI6RHusiWG4wkbtmnjVC9uTBkSBX_g&s"
                  alt="user photo"
                />
              </button>

              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 "
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Deepraj Pagare
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    deepraj@gmail.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg bg-transparent"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center">
        <img
          src="https://ik.imagekit.io/ok2wgebfs/Dusseldolf_cover%201.png?updatedAt=1716214665667"
          alt=""
          className="absolute bg-cover bg-no-repeat w-full mt-16 bg-center  z-[-1] h-[550px]"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="flex mt-16 w-full">
          <div className="w-[60%] p-20">
            <h1 className="roboto font-bold text-5xl text-white mt-5">
              Private Transfer & Taxi services in Geneva
            </h1>
            <p className="roboto text-xl text-white mt-8 font-[500] w-[90%]">
              Book airport transfers, city transfers and hourly disposal
              services with driver
            </p>
            <div className="flex justify-between mt-40">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20471.png?updatedAt=1716214665219"
                alt=""
                className="rounded-lg shadow-sm relative hover:bottom-2 cursor-pointer w-[50%]"
              />
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Book%20Now%20&%20Pay%20Later.png?updatedAt=1716214665299"
                alt=""
                className="rounded-lg shadow-sm relative hover:bottom-2 cursor-pointer w-[50%]"
              />
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-center items-center">
            <div className="bg-[#F4F4F4] rounded-lg rounded-b-none flex justify-between w-[80%] p-1  shadow-lg">
              <button
                type="button"
                className="p-6 montserrat font-[700] text-sm text-red-600 bg-white rounded-lg"
              >
                One Way
              </button>
              <button
                type="button"
                className="p-6 montserrat font-[500] text-[#484848] text-sm"
              >
                Round Trip
              </button>
              <button
                type="button"
                className="p-6 montserrat font-[500] text-[#484848] text-sm"
              >
                Hourly
              </button>
            </div>
            <div className="bg-white rounded-lg rounded-t-none w-[80%] p-6 pb-2 shadow-lg">
              <input
                type="text"
                name="from"
                id="from"
                className="border border-[#EDEDED] border-solid border-0 border-b-2 w-full  bg-transparent p-0 text-md city-input py-2"
                placeholder="From (airport, hotel, address)"
              />
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20633.png?updatedAt=1716224708164"
                alt=""
                className="relative float-right mb-[-100px] w-8 h-8 bg-white cursor-pointer bottom-4 right-8"
              />
              <input
                type="text"
                name="to"
                id="to"
                className="border border-[#EDEDED] border-solid border-0 border-b-2 w-full  bg-transparent p-0 text-md city-input py-2 mt-4"
                placeholder="To (airport, hotel, address)"
              />
              <div className="flex mt-4 gap-2 justify-between">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    datepicker=""
                    id="datepickerId"
                    datepicker-autohide=""
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 border border-[#EDEDED] border-solid border-0 border-b-2 text-sm focus:ring-blue-500 bg-white focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pickup Date"
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    type="time"
                    className="bg-gray-50 border w-full bg-white border-gray-300 text-gray-900 border border-[#EDEDED] border-solid border-0 border-b-2 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-400"
                    placeholder="Pickup Time"
                    value="00:00"
                  />
                </div>
              </div>

              <>
                <button
                  id="dropdownAvatarNameButton"
                  data-dropdown-toggle="dropdownAvatarName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 border border-[#EDEDED] border-solid border-0 border-b-2 text-sm  flex items-center text-sm pe-1 bg-white text-gray-400 w-full mt-4"
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10  p-2"
                    src="https://ik.imagekit.io/ok2wgebfs/passenger%202.png?updatedAt=1716227928487"
                    alt="user photo"
                  />
                  <span className="text-gray-500 w-[90%] text-left">
                    Add Passenger & Baggage
                  </span>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownAvatarName"
                  className="z-10 hidden bg-white divide-y w-[23%] divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 z-[99]"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Passenger 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Passenger 2
                      </a>
                    </li>
                  </ul>
                </div>
              </>
              <div className="flex items-center w-full mt-4">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white borderbg-gray-50 border text-gray-900 border border-[#EDEDED] border-solid border-0 border-b-2 text-sm"
                  type="button"
                >
                  <svg
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 me-2"
                    viewBox="0 0 20 15"
                  >
                    <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
                    <mask
                      id="a"
                      style={{ maskType: "luminance" }}
                      width={20}
                      height={15}
                      x={0}
                      y={0}
                      maskUnits="userSpaceOnUse"
                    >
                      <rect
                        width="19.6"
                        height={14}
                        y=".5"
                        fill="#fff"
                        rx={2}
                      />
                    </mask>
                    <g mask="url(#a)">
                      <path
                        fill="#D02F44"
                        fillRule="evenodd"
                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                        clipRule="evenodd"
                      />
                      <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                      <g filter="url(#filter0_d_343_121520)">
                        <path
                          fill="url(#paint0_linear_343_121520)"
                          fillRule="evenodd"
                          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                          clipRule="evenodd"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_343_121520"
                        x1=".933"
                        x2=".933"
                        y1="1.433"
                        y2="6.1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#F0F0F0" />
                      </linearGradient>
                      <filter
                        id="filter0_d_343_121520"
                        width="6.533"
                        height="5.667"
                        x=".933"
                        y="1.433"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy={1} />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_343_121520"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_343_121520"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  +1{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-phone"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-phone-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            fill="none"
                            aria-hidden="true"
                            className="h-4 w-4 me-2"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                fill="#D02F44"
                                fillRule="evenodd"
                                d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                clipRule="evenodd"
                              />
                              <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                              <g filter="url(#filter0_d_343_121520)">
                                <path
                                  fill="url(#paint0_linear_343_121520)"
                                  fillRule="evenodd"
                                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_343_121520"
                                x1=".933"
                                x2=".933"
                                y1="1.433"
                                y2="6.1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#fff" />
                                <stop offset={1} stopColor="#F0F0F0" />
                              </linearGradient>
                              <filter
                                id="filter0_d_343_121520"
                                width="6.533"
                                height="5.667"
                                x=".933"
                                y="1.433"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy={1} />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_343_121520"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_343_121520"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          United States (+1)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="h-4 w-4 me-2"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                              <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                clipRule="evenodd"
                              />
                              <path
                                stroke="#DB1F35"
                                strokeLinecap="round"
                                strokeWidth=".667"
                                d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                              />
                              <path
                                fill="#E6273E"
                                fillRule="evenodd"
                                d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                clipRule="evenodd"
                              />
                            </g>
                          </svg>
                          United Kingdom (+44)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="h-4 w-4 me-2"
                            fill="none"
                            viewBox="0 0 20 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                              <path
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth=".667"
                                d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                              />
                              <path
                                fill="url(#paint0_linear_374_135177)"
                                fillRule="evenodd"
                                d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                clipRule="evenodd"
                              />
                              <path
                                fill="url(#paint1_linear_374_135177)"
                                fillRule="evenodd"
                                d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                clipRule="evenodd"
                              />
                              <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                clipRule="evenodd"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_374_135177"
                                x1={0}
                                x2={0}
                                y1=".5"
                                y2="7.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#fff" />
                                <stop offset={1} stopColor="#F0F0F0" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_374_135177"
                                x1={0}
                                x2={0}
                                y1=".5"
                                y2="7.033"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FF2E3B" />
                                <stop offset={1} stopColor="#FC0D1B" />
                              </linearGradient>
                            </defs>
                          </svg>
                          Australia (+61)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="w-4 h-4 me-2"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                fill="#262626"
                                fillRule="evenodd"
                                d="M0 5.167h19.6V.5H0v4.667z"
                                clipRule="evenodd"
                              />
                              <g filter="url(#filter0_d_374_135180)">
                                <path
                                  fill="#F01515"
                                  fillRule="evenodd"
                                  d="M0 9.833h19.6V5.167H0v4.666z"
                                  clipRule="evenodd"
                                />
                              </g>
                              <g filter="url(#filter1_d_374_135180)">
                                <path
                                  fill="#FFD521"
                                  fillRule="evenodd"
                                  d="M0 14.5h19.6V9.833H0V14.5z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_374_135180"
                                width="19.6"
                                height="4.667"
                                x={0}
                                y="5.167"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                id="filter1_d_374_135180"
                                width="19.6"
                                height="4.667"
                                x={0}
                                y="9.833"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          Germany (+49)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="w-4 h-4 me-2"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.1"
                              height="13.5"
                              x=".25"
                              y=".75"
                              fill="#fff"
                              stroke="#F5F5F5"
                              strokeWidth=".5"
                              rx="1.75"
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.1"
                                height="13.5"
                                x=".25"
                                y=".75"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth=".5"
                                rx="1.75"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                fill="#F44653"
                                d="M13.067.5H19.6v14h-6.533z"
                              />
                              <path
                                fill="#1035BB"
                                fillRule="evenodd"
                                d="M0 14.5h6.533V.5H0v14z"
                                clipRule="evenodd"
                              />
                            </g>
                          </svg>
                          France (+33)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="w-4 h-4 me-2"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                fill="#262626"
                                fillRule="evenodd"
                                d="M0 5.167h19.6V.5H0v4.667z"
                                clipRule="evenodd"
                              />
                              <g filter="url(#filter0_d_374_135180)">
                                <path
                                  fill="#F01515"
                                  fillRule="evenodd"
                                  d="M0 9.833h19.6V5.167H0v4.666z"
                                  clipRule="evenodd"
                                />
                              </g>
                              <g filter="url(#filter1_d_374_135180)">
                                <path
                                  fill="#FFD521"
                                  fillRule="evenodd"
                                  d="M0 14.5h19.6V9.833H0V14.5z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_374_135180"
                                width="19.6"
                                height="4.667"
                                x={0}
                                y="5.167"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                id="filter1_d_374_135180"
                                width="19.6"
                                height="4.667"
                                x={0}
                                y="9.833"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          Germany (+49)
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <label
                  htmlFor="phone-input"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Phone number
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="phone-input"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 bg-gray-50 border border-gray-300 text-gray-900 border border-[#EDEDED] border-solid border-0 border-b-2 text-sm "
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm text-gray-700 font-[500] dark:text-gray-300"
                >
                  Additional Requirements
                </label>
              </div>
              <button
                type="button"
                className="text-white bg-[#FF2D5C] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-8 "
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#EFEFEF] p-4 flex justify-evenly items-center w-full">
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20693.png?updatedAt=1716219760224"
              className="w-12 h-12"
              alt=""
            />
            <p className="roboto font-[400] text-sm text-[#484848] mt-2">
              Book & pay later
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(6).png?updatedAt=1716219760202"
              className="w-12 h-12"
              alt=""
            />
            <p className="roboto font-[400] text-sm text-[#484848] mt-2">
              Flexible trip amendments
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20677.png?updatedAt=1716219760304"
              className="w-12 h-12"
              alt=""
            />
            <p className="roboto font-[400] text-sm text-[#484848] mt-2">
              Free cancellation
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(7).png?updatedAt=1716219760240"
              className="w-12 h-12"
              alt=""
            />
            <p className="roboto font-[400] text-sm text-[#484848] mt-2">
              24/7 in-person support
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[23%] p-20">
            <div className="flex gap-8">
              <p className="text-sm text-gray-400">Home</p>
              <p className="text-sm text-gray-400">Cities</p>
              <p className="text-sm text-black">Rome</p>
            </div>
            <div className="flex gap-3 mt-14">
              <div className="w-[16px] h-[16px] relative top-2 rounded-full border border-[#FF8924] bg-white"></div>
              <h1 className="text-[#FF8924] text-xl font-[500]">At a Glance</h1>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="w-2 h-2 relative top-2 rounded-full bg-gray-400"></div>
              <h1 className="text-gray-400 font-[400] text-sm">
                Transportation in Rome
              </h1>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="w-2 h-2 relative top-2 rounded-full bg-gray-400"></div>
              <h1 className="text-gray-400 font-[400] text-sm">
                Airport Transfers in Rome
              </h1>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="w-2 h-2 relative top-2 rounded-full bg-gray-400"></div>
              <h1 className="text-gray-400 font-[400] text-sm">
                Sightseeing Transportation
              </h1>
            </div>
          </div>
          <div className="w-[100%] mt-40 pr-14">
            Nestled in the heart of Italian Peninsula, Rome is the capital of
            the country and one of the most populated cities in Italy. From its
            rich architecture to rare artefacts, this city is known to possess a
            history like none other. The picturesque atmosphere, the cold wind
            blowing and the serene atmosphere is what makes Rome a must visit
            place for all the travel fanatics out there. <br />
            <br />
            <div className="float-right p-6 py-4">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20144.png?updatedAt=1716221097663"
                className="w-full h-48"
                alt=""
              />
              <p className="text-[#737373] mt-2">
                Rome Civitavecchia |{" "}
                <i className="text-sm">
                  Image by{" "}
                  <span className="text-blue-400">Alejandro Picasso</span>
                </i>
              </p>
            </div>
            A perfect blend of gothic ruins, jaw dropping art and lively nights,
            Rome sets an exemplary example for a place about how it should
            entertain its travellers. The city wholeheartedly welcomes
            travellers from a wide array of interests, from awe inspiring
            monuments to living life at its best, Rome will never fail to
            surprise you with a new place to explore.
            <br />
            <br />
            A perfect blend of gothic ruins, jaw dropping art and lively nights,
            Rome sets an exemplary example for a place about how it should
            entertain its travellers. The city wholeheartedly welcomes
            travellers from a wide array of interests, from awe inspiring
            monuments to living life at its best, Rome will never fail to
            surprise you with a new place to explore.
            <br />
            <br />
            The Roman Empire has been an icon when it comes to historical
            importance. The Roman Empire had cut the ribbons when Augustus
            Caesar announced to be the first emperor of Rome in 31BC and ended
            with the fall of Constantinople in 1453CE. Known to be the centre of
            the Roman Empire, Rome attracts the majority of the crowd due to its
            rich history and politics.
            <br />
            <div className="float-left p-6 py-4">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20143.png?updatedAt=1716221097752"
                alt=""
                className="w-full h-48"
              />
              <p className="text-[#737373] mt-2">
                <i className="text-sm">
                  Image by{" "}
                  <span className="text-blue-400">VIA DEI MONTI PARIOLI</span>
                </i>
              </p>
            </div>
            <br />
            Referred to as ‘An Eternal City’ in the beginning of the history,
            Rome is seen to be a dream for music lovers due to the Parco Della
            Musica which is known to be one of the largest music venues in the
            world. Not only music, Rome has also set itself in the most wanted
            places to visit in the world and is the third most visited places in
            the entire Europe. This place has experienced arts from different
            periods and became a home for some of the most renowned artists such
            as Borromini, Bernini, Carracci and Cortona.
            <br />
            <br />
            Embracing the ancient art, Rome has now decided to use its
            innovation to give birth to contemporary art to keep enhancing their
            love for art and architecture, National Museum of the 21st Century
            Arts is a live example of that. The Italian cuisine has somehow
            managed to be a king of all cuisines, from the Carciofi alla romana
            to the Spaghetti alla carbonara- Delicious spaghetti topped with
            bacon, smokey eggs and pecorino is what makes it mouth watering.
            Rome has a series of reasons to attract you and slip you into its
            warm arms to rejuvenate your soul with its authentic art,
            awe-inspiring architecture and mouth-watering food.
          </div>
        </div>
        <div className="p-14 w-full mt-10">
          <h1 className="text-[#484848] text-2xl font-bold">Other cities </h1>
          <div className="w-full flex flex-wrap mt-5 gap-4">
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/181115-naples-full%201.png?updatedAt=1716221097533')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Napples
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/florence-1747356_1280%201.png?updatedAt=1716221097536')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Florence
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/181115-naples-full%201.png?updatedAt=1716221097533')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Napples
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/florence-1747356_1280%201.png?updatedAt=1716221097536')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Florence
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/181115-naples-full%201.png?updatedAt=1716221097533')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Napples
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/florence-1747356_1280%201.png?updatedAt=1716221097536')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Florence
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/181115-naples-full%201.png?updatedAt=1716221097533')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Napples
            </div>
            <div className="bg-[url('https://ik.imagekit.io/ok2wgebfs/florence-1747356_1280%201.png?updatedAt=1716221097536')] bg-cover flex justify-center items-center text-white w-[23%] h-40 text-2xl rounded-lg">
              Florence
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto w-full p-14 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="https://ik.imagekit.io/ok2wgebfs/Rydeu%202.png?updatedAt=1716222986870"
                  className="h-12 me-3"
                  alt="FlowBite Logo"
                />
              </a>
              <p className="text-white text-md mt-1">
                Solution for all ground transfers
              </p>
              <p className="text-white text-md mt-12">Connect with us</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-[70%]">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  Company
                </h2>
                <ul className="text-gray-400 font-[100] dark:text-gray-400 font-medium">
                  <li className="mb-4">About us</li>
                  <li className="mb-4">Privacy Policy</li>
                  <li className="mb-4">Terms and conditions</li>
                  <li className="mb-4">Imprint</li>
                  <li className="mb-4">Careers / Jobs</li>
                  <li className="mb-4">Sitemap</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  Help center
                </h2>
                <ul className="text-gray-400 font-[100] dark:text-gray-400 font-medium">
                  <li className="mb-4">Contact us</li>
                  <li className="mb-4">Customer FAQs</li>
                  <li className="mb-4">Business FAQs</li>
                  <li className="mb-4">Supplier FAQs</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  Our Services
                </h2>
                <ul className="text-gray-400 font-[100] dark:text-gray-400 font-medium">
                  <li className="mb-4">Airport Transfer</li>
                  <li className="mb-4">City Transfer</li>
                  <li className="mb-4">Hourly Transfer</li>
                  <li className="mb-4">Business</li>
                  <li className="mb-4">Supplier</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              Copyright ©️ 2020 rydeu.com All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
