import React from "react";

type PaperProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Paper: React.FC<PaperProps> = ({
  color = "#1151AB",
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
        d="M13.3333 14.6663H2.66667C2.29848 14.6663 2 14.3679 2 13.9997V1.99967C2 1.63149 2.29848 1.33301 2.66667 1.33301H13.3333C13.7015 1.33301 14 1.63149 14 1.99967V13.9997C14 14.3679 13.7015 14.6663 13.3333 14.6663ZM4.66667 3.99967V6.66634H7.33333V3.99967H4.66667ZM4.66667 7.99967V9.33301H11.3333V7.99967H4.66667ZM4.66667 10.6663V11.9997H11.3333V10.6663H4.66667ZM8.66667 4.66634V5.99967H11.3333V4.66634H8.66667Z"
        fill={color}
      />
    </svg>
  );
};

export default Paper;
