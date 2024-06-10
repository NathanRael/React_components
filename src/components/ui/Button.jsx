/* eslint-disable react/prop-types */
import {
  defaultTransition,
  radiousVariant,
  buttonColorVariant,
} from "../../styles/globals";

const sizeVariant = {
  md: "px-6 py-3 gap-3",
  lg: "px-8 py-4 gap-4",
};

const Button = ({
  children = "Button",
  className = "",
  size = "md",
  variant = "primary",
  icon = "",
  rounded = "xl",
  onClick,
  transition = defaultTransition,
  inverseIcon = false,
  disabled = false,
  block = false,
  loading = false,
}) => {
  return (
    <>
      {!icon ? (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`overflow-hidden select-none text-base font-RobotoMd  
          ${radiousVariant[rounded]}
          ${block ? "w-full" : "w-fit"} ${
            disabled
              ? buttonColorVariant["disabled"]
              : buttonColorVariant[variant]
          } ${transition} ${sizeVariant[size]} ${className}`}
        >
          {loading ? (
            <i className="bi-hourglass-top animate-spin"></i>
          ) : (
            children
          )}
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`overflow-hidden select-none flex items-center justify-center text-base font-RobotoMd    
          ${radiousVariant[rounded]}  
          ${inverseIcon ? "flex-row-reverse" : "flex-row"} 
          ${block ? "w-full" : "w-fit"} 
          ${
            disabled
              ? buttonColorVariant["disabled"]
              : buttonColorVariant[variant]
          } ${transition} ${sizeVariant[size]} ${className}`}
        >
          {loading ? (
            <i className="bi-hourglass-top animate-spin"></i>
          ) : (
            <>
              <i className={`${icon} ${size === "md" ? "" : "text-icon"}`}></i>
              <p>{children}</p>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
