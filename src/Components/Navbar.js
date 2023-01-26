import React, { useState, useEffect } from "react";

function Navbar() {
  let [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  let dateString = `${day} ${month} ${year}`;
  return (
    <div className="h-[800px] w-screen main">
      <div className=" text-sm pt-12 space-x-40  text-white font-nunito flex justify-evenly w-screen ">
        <div className="flex  justify-center items-center space-x-6 opacity">
          <div className="link">SHOP</div>
          <div className="link">DISCOVER</div>
          <div className="link">CO-BRAND</div>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div>
            <img
              className="w-10 rounded-full"
              src="https://media.glassdoor.com/sql/4197331/chilly-s-bottles-squarelogo-1636379727206.png"
              alt=""
            />
          </div>
          <div className="font-semibold text-lg">CHILLY'S</div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="mr-7">REFER A FRIEND</div>
          <div>
            <svg
              className="w-6 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5H20"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8H17"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              className="w-7 fill-transparent hover:fill-pink-200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M15.4945 12H15.5035"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M8.49451 12H8.50349"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-2/3 mt-20 ml-10 text-white  ">
        <h3>{dateString}</h3>
        <h1 className="font-semibold  text-[90px] leading-[100px] font-nunito">
          Don’t give up now! It’s time to stick to your 2023 Resolutions
        </h1>
      </div>
    </div>
  );
}
export default Navbar;
