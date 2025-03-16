import React from "react";

type BurgerProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Burger: React.FC<BurgerProps> = ({
  color = "#3E3E3E",
  width = "28",
  height = "28",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 4.66666H24.5V6.99999H3.5V4.66666ZM3.5 12.8333H24.5V15.1667H3.5V12.8333ZM3.5 21H24.5V23.3333H3.5V21Z"
        fill={color}
      />
    </svg>
  );
};

export default Burger;
