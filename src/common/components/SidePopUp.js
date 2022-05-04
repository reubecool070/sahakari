import React from "react";
import { Link } from "react-router-dom";

const SidePopUp = () => {
  return (
    <ul class="list list-shortcut">
      <li>
        <Link to="#emi">
          <i class="uil uil-calculator-alt text-white"></i>
          <span>Calculator</span>
        </Link>
      </li>
    </ul>
  );
};

export default SidePopUp;
