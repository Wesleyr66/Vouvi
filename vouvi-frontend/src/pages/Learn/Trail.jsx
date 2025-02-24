import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import FinalStage from "../../components/Learn/FinalStage";
import BonusStage from "../../components/Learn/BonusStage";

function Trail({ stages, bg }) {
  return (
    <section className="relative md:w-auto xl:top-5">
      <img src={bg} alt="trilha de aprendizagem" width={1920} />
      {stages.map((stage) =>
        stage.final ? (
          <FinalStage
            key={stage.id}
            top={stage.top}
            left={stage.left - 300 / (window.innerWidth / 2)}
          />
        ) : (
          <Stage
            key={stage.id}
            top={stage.top}
            left={stage.left - 300 / (window.innerWidth / 2)}
            open={stage.open}
            icon={stage.icon}
            iconWidth={stage.iconWidth}
          />
        ),
      )}
    </section>
  );
}

Trail.propTypes = {
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string,
      iconWidth: PropTypes.number,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      open: PropTypes.bool,
      final: PropTypes.bool,
    }),
  ).isRequired,
  bonusStages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      color: PropTypes.string,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      open: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  bg: PropTypes.string.isRequired,
};

export default Trail;
