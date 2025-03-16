import React from "react";

type DownProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Down: React.FC<DownProps> = ({
  color = "#3E3E3E",
  width = "16",
  height = "16",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99953 9.28113L11.2994 5.98128L12.2422 6.92409L7.99953 11.1667L3.75694 6.92409L4.69973 5.98128L7.99953 9.28113Z"
        fill={color}
      />
    </svg>
  );
};

export default Down;
