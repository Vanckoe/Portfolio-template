import React from "react";
import { MoonLoader } from "react-spinners";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "#004FFF",
}) => {
  const sizeMap = {
    sm: 20,
    md: 30,
    lg: 40,
  };

  return <MoonLoader size={sizeMap[size]} color={color} />;
};

export default Spinner;
