const checkboxvariant = {
  constant: `
  cursor-pointer
  peer relative appearance-none shrink-0  border-1   
  focus:outline-none focus:ring-offset-0 focus:ring-1 
  disabled:bg-white-40
  disabled:border-white-40
  `,

  variant: {
    primary: `
    bg-white
    checked:border-0
    checked:bg-primary
    focus:ring-primary
    border-primary
    `,

    outline: `
    border
    border-white
    checked:border-0
    
    `,
  },

  size: {
    sm: "",
    md: "w-4 h-4 mt-1 ",
    lg: "",
  },

  radious: {
    default: "rounded-sm",
  },
};

const Checkbox = ({
  name,
  label,
  id = name,
  variant = "primary",
  size = "md",
  rounded = "default",
  disabled = false,
  onChange = () => {},
  onError = () => {},
}) => (
  <div className="w-full flex gap-2">
    <input
      disabled={disabled}
      onChange={(e) => {
        onChange(e);
        onError(!e.target.checked, e);
      }}
      name={name}
      id={id}
      className={`${checkboxvariant.constant} ${checkboxvariant.size[size]}  ${checkboxvariant.variant[variant]} ${checkboxvariant.radious[rounded]}`}
      type="checkbox"
    />
    <svg
      className={`absolute pointer-events-none hidden peer-checked:block stroke-white outline-none ${checkboxvariant.size[size]}`}
      // xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <label className="text-white select-none cursor-pointer" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Checkbox;
