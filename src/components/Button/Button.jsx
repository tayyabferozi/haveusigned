import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, to, children, ...rest }) => {
  let Comp;
  if (to) {
    Comp = ({ to, className, children }) => {
      return (
        <Link className={className} to={to} {...rest}>
          {children}
        </Link>
      );
    };
  } else {
    Comp = ({ className, children }) => {
      return (
        <button className={className} {...rest}>
          {children}
        </button>
      );
    };
  }

  return (
    <Comp
      to={to}
      className={clsx(className, "btn btn-large waves-effect primary")}
    >
      {children}
    </Comp>
  );
};

export default Button;
