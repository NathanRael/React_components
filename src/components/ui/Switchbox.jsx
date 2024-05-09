const switchboxVariant = {
  constant: `
      border
      relative  
      peer peer-checked:after:translate-x-full 
      rtl:peer-checked:after:-translate-x-full 
      after:content-[''] 
      after:border 
      after:absolute after:top-[1px] 
      after:start-[2px] 
    after:transition-all  
       
    `,
  variant: {
    primary: `
    peer-checked:after:border-white
    after:bg-white 
    after:border-white 
    peer-checked:bg-primary
    bg-white-40  
        `,
    outline: `
    border-white
    peer-checked:after:bg-white
    after:border-white
    
    `,
  },
  size: {
    sm: "",
    md: "w-12 h-6 after:size-[20px]",
    lg: "",
  },

  radious: {
    default: "rounded-full after:rounded-full",
  },
};

const Switchbox = ({
  className = "",
  label,
  onChange = () => {},
  onError = () => {},
  variant = "primary",
  size = "md",
  rounded = "default",
  disabled = false,
  name,
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        disabled={disabled}
        name={name}
        onChange={(e) => {
          onChange(e);
          onError(!e.target.checked, e);
        }}
        type="checkbox"
        className="sr-only peer"
      />
      <div
        className={`${switchboxVariant.constant} ${switchboxVariant.size[size]}
        ${switchboxVariant.radious[rounded]} ${switchboxVariant.variant[variant]}
        ${className}`}
      ></div>
      {label && (
        <span className="ms-3 text-base text-white select-none">{label}</span>
      )}
    </label>
  );
};

export default Switchbox;
