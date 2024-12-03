import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-15 bg-zinc-900 z-10">
      <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600">
        <div className="n-left flex items-center">
          <div className="links flex gap-14 ml-2">
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="w-[2px] h-8 bg-zinc-600"></span>
              ) : (
                <a
                  key={index}
                  className="font-regular text-md flex items-center gap-2 hover:text-gray-500"
                  href="#"
                >
                  {index === 0 && (
                    <span
                      key={index}
                      style={{ boxShadow: "0 0 0.46em #00FF19" }}
                      className="animate-ping inline-block w-1.5 h-1.5 rounded-full bg-green-500"
                    ></span>
                  )}
                  {elem}
                </a>
              )
            )}
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
