import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import hideModal from "../../utils/hideModal";

const colors = {
  primary: "text-primary-200",
  secondary: "text-secondary",
  red: "text-[#FF0000]",
  green: "text-[#00FF00]",
  blue: "text-[#0000FF]",
  black: "text-black",
  gray: "text-[#8D8D8D]"
};

function Modal({
  id,
  children,
  title,
  titleColor,
  icon,
  iconColor,
  iconWidth,
  top,
  hide,
  perfom,
}) {
  return (
    // Background
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen ${!top ? "items-center" : "pt-10"} hidden justify-center overflow-hidden bg-white/50 backdrop-blur-xl dark:bg-black/50`}
      id={id}
    >
      {/* Modal container */}
      <div className={`h-fit w-fit min-w-80 max-w-[70vw] rounded-md bg-white lg:p-9 md:p-5 p-2 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white ${perfom}`}>
        {/* Modal heading */}
        <div className="flex justify-between">
          <span className="flex items-center gap-4">
            <Icon
              icon={icon}
              className={`${colors[iconColor]}`}
              width={iconWidth}
            />
            <h2 className={titleColor}>{title}</h2>
          </span>
          <button className="cursor-pointer">
            <Icon
              onClick={() => hideModal(id)}
              className={`relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white ${hide}`}
              icon="carbon:close-filled"
              width="3rem"
            />
          </button>
        </div>

        {/* Modal body */}
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  icon: PropTypes.string,
  top: PropTypes.bool,
  iconColor: PropTypes.string,
  iconWidth: PropTypes.number,
  hide: PropTypes.string,
  perfom: PropTypes.string,
};

export default Modal;
