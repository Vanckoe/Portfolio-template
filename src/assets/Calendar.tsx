import React from "react";

type CalendarProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Calendar: React.FC<CalendarProps> = ({
  color = "white",
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
        d="M1.33325 7.33317H14.6666V13.3332C14.6666 13.7014 14.3681 13.9998 13.9999 13.9998H1.99992C1.63173 13.9998 1.33325 13.7014 1.33325 13.3332V7.33317ZM11.3333 1.99984H13.9999C14.3681 1.99984 14.6666 2.29832 14.6666 2.6665V5.99984H1.33325V2.6665C1.33325 2.29832 1.63173 1.99984 1.99992 1.99984H4.66658V0.666504H5.99992V1.99984H9.99992V0.666504H11.3333V1.99984Z"
        fill={color}
      />
    </svg>
  );
};

export default Calendar;
