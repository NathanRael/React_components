/**Put this in your tailwind.config.js file in order to show some style*/

export default {
  theme: {
    extend: {
      boxShadow: {
        "dark-1": "4px 5px 0 1px rgba(0, 0, 0, 0.8)",
        "white-1": "2px 3px 0 1px rgba(255, 255, 255, 0.8)",
        "dark-2":
          " rgba(0,0,0,0.8) -2px -3px 4px inset, rgba(0,0,0,0.8) 0 3px 4px inset",
      },
    },
    fontSize: {
      "title-1": ["32px"],
      "title-2": ["28px"],
      "subtitle-1": ["24px"],
      "subtitle-2": ["20px"],
      lead: ["18px"],
      base: ["16px"],
      "small-1": ["14px"],
      "small-2": ["11px"],
      icon: ["24px"],
    },
    colors: {
      primary: "#462DA8",
      white: "#FFFFFF",
      black: "#1e1e1e",
      gray: "#F2F2F2",
      success: "#48DA5F",
      danger: "#eb6161",
      warning: "#DE911E",
      "primary-60": "#31189699",
      "primary-40": "#31189666",
      "primary-10": "#3118961a",
      "dark-primary": "#1B1242",
      "black-80": "#1e1e1ecc",
      "black-60": "#1e1e1e99",
      "black-40": "#1e1e1e66",
      "black-10": "#1e1e1e1a",
      "white-60": "#ffffff99",
      "white-40": "#ffffff66",
      "white-10": "#ffffff1a",
      "danger-60": "#eb616199",
      "danger-10": "#eb61611a",
      "success-80": "#48DA5Fcc",
      "success-40": "#48DA5F66",
      "success-10": "#48DA5F1a",
      load: "#212222",
    },
  },
};
