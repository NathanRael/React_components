/**Global */
export const defaultTransition = "transition duration-200";
export const radiousVariant = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
    default : "xl"
  };

/** Button */  
export const buttonColorVariant = {
  transparent: "text-white font-RobotoMd",
  primary: "bg-primary hover:bg-primary-40 text-white  font-RobotoMd",
  danger: "bg-danger hover:bg-danger-60 text-white  font-RobotoMd",
  secondary:
    "bg-black-10 text-primary hover:bg-primary hover:text-white  font-RobotoMd",
  success: "bg-success hover:bg-success-60 text-white  font-RobotoMd",
  outline : " border-1 border text-black dark:text-white font-RobotoMd hover:bg-white hover:text-black",
  ghost : "text-white hover:bg-white hover:text-black",
  disabled: "bg-white-40 text-white-40 border-none cursor-not-allowed",
  "modern-1" : "relative border border-2 border-[#000] text-black  shadow-dark-1 bg-white active:shadow-none   active:translate-y-[4px] active:translate-x-[4px]   font-RobotoMd ",
  "modern-2" : "relative bg-[#000] text-white hover:translate-x-0 hover:translate-y-0  translate-y-[4px] translate-x-[4px] hover:shadow-white-1 active:translate-y-[4px] active:shadow-none active:translate-x-[4px]",
  "modern-3" : "text-white bg-gradient-to-r from-primary from-10%  to-danger to-90% hover:translate-y-[-4px]",
  "modern-4" : "bg-primary text-white shadow-dark-2 hover:translate-y-[-4px] active:bg-black active:text-primary",
};

/**Input */
export const inputVariant = {
  outline : "border border-black-60 placeholder:text-black-60 text-black-60 dark:placeholder:text-white-60 focus:ring-2 hover:ring-2  bg-white dark:border-white-40  dark:text-white-60 dark:bg-[#000] ",
  fill : "text-black-60  border-black-10 bg-black-10  placeholder:text-black-60 outline-none focus:ring-primary focus:ring-2 dark:bg-white-10 dark:placeholder:text-white-60  dark:text-white-60 dark:border-white-60 ",
}
export  const inputSizeVariant = {
  md: "px-6 py-2",
  lg: "px-8 py-3",
};

export const inputWidth = "w-[320px] md:w-[380px]";

// export const selectColorVariant = {
//   fill : "text-black-60  border-black-10 bg-black-10  placeholder:text-black-60 outline-none focus:ring-primary focus:ring-2 dark:bg-white-10 dark:placeholder:text-white-60  dark:text-white-60 dark:border-white-60 ",
//   outline : "border border-black-60 placeholder:text-black-60 text-black-60 dark:placeholder:text-white-60 focus:ring-2   bg-white dark:border-white-40  dark:text-white-60 dark:bg-[#000] "
// }