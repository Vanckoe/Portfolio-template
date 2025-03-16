import React from "react";

type RightArrProps = {
  color?: string;
  width?: string;
  height?: string;
};

const RightArr: React.FC<RightArrProps> = ({
  color = "#3E3E3E",
  width = "7",
  height = "9",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.28105 4.50047L0.981201 1.20062L1.92401 0.257812L6.16665 4.50047L1.92401 8.74306L0.981201 7.80027L4.28105 4.50047Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArr;
