function PrimaryButton({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${color} relative m-auto mt-8 flex h-14 lg:h-[70px] items-center justify-center rounded-sm bg-primary-200 px-10 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-opacity-0 hover:text-primary-200 hover:outline hover:outline-[6px]`}
    >
      <p className="text-[24px] sm:text-[28px] lg:text-[36px]">{text}</p>
    </button>
  );
}
export default PrimaryButton;
