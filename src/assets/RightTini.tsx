import React from "react";

type RightTiniProps = {
  color?: string;
  width?: string;
  height?: string;
};

const RightTini: React.FC<RightTiniProps> = ({
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
        d="M8.78118 8.50047L5.48132 5.20062L6.42414 4.25781L10.6668 8.50047L6.42414 12.7431L5.48132 11.8003L8.78118 8.50047Z"
        fill={color}
      />
    </svg>
  );
};

export default RightTini;
<svg
  width="16"
  height="17"
  viewBox="0 0 16 17"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="#3E3E3E" />
</svg>;
