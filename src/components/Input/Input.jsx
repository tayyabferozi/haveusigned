import clsx from "clsx";
import React from "react";

const Input = ({
  rootClassName,
  className,
  label,
  id,
  textarea,
  noMargin,
  errorMsg,
  ...rest
}) => {
  const classNames = clsx(className, "form-control");
  return (
    <div className={clsx(rootClassName, !noMargin && "mb-5")}>
      {label && <label htmlFor={id}>{label}</label>}
      {textarea ? (
        <textarea
          className={classNames}
          id={id}
          cols="30"
          rows="10"
          {...rest}
        />
      ) : (
        <input className={classNames} id={id} {...rest} />
      )}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
    </div>
  );
};

export default Input;
