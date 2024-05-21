import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function BookingRequest() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="flex bg-[#f2f2f2] ">
      <div
        className="w-20 min-h-[100vh]"
        style={{
          background:
            "linear-gradient(89.71deg, #004A85 0.11%, #004A85 133.79%)",
        }}
      >
        <img
          src="https://ik.imagekit.io/ok2wgebfs/Untitled-1%201.png?updatedAt=1716286394972"
          alt=""
          className="m-auto mt-4 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className="mt-12 w-full flex justify-center items-center cursor-pointer bg-[#0f558c] border border-0 border-l-4 border-white py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/bell%201.png?updatedAt=1716286394759"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center cursor-pointer py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/Group%2037.png?updatedAt=1716286392628"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center cursor-pointer py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/Group%203.png?updatedAt=1716286392812"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center cursor-pointer py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/Vector%20(1).png?updatedAt=1716286392844"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center cursor-pointer py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/account%202.png?updatedAt=1716286392812"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center cursor-pointer py-4">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/bill%202.png?updatedAt=1716286392736"
            alt=""
          />
        </div>
      </div>
      <div className="w-full p-8">
        <div className="flex justify-end items-center gap-2">
          <div className="bg-[#004A85] flex justify-center items-center rounded-full w-8 h-8 text-white text-lg">
            D
          </div>
          <p className="text-lg ">Deepraj Pagare</p>
          <img
            src="https://ik.imagekit.io/ok2wgebfs/Arrow%2011.png?updatedAt=1716207595594"
            alt=""
            className="rotate-180 w-4 h-2.5 relative top-0.5 cursor-pointer"
          />
        </div>
        <div className="flex gap-1 items-center">
          <img
            src="https://ik.imagekit.io/ok2wgebfs/Group%20125.png?updatedAt=1716286392817"
            alt=""
            className="w-7 h-4 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <p className="text-2xl relative bottom-0.5 ml-2">Requests</p>
        </div>
        <div className="p-8 bg-white mt-4 mb-4">
          <div className="border border-0 border-y-2 border-gray-300 py-4 pb-8">
            <h1 className="text-lg font-[500]">Offer Ancillary</h1>
            <div className="flex gap-10 mt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#FF8924] rounded-full bg-[#ffece3] p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20126.png?updatedAt=1716286392807"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Porter Service</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#B9B9B9] rounded-full bg-transparent p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20126%20(1).png?updatedAt=1716286392457"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Wifi</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#FF8924] rounded-full bg-[#ffece3] p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20126.png?updatedAt=1716286392807"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Child Seat</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#B9B9B9] rounded-full bg-transparent p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20(8).png?updatedAt=1716286392623"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Wheel Chair</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#B9B9B9] rounded-full bg-transparent p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20126%20(1).png?updatedAt=1716286392457"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Meet & Greet</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#FF8924] rounded-full bg-[#ffece3] p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20(9).png?updatedAt=1716286392850"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Bottled Water</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center items-center border border-1 border-[#B9B9B9] rounded-full bg-transparent p-6">
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/Group%20(8).png?updatedAt=1716286392623"
                    alt=""
                    className="w-10 h-10 z-10 object-contain"
                  />
                </div>
                <p className="text-sm">Phone Charger</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-lg font-[500]">Offer Price</h1>
            <div className="flex mt-4">
              <div className="w-[35%] border border-0 border-r-2 border-gray-300 pr-12">
                <>
                  <p className="text-sm">Type of booking</p>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className=" bg-[#F3F3F3] border border-[#E2E2E2] font-medium rounded-lg text-sm px-5 py-2.5 text-black text-center inline-flex items-center w-full mt-3 justify-between"
                    type="button"
                  >
                    Select Type{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
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
                  {/* Dropdown menu */}
                  <div
                    id="dropdown"
                    className="z-10  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[27%] dark:bg-gray-700"
                  >
                    <ul
                      className="text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="text-black font-[500] text-sm py-3 hover:bg-gray-200 px-4 cursor-pointer">
                        Pre-Payment{" "}
                        <span className="font-[400] text-gray-400 ">
                          (Full amount paid on the website)
                        </span>
                      </li>
                      <li className="text-black font-[500] text-sm py-3 hover:bg-gray-200 px-4 cursor-pointer">
                        Payment on pickup{" "}
                        <span className="font-[400] text-gray-400 ">
                          (Reservation amount paid on website)
                        </span>
                      </li>
                      <li className="text-black font-[500] text-sm py-3 hover:bg-gray-200 px-4 cursor-pointer">
                        Both{" "}
                      </li>
                    </ul>
                  </div>
                </>
                <div className="flex justify-between mt-8">
                  <p className="text-sm font-[500]">Offer Available until</p>
                  <p className="text-sm font-[500]">10th May, 19:00</p>
                </div>
              </div>
              <div className="w-[32%] ml-4 px-4">
                <h1 className="text-sm font-[500]">Pre-Payment</h1>
                <div className="bg-[#ECF4FC] p-4 rounded-sm mt-3">
                  <p className="text-md">
                    You get{" "}
                    <span className="float-right font-[500] text-xl text-[#484848]">
                      € 425
                    </span>
                  </p>
                  <p className="text-md mt-3">
                    Rydeu Commission 15%{" "}
                    <span className="float-right font-[500] text-xl text-[#484848]">
                      € 75
                    </span>
                  </p>
                  <div className="py-3 border border-0 border-t-2 border-gray-300 mt-10">
                    <p className="text-md font-[700]">
                      Total Offer Price{" "}
                      <span className="float-right font-[500] text-2xl text-[#33B20C] relative bottom-1">
                        € 500
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start p-4 text-sm text-[#726F6F] rounded-lg dark:bg-gray-800 dark:text-gray-300"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3 relative top-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#726F6F"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    Customer pays the full amount on the website while booking.
                  </div>
                </div>
              </div>
              <div className="w-[32%] ml-4 px-4">
                <h1 className="text-sm font-[500]">Pre-Payment</h1>
                <div className="bg-[#ECF4FC] p-4 rounded-sm mt-3">
                  <p className="text-md">
                    You get{" "}
                    <span className="float-right font-[500] text-xl text-[#484848]">
                      € 400
                    </span>
                  </p>
                  <p className="text-md mt-3">
                    Rydeu Commission 20%{" "}
                    <span className="float-right font-[500] text-xl text-[#484848]">
                      € 100
                    </span>
                  </p>
                  <div className="py-3 border border-0 border-t-2 border-gray-300 mt-10">
                    <p className="text-md font-[700]">
                      Total Offer Price{" "}
                      <span className="float-right font-[500] text-2xl text-[#33B20C] relative bottom-1">
                        € 500
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start p-4 text-sm text-[#726F6F] rounded-lg dark:bg-gray-800 dark:text-gray-300"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3 relative top-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#726F6F"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    Customer pays only the commission amount on the website to
                    reserve the booking. Balance amount is paid to the driver
                    during pickup.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-[#FF2D5C] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-60 mt-8"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
