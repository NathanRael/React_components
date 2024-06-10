import { useEffect } from "react";
import { globalInputVariants } from "../../styles/globals.input";

const TextInput = ({
  className = "",
  variant = "fill",
  type = "text",
  placeholder = "Indication here ...",
  title = "",
  errorMsg = "",
  name = "",
  size = globalInputVariants.size.default,
  rounded = globalInputVariants.rounded.default,
  isValid = true,
  pattern = /./,
  block = false,
  onChange = () => {},
  onError = () => {},
  inputRef,
  // formData,
  value,
}) => {
  // value = value || formData?.[name];
  const error = !isValid || !pattern.test(value);
  useEffect(() => {
    onError(error, { target: { name: name } });
  }, [value]);
  return (
    <div className={`flex  flex-col gap-2 w-full`}>
      <p className="text-black dark:text-white">{title}</p>
      <input
        ref={inputRef}
        type={type}
        className={`${globalInputVariants.constant} ${
          globalInputVariants.rounded[rounded]
        } ${globalInputVariants.variant[variant]} ${
          globalInputVariants.size[size]
        }   ${
          block ? "w-full" : `${globalInputVariants.size[size]}`
        }  ${className}`}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        name={name}
        value={value}
        autoComplete="off"
        required={true}
      />
      {error && value && (
        <small className="text-small text-danger ">{errorMsg}</small>
      )}
    </div>
  );
};

export default TextInput;
