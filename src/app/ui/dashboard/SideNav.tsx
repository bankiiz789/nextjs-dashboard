import React from "react";
import Link from "next/link";
import NavLink from "@/app/dashboard/nav-link";

type Props = {};

export default function SideNav({}: Props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavLink />
      <div className="flex justify-center items-center p-2">
        <div className="hover:bg-blue-300 w-full text-center p-2 rounded-lg">
          Logout
        </div>
      </div>
    </div>
  );
}
