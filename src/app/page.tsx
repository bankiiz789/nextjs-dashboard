import React from "react";
import { users } from "./lib/placeholder-data";
import clsx from "clsx";
import { roboto } from "./ui/fonts";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link
        key="1"
        href="http://localhost:3000/dashboard"
        className="border-2 rounded-lg hover:bg-gray-400 p-2"
      >
        GO TO DASH BOARD
      </Link>
    </div>
  );
};

export default page;
