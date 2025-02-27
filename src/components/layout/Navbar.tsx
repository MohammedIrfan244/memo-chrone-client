import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between px-4 shadow-md">
      <h1 className="text-xl font-bold">Memo Chrone</h1>
      <Link href="/auth/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
