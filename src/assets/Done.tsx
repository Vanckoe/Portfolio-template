import React from "react";

type DoneProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Done: React.FC<DoneProps> = ({
  color = "white",
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_203_4813)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM18.0048 8.94603C18.4483 8.39155 18.3585 7.58247 17.8039 7.13889C17.2495 6.6953 16.4404 6.78519 15.9968 7.33968L9.91812 14.938L7.48647 13.1143C6.91841 12.6882 6.11253 12.8034 5.68647 13.3714C5.26044 13.9395 5.37555 14.7454 5.94362 15.1714L9.37219 17.7429C9.92775 18.1596 10.7138 18.0597 11.1476 17.5174L18.0048 8.94603Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_4813">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Done;
