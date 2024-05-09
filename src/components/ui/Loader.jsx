/* eslint-disable react/prop-types */

const Loader = ({ className }) => {
  return (
    <div
      className={`mx-auto text-primary font-RobotoMd text-subtitle-1 ${className}`}
    >
      Loading ...
    </div>
  );
};

export default Loader;
