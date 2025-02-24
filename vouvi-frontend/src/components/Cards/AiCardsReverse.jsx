function AiCards({ icon, text, animateColor, animateBgColor }) {
  return (
    <div className="relative flex justify-end items-center lg:flex-row-reverse sm:flex-row flex-row-reverse">
      <div className={`float-left rounded-lg ${animateBgColor}`}>
        {icon}
      </div>
        <p className={`sm:ml-5 lg:ml-0 mr-5 w-[200px] sm:w-[150px] lg:w-2/4 xl:text-base sm:text-[24px] xs:text-[30px] text-md text-right sm:text-left lg:text-right font-bold text-[#8D8D8D] leading-[1] ${animateColor}`}>{text}</p>
    </div>
  );
}

export default AiCards;
