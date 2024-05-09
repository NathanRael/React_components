/* eslint-disable react/prop-types */
const Empty = ({ value = "Liste vide", className }) => {
  return (
    <p className={`text-subtitle-1 text-danger mx-auto ${className}`}>
      {value}
    </p>
  );
};

export default Empty;
