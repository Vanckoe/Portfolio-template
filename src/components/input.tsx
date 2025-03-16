import React, { forwardRef } from "react";
import clsx from "clsx";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  iconLeft?: React.ReactNode;
  containerClassName?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, iconLeft, className, containerClassName, error, ...rest }, ref) => {
    return (
      <div className={clsx("relative  w-full", containerClassName)}>
        {iconLeft && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
            {iconLeft}
          </div>
        )}
        <input
          className={clsx(
            "w-full  border border-[#CCCCCC] px-6 py-5 text-base font-medium text-[#484848] placeholder:text-base placeholder:font-semibold placeholder-[#CACACA] focus:outline-none",
            { "pl-12": iconLeft },
            className
          )}
          placeholder={label || "Введите значение"}
          ref={ref}
          {...rest}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
