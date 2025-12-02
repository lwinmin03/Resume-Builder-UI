import React from "react";
import { ArrowUpLeftSquare, ArrowUpRightFromSquare } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

const FooterButton = (): JSX.Element => {
  return (
    <button
      className="border-2 cursor-pointer border-slate-950/60 rounded-md 
                 antialiased hover:bg-slate-950/90 hover:text-white 
                 transition-colors duration-200 ease-linear flex justify-around items-center gap-2.5 px-4 py-1"
    >
      <span>Email</span>
      <ArrowUpRightFromSquare size={16} />
    </button>
  );
};

export default FooterButton;
