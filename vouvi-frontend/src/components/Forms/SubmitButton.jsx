import PropTypes from "prop-types";

function SubmitButton({ text, onClick }) {
  return (
    <input
      className="w-full rounded-md bg-primary-200 py-4 text-base font-bold text-white transition-all hover:cursor-pointer hover:bg-secondary-200 hover:text-secondary-300 focus:bg-secondary-200 focus:text-secondary-300"
      id="next-button"
      type="button"
      value={text}
      onClick={onClick}
    />
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default SubmitButton;
