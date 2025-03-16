import React from "react";

type UserSmileProps = {
  color?: string;
  width?: string;
  height?: string;
};

const UserSmile: React.FC<UserSmileProps> = ({
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
        d="M15.9998 29.3334C8.63604 29.3334 2.6665 23.3638 2.6665 16.0001C2.6665 8.63628 8.63604 2.66675 15.9998 2.66675C23.3636 2.66675 29.3332 8.63628 29.3332 16.0001C29.3332 23.3638 23.3636 29.3334 15.9998 29.3334ZM9.33317 16.0001C9.33317 19.6819 12.3179 22.6667 15.9998 22.6667C19.6817 22.6667 22.6665 19.6819 22.6665 16.0001H19.9998C19.9998 18.2093 18.209 20.0001 15.9998 20.0001C13.7906 20.0001 11.9998 18.2093 11.9998 16.0001H9.33317Z"
        fill={color}
      />
    </svg>
  );
};

export default UserSmile;
