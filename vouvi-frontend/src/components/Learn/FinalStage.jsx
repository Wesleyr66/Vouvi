import PropTypes from "prop-types";

function FinalStage({ top, left }) {
  const vcoinIcon = (
    <svg
      width="78"
      height="78"
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 27"
        d="M0.241091 19.5201C0.158585 19.5145 0.078192 19.5078 0 19.5C0.0794202 19.5061 0.159796 19.5128 0.241091 19.5201C5.43445 19.8721 19 15.7576 19 0.5C19 15.7576 32.5655 19.8721 37.7589 19.5201C37.8402 19.5128 37.9206 19.5061 38 19.5C37.9218 19.5078 37.8414 19.5145 37.7589 19.5201C31.3899 20.0931 19.377 24.393 19 37.244C19.012 37.6539 19.0122 38.0725 19 38.5C18.9878 38.0725 18.988 37.6539 19 37.244C18.623 24.393 6.61009 20.0931 0.241091 19.5201Z"
        fill="#FFF"
      />
    </svg>
  );

  return (
    <button
      tabIndex="0"
      style={{ top: `${top}%`, left: `${left}%` }}
      className={`group absolute flex h-20 w-20 items-center justify-center rounded-full border-white bg-secondary-200 transition-all duration-200 hover:border-4 lg:h-24 lg:w-24 xl:h-24 xl:w-24 2xl:h-28 2xl:w-28`}
    >
      {vcoinIcon}
    </button>
  );
}

FinalStage.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};

export default FinalStage;
