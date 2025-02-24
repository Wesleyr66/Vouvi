import PropTypes from "prop-types";

function NextButton({ text, setStep }) {
  return (
    <input
      className="w-full rounded-md bg-primary-200 py-4 text-[25px] sm:text-base font-bold text-white transition-all hover:cursor-pointer hover:bg-secondary-200 hover:text-secondary-300 focus:bg-secondary-200 focus:text-secondary-300"
      id="next-button"
      type="button"
      value={text}
      onClick={() => setStep((s) => s + 1)}
    />
  );
}

NextButton.propTypes = {
  text: PropTypes.string,
  setStep: PropTypes.func,
};

export default NextButton;
