import { Icon } from "@iconify/react";
import propTypes from "prop-types";

function BonusStage({ type, color, iconColor = "white", top, left }) {
  const icons = {
    accessory: "solar:gift-bold",
    xp: "bi:star-fill",
  };

  const colors = {
    green: "bg-[#CEFF1A]",
    yellow: "bg-yellow",
    pink: "bg-pink-200",
  };

  return (
    <button
      tabIndex="0"
      className={`group absolute flex h-20 w-20 items-center justify-center rounded-full border-white ${colors[color]} transition-all duration-200 lg:h-24 lg:w-24 xl:h-[90px] xl:w-[90px] 2xl:h-28 2xl:w-28`}
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      <Icon
        icon={icons[type]}
        width={48}
        color={iconColor}
        opacity={0.8}
        // "#0D3512"
        className={"-rotate-90 lg:rotate-0"}
      />
    </button>
  );
}

BonusStage.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  iconColor: propTypes.string,
  top: propTypes.number.isRequired,
  left: propTypes.number.isRequired,
  open: propTypes.bool.isRequired,
};

export default BonusStage;
