import React from "react";

type XProps = {
  color?: string;
  width?: string;
  height?: string;
};

const X: React.FC<XProps> = ({
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
        d="M14.1147 15.9998L3.72412 5.60925L5.60973 3.72363L16.0003 14.1141L26.3908 3.72363L28.2764 5.60925L17.8859 15.9998L28.2764 26.3902L26.3908 28.276L16.0003 17.8854L5.60973 28.276L3.72412 26.3902L14.1147 15.9998Z"
        fill={color}
      />
    </svg>
  );
};

export default X;
