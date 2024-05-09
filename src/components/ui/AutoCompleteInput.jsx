import { defaultTransition } from "./globals";
import "./components.style.css";
import { useEffect, useRef, useState } from "react";
import { globalInputVariants } from "./globals.input";
import globalSelectvariants from "./globals.select";

const AutoCompleteInput = ({
  options = [
    {
      option: "Option1",
    },
    {
      option: "Option2",
    },
    {
      option: "Opyion3",
    },
  ],
  className = "",
  variant = "fill",
  type = "text",
  placeholder = "Indication here ...",
  title = "",
  errorMsg = "",
  name = "",
  size = "lg",
  rounded = globalInputVariants.rounded.default,
  optionId = "option",
  pattern = /./,
  isValid = true,
  block = false,
  onChange = () => {},
  onError = () => {},
  inputRef,
  value,
}) => {
  const error = !isValid || !pattern.test(value);

  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSelectedValue(value);
    onError(error, { target: { name: name } });
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // console.log("input : " + selectedValue)
    isFocused &&
      setFilteredOptions(
        options.filter((item) =>
          item.option?.toLowerCase()?.includes(selectedValue.toLowerCase())
        )
      );
  }, [selectedValue, isFocused]);

  return (
    <div ref={selectRef} className={`flex  flex-col gap-2 relative w-full `}>
      {title !== "" && <p className="text-black dark:text-white">{title}</p>}
      <input
        onFocus={() => setIsFocused(true)}
        // onClick={() => setIsFocused(true)}
        ref={inputRef}
        type={type}
        className={`${globalInputVariants.constant} ${
          globalInputVariants.rounded[rounded]
        } ${globalInputVariants.variant[variant]} ${
          globalInputVariants.size[size]
        } ${block ? "w-full" : `${globalInputVariants.width}`}  ${className}`}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        name={name}
        value={selectedValue}
        autoComplete="off"
        required
      />
      {error && value && (
        <small className="text-small text-danger ">{errorMsg}</small>
      )}
      {filteredOptions?.length > 0 && isFocused && (
        <ul
          className={` ${globalSelectvariants.constant}
          ${globalSelectvariants.variant[variant]} ${
            size === "md" ? "top-[64px]" : "top-[74px]"
          } 
          ${block ? "w-full" : `${globalInputVariants.width}`}
         ${defaultTransition}
          ${globalInputVariants.rounded[rounded]}`}
        >
          {filteredOptions?.slice(0, 3).map((item) => (
            <li
              key={item?.[optionId]}
              onClick={() => {
                setSelectedValue(item.option);
                onChange({ target: { value: item.option, name: name } });
                setIsFocused(false);
              }}
              className={`w-full cursor-pointer hover:bg-primary-40 hover:ps-6 px-4 py-2 rounded-md ${defaultTransition} transition-all`}
            >
              {item?.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;
