function GoalsButton({ text, color }) {
  return (
    <div
      className={`${color} flex cursor-pointer items-center lg:rounded-2xl md:rounded-xl sm:rounded-[10px] rounded-[8px] xl:p-2 lg:p-1 xl:text-base lg:text-[32px] md:text-[24px] text-[20px] font-light`}
    >
      <p className="mx-2 whitespace-nowrap">{text}</p>
    </div>
  );
}
export default GoalsButton;
