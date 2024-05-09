/* eslint-disable react/prop-types */
import { inputSizeVariant, inputVariant, radiousVariant } from "./globals";

const SearchBar = ({
  className = "",
  placeholder = "Search something ...",
  size = "lg",
  radious = radiousVariant["default"],
  onClick,
  value,
  setValue = () => {},
  variant = "outline",
}) => {
  return (
    <div
      className={`text-primary bg-black-10 flex  items-center w-[320px] gap-4 ${className} ${inputSizeVariant[size]}  ${radiousVariant[radious]} ${inputVariant[variant]}`}
    >
      <i
        onClick={() => {
          onClick(value);
          setValue("");
        }}
        className="bi bi-search cursor-pointer"
      ></i>
      <input
        type="text"
        className={`flex-1 outline-0 border-0 bg-[rgba(0,0,0,0)] text-black-80 placeholder:text-black-80 dark:placeholder:text-white-60 dark:text-white-60 text-base outline-none`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setValue("");
          } else if (e.key === "Enter") {
            setValue(e.target.value);
          }
        }}
        // style={{
        //   background : "rgba(0,0,0,0)"
        // }}
      />
      {value && (
        <i
          onClick={() => setValue("")}
          className="bi bi-x-lg cursor-pointer"
        ></i>
      )}
    </div>
  );
};

export default SearchBar;
