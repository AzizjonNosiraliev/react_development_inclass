import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-white p-2 font-serif bg-gray-900 mt-10 border-t-2 border-white-700 fixed-bottom">
        <div className="text-center p-3">
          © 2023 Weather Condition App
          <a className="text-white" href="">
            Weather App
          </a>
        </div>
      </footer>
    </div>
  );
}
