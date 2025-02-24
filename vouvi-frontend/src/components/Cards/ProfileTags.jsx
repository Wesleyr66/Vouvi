function Tags({ text }) {
  return (
    <>
      <p className="text- m-1 whitespace-nowrap rounded-[24px] bg-[rgba(31,31,31,0.20);] px-3 py-1.5 text-[#252525] xs:m-2 text-[18px] sm:text-[30px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px] dark:bg-[#1F1F1F] dark:text-[#F5F5F480]">
        {text}
      </p>
    </>
  );
}
export default Tags;
