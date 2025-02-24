import vcoin from "../../assets/images/vcoins-icon.svg";

function StoreCards({ children, color, color2, color3, value }) {
  return (
    <div
      className={`${color2} mx-2 mb-3 flex w-[120px] flex-none flex-col items-center rounded-[14px] p-2 sm:w-[150px] md:w-[190px] md:rounded-md md:p-4 lg:mx-3 lg:mb-5 lg:w-[290px] lg:p-5 dark:bg-black`}
    >
      <div
        className={`${color} flex h-[90px] w-full items-center justify-center rounded-[15px] sm:h-[130px] md:h-[160px] md:rounded-sm lg:h-[230px]`}
      >
        {children}
      </div>
      <button
        className={`mt-2 flex w-full items-center justify-center gap-2 rounded-[6px] md:mt-4 md:rounded-md lg:mt-6 ${color3} text-[20px] font-medium text-white transition-all duration-500 hover:bg-white hover:text-black lg:p-1 lg:text-[32px] dark:bg-yellow dark:text-[#351D09]`}
      >
        <img className="" src={vcoin} alt="" />
        {value}
      </button>
    </div>
  );
}
export default StoreCards;
