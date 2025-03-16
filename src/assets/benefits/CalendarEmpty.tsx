import React from "react";

type CalendarEmptyProps = {
  color?: string;
  width?: string;
  height?: string;
};

const CalendarEmpty: React.FC<CalendarEmptyProps> = ({
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
        d="M22.6665 3.99992H27.9998C28.7362 3.99992 29.3332 4.59688 29.3332 5.33325V26.6666C29.3332 27.403 28.7362 27.9999 27.9998 27.9999H3.99984C3.26346 27.9999 2.6665 27.403 2.6665 26.6666V5.33325C2.6665 4.59688 3.26346 3.99992 3.99984 3.99992H9.33317V1.33325H11.9998V3.99992H19.9998V1.33325H22.6665V3.99992ZM5.33317 11.9999V25.3333H26.6665V11.9999H5.33317ZM7.99984 17.3333H14.6665V22.6666H7.99984V17.3333Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarEmpty;
