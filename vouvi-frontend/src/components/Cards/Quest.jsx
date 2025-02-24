function Quest({ children, quest, amount, text, hidden }) {
  return (
    <div className="w-full lg:w-[80%] rounded-[28px_24px_24px_24px] bg-[rgba(255,255,255,0.50);] dark:bg-[#D9D9D9]">
      <div className="flex leading-[1]">
        <p className="z-[1] rounded-[24px_0px_24px_0px] bg-[#471650] px-4 py-2 text-white text-[16px] xs:text-[20px] sm:text-[24px] lg:text-[28px] 2xl:text-[32px] dark:bg-[#3D3D3D]">
          {quest}
          <strong className="text-white dark:text-[#1A1A1A]"> {amount}</strong>
        </p>
        <div className={`relative right-5 z-[0] flex items-center rounded-[0px_0px_24px_0px] bg-white dark:bg-[#A4A4A499] ${hidden}`}>
          <p className="px-10 text-[16px] xs:text-[20px] sm:text-[24px] lg:text-[28px] 2xl:text-[32px] font-medium text-[#EA0000]">
            8 horas restantes
          </p>
        </div>
      </div>
      <li className="ml-2 p-3 font-medium text-[#471650] text-[16px] xs:text-[20px] sm:text-[24px] lg:text-[28px] 2xl:text-[32px] dark:text-[#3D3D3D]">
        {text}
      </li>
      <div className="flex justify-center pb-2 sm:pb-4 lg:pb-0">{children}</div>
    </div>
  );
}
export default Quest;
