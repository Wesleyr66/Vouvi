import { Icon } from "@iconify/react";
import propTypes from "prop-types";

import showModal from "../../utils/showModal";

function Stage({ icon, iconWidth, top, left, open }) {
  return (
    <button
      onClick={() => showModal("question-start")}
      className={`absolute flex ${icon ? "h-20 w-20 lg:h-24 lg:w-24 xl:h-[90px] xl:w-[90px] 2xl:h-[140px] 2xl:w-[140px]" : "h-10 w-10"} group items-center justify-center rounded-full border-white transition-all duration-200 ${open ? "bg-[#002952] hover:border-4 hover:bg-secondary-200 dark:bg-[#D6EBFF]" : "bg-[#D6EBFF] dark:bg-[#002952]"}`}
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      <Icon
        icon={icon}
        width={iconWidth}
        className={
          open
            ? "-rotate-90 text-[#D6EBFF] group-hover:text-[#D6EBFF] lg:rotate-0 dark:text-[#002952]"
            : "-rotate-90 text-[#002952] lg:rotate-0 dark:text-[#D6EBFF]"
        }
      />
    </button>
  );
}

Stage.propTypes = {
  icon: propTypes.string,
  iconWidth: propTypes.number,
  top: propTypes.number.isRequired,
  left: propTypes.number.isRequired,
  open: propTypes.bool.isRequired,
};

export default Stage;
