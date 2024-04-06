import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="flex justify-around">
      {/* logo */}
      <div>
        <div>logo</div>
      </div>
      {/* menu */}
      <div className="p-4">
        <div>Home</div>
        <div>About us</div>
        <div>Contact us</div>
      </div>
    </div>
  );
}
