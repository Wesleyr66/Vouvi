function AiCards({ icon, text, animateColor, animateBgColor }) {
  return (
    <div className="relative flex items-center 2xl:left-36 lg:left-[10%]">
      <div className={`rounded-lg p-2 ${animateBgColor}`}>{icon}</div>
      <div className="ml-5 w-2/4">
        <p className={`text-left xl:text-base xs:text-[30px] text-md sm:text-[24px] font-bold text-[#8D8D8D] leading-[1] ${animateColor}`}>{text}</p>
      </div>
    </div>
  );
}

export default AiCards;
