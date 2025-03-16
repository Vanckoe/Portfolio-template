import React from "react";

type ReloadProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Reload: React.FC<ReloadProps> = ({
  color = "white",
  width = "32",
  height = "32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9998 5.33341C12.3351 5.33341 9.09994 7.18176 7.17908 10.0001H10.6665V12.6667H2.6665V4.66675H5.33317V7.99923C7.76492 4.76229 11.6367 2.66675 15.9998 2.66675C23.3636 2.66675 29.3332 8.63628 29.3332 16.0001H26.6665C26.6665 10.109 21.8909 5.33341 15.9998 5.33341ZM5.33317 16.0001C5.33317 21.8911 10.1088 26.6667 15.9998 26.6667C19.6646 26.6667 22.8997 24.8183 24.8206 22.0001H21.3332V19.3334H29.3332V27.3334H26.6665V24.0009C24.2348 27.2378 20.363 29.3334 15.9998 29.3334C8.63604 29.3334 2.6665 23.3638 2.6665 16.0001H5.33317Z"
        fill={color}
      />
    </svg>
  );
};

export default Reload;
