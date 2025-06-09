import * as React from "react";
import style from "./Button.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  type?: HTMLButtonElement["type"];
};

const Button = ({ type, onClick, isLoading, children }: ButtonProps) => {
  return (
    <button
      className={style.button}
      disabled={isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
