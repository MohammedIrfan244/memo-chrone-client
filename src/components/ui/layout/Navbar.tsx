import React from "react";
import UserProfile from "../UserProfile";

function Navbar() {
  return (
    <div className="w-full h-16 bg-black flex fixed top-0 left-0 items-center justify-between px-4 z-50">
      <h3 className="text-white font-bold">memo chrone</h3>
      <UserProfile />
    </div>
  );
}

export default Navbar;
