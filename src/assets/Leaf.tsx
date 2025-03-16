import React from "react";

type LeafProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Leaf: React.FC<LeafProps> = ({
  color = "white",
  width = "42",
  height = "42",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.7465 5.25V8.75C36.7465 25.5979 27.3446 33.25 15.7466 33.25L12.4187 33.2498C12.7888 27.9783 14.4295 24.7884 18.7143 20.9981C20.8213 19.1342 20.6439 18.0581 19.6051 18.6762C12.4588 22.9278 8.90949 28.6758 8.75208 37.8528L8.74658 38.5H5.24658C5.24658 36.1153 5.44907 33.9495 5.85166 31.9693C5.44827 29.7047 5.24658 26.6308 5.24658 22.75C5.24658 13.085 13.0816 5.25 22.7465 5.25C26.2465 5.25 29.7465 7 36.7465 5.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Leaf;
