import React from "react";

function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className="flex text-[1.5rem] items-center flex-col text-center text-[#aefff8] md:items-start md:text-left">
      <span className="block mr-4 text-[#18e0d0] w-8 h-8">
        <Icon />
      </span>
      <span className="block">{children}</span>
    </li>
  );
}

export default LogisticsItem;
