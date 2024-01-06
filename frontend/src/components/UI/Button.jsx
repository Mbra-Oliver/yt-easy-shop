import React from "react";

export default function Button({ disabled, ...props }) {
  const handleClick = (event) => {
    if (!disabled) {
      props.onClick && props.onClick(event);
    }
  };

  return (
    <button
      className={`${props.custom_class} ${
        disabled && "disabled-button"
      } defaultPrimaryBtn`}
      {...props}
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
}
