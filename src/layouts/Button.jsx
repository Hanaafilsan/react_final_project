import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={` bg-black text-white rounded-full px-8 py-2 font-medium hover:bg-[#4189dd] hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;