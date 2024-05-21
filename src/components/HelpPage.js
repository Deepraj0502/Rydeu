import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";

export default function HelpPage() {
  const [chatExp, setChatExp] = useState(false);
  const [socialExp, setSocialExp] = useState(false);
  const [sendExp, setSendExp] = useState(false);
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
        <div className="px-10 flex flex-wrap items-center justify-between mx-auto p-4">
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
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div className="flex gap-1 mr-4 cursor-pointer">
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
            <div class="flex items-center md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse bg-[#DFDFDF] px-2 rounded-full">
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
          src="https://ik.imagekit.io/ok2wgebfs/Rectangle%20431.png?updatedAt=1716207653751"
          alt=""
          className="absolute w-full object-cover z-[-1]"
        />
        <h1 className="montserrat text-4xl font-bold text-[#073A4D] mt-40">
          Hello, how can we help you?
        </h1>
        <p className="montserrat font-[500] text-xl mt-5 text-[#484848]">
          Find Travel guide, FAQ, chat,
        </p>
        <div className="flex justify-between w-[80%] mt-32">
          <div className="bg-white rounded-xl p-6 flex gap-10 w-[49%] px-10 shadow-lg items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(1).png?updatedAt=1716207595561"
              alt=""
              className="w-14 h-14"
            />
            <div>
              <p className="montserrat font-bold">FAQ</p>
              <p className="montserrat text-[#A8A8A8] font-[500] text-md mt-2">
                Lorem ipsum doolor sit amet
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex gap-10 w-[49%] px-10 shadow-lg items-center">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(2).png?updatedAt=1716207595556"
              alt=""
              className="w-12 h-14"
            />
            <div>
              <p className="montserrat font-bold">Travel Guide</p>
              <p className="montserrat text-[#A8A8A8] font-[500] text-md mt-2">
                Lorem ipsum doolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl p-6 px-10 shadow-lg mt-10 cursor-pointer mb-10">
          <div
            className=" flex gap-10  items-center "
            onClick={() => setChatExp(!chatExp)}
          >
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(3).png?updatedAt=1716207595609"
              alt=""
              className="w-14 h-14"
            />
            <div className="w-[80%]">
              <p className="montserrat font-bold">Chat</p>
              <p className="montserrat text-[#A8A8A8] font-[500] text-md mt-2">
                Lorem ipsum doolor sit amet
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Arrow%2011.png?updatedAt=1716207595594"
              alt=""
              className={chatExp ? "rotate-180" : ""}
            />
          </div>
          <div
            className={
              chatExp ? "flex gap-20 justify-center mt-8 bg-white" : "hidden"
            }
          >
            <div className="flex flex-col justify-center items-center rounded-lg p-4 hover:bg-[#DEF6F5]">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20609.png?updatedAt=1716211241848"
                alt=""
                className=""
              />
              <p className="montserrat text-sm">Telegram</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg p-4 hover:bg-[#DEF6F5]">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Group%20610.png?updatedAt=1716211241940"
                alt=""
                className=""
              />
              <p className="montserrat text-sm">Whatsapp</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg p-4 hover:bg-[#DEF6F5]">
              <img
                src="https://ik.imagekit.io/ok2wgebfs/integrations_freshchat%202.png?updatedAt=1716211242042"
                alt=""
                className=""
              />
              <p className="montserrat text-sm">Live Chat</p>
            </div>
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl p-6 px-10 shadow-lg mt-4 cursor-pointer mb-10">
          <div
            className=" flex gap-10  items-center "
            onClick={() => setSocialExp(!socialExp)}
          >
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Group%20(4).png?updatedAt=1716207595590"
              alt=""
              className="w-14 h-14"
            />
            <div className="w-[80%]">
              <p className="montserrat font-bold">Social</p>
              <p className="montserrat text-[#A8A8A8] font-[500] text-md mt-2">
                Lorem ipsum doolor sit amet
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Arrow%2011.png?updatedAt=1716207595594"
              alt=""
              className={socialExp ? "rotate-180" : ""}
            />
          </div>
          <div
            className={
              socialExp
                ? "flex gap-10 justify-center mt-8 bg-white mb-5"
                : "hidden"
            }
          >
            <img
              src="https://ik.imagekit.io/ok2wgebfs/512px-Facebook_f_logo_(2019)%201.png?updatedAt=1716211241793"
              alt=""
              className="relative hover:bottom-1"
            />
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Instagram_logo_2016%201.png?updatedAt=1716211241776"
              alt=""
              className="relative hover:bottom-1"
            />
            <img
              src="https://ik.imagekit.io/ok2wgebfs/950px-Twitter_bird_logo_2012%201.png?updatedAt=1716211869026"
              alt=""
              className="relative hover:bottom-1"
            />
            <img
              src="https://ik.imagekit.io/ok2wgebfs/linkedin-icon-2%201.png?updatedAt=1716211241853"
              alt=""
              className="relative hover:bottom-1"
            />
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl p-6 px-10 shadow-lg mt-4 cursor-pointer mb-40">
          <div
            className=" flex gap-10  items-center "
            onClick={() => setSendExp(!sendExp)}
          >
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Screenshot%202024-05-20%20190821.png?updatedAt=1716212321405"
              alt=""
              className="w-14 h-14"
            />
            <div className="w-[80%]">
              <p className="montserrat font-bold">Send Query</p>
              <p className="montserrat text-[#A8A8A8] font-[500] text-md mt-2">
                Lorem ipsum doolor sit amet
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Arrow%2011.png?updatedAt=1716207595594"
              alt=""
              className={sendExp ? "rotate-180" : ""}
            />
          </div>
          <div
            className={
              sendExp
                ? "flex gap-10 justify-center mt-8 bg-white mb-5"
                : "hidden"
            }
          >
            <form className="w-[60%]">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-[#484848] dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-[#484848] dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm text-[#484848] dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="order"
                    className="block mb-2 text-sm text-[#484848] dark:text-white"
                  >
                    Order no.
                  </label>
                  <input
                    type="text"
                    id="order"
                    name="order"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="query"
                  className="block mb-2 text-sm text-[#484848] dark:text-white"
                >
                  Your Query
                </label>
                <textarea
                  type="text"
                  id="query"
                  name="query"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <center>
                <button
                  type="submit"
                  className="text-white bg-[#FD2E5A] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg w-full sm:w-auto px-16 py-2.5 text-center"
                >
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
