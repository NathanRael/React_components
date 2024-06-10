/* eslint-disable react/prop-types */
import { defaultTransition, buttonColorVariant } from "../../styles/globals";

const iconSizeVariant = {
  md: "size-10 p-2",
  lg: "size-12 p-2",
};

const Icon = ({
  icon = "bi-rocket",
  size = "lg",
  variant = "primary",
  className = "",
  transition = defaultTransition,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={` flex items-center justify-center rounded-full  ${
        disabled ? buttonColorVariant["disabled"] : buttonColorVariant[variant]
      } ${iconSizeVariant[size]} ${transition} ${className}
       `}
      onClick={onClick}
    >
      <i className={`${icon} ${size === "md" ? "" : "text-icon"}`}></i>
    </button>
  );
};

export default Icon;
