import PropTypes from "prop-types";

function ProgressBar({ value = 0, max = 100 }) {
  return (
    <>
      <progress
        className="mb-3 h-4 w-full rounded-3xl"
        max={max}
        value={value}
      ></progress>
    </>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
};

export default ProgressBar;
