function Insigne({ icon, title, text }) {
  return (
    <div className="my-5 flex text-[#471650] group-hover:text-white transition-colors duration-500 dark:text-white">
      <div className="flex-none rounded-md bg-[rgba(255,255,255,0.50);] p-4 dark:bg-[#3c3c3c]">
        <img className="w-[75px] h-[90] xs:w-[90px] xs:h-[105] 2xl:h-[130px] 2xl:w-[116px]" src={icon} />
      </div>

      <div className="ml-3 2xl:ml-5 leading-[1] ">
        <h1 className="text-[28px] xs:text-[32px] 2xl:text-[40px] font-medium">{title}</h1>
        <p className="text-[16px] xs:text-[20px] 2xl:text-[24px]">{text}</p>
      </div>
    </div>
  );
}
export default Insigne;
