function SecondaryButton({ text, color }) {
  return (
    <button
      tabIndex="-1"
      className={`${color} flext h-10 items-center justify-center rounded-md px-5 text-[20px] font-bold transition-colors duration-500 ease-in-out hover:bg-opacity-0 hover:outline hover:outline-[6px] xs:h-12 xs:px-7 sm:h-14 sm:px-10 sm:text-md lg:h-[75px] lg:text-[32px]`}
    >
      <p>{text}</p>
    </button>
  );
}
export default SecondaryButton;
