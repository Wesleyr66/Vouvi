import PropTypes from "prop-types";
function Navigation({ icon, title, width, fill, textColor }) {
  return (
    <li
      className={`${width} lg:mx-2 xl:mx-4 2xl:mx-5 flex lg:h-[38px] xl:h-[43px] 2xl:h-[54px] cursor-pointer rounded-[360px] bg-[rgba(0,127,255,0.40)]`}
    >
      <div
        className={`absolute -z-[1] rounded-[360px] bg-secondary-200 transition-all duration-300 ease-in-out group-hover:m-0 lg:group-hover:h-[38px] xl:group-hover:h-[43px] 2xl:group-hover:h-[54px] group-hover:w-[inherit] ${fill} `}
      ></div>
      {icon}
      <p
        className={`flex ${textColor} mx-2 lg:text-[22px] xl:text-[25px] 2xl:text-[32px] font-bold transition-all duration-300 ease-in-out group-hover:text-[#003F7F]`}
      >
        {title}
      </p>
    </li>
  );
}

Navigation.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
  textColor: PropTypes.string,
};

export default Navigation;
