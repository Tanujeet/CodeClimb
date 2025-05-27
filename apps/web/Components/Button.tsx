import clsx from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={clsx(
        "  bg-violet-50 group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-4 py-2 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="  relative inline-flex overflow-hidden  text-xs uppercase">
        <div className="  translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
