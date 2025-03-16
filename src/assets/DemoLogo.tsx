import React from "react";

type DemoLogoProps = {
  color?: string;
  width?: string;
  height?: string;
};

const DemoLogo: React.FC<DemoLogoProps> = ({
  color = "#3E3E3E",
  width = "23",
  height = "25",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.85303"
        y="6.74548"
        width="11.509"
        height="11.509"
        rx="5.7545"
        fill={color}
      />
      <rect
        opacity="0.1"
        y="0.766357"
        width="22.7103"
        height="23.4673"
        rx="11.3551"
        fill={color}
      />
    </svg>
  );
};

export default DemoLogo;
