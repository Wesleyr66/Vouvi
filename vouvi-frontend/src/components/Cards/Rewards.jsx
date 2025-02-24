function Rewards({ xp, vicon, vcoin, gift, tgift, pad, pad2, pad3, hidden }) {
  return (
    <div className={`${hidden} md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10 flex w-[250px] xs:w-[300px] sm:w-[400px] justify-between rounded-md bg-[rgba(255,255,255,0.50);] p-3 sm:p-5 text-[20px] sm:text-[32px] font-bold dark:bg-[#D9D9D9]`}>
      <div
        className={`${pad} flex flex-col items-center justify-center rounded-md bg-[#014085]`}
      >
        <div className="rounded-xl bg-secondary-200 px-2 text-[#014085]">
          XP
        </div>
        <p className="text-secondary-200">{xp}</p>
      </div>

      <div
        className={`${pad2} flex flex-col items-center justify-center rounded-md bg-yellow`}
      >
        <img src={vicon} alt="" />
        <p className="text-[#FFFBDB]">{vcoin}</p>
      </div>

      <div
        className={`${pad3} flex flex-col items-center justify-center rounded-md bg-[#81340A]`}
      >
        <div className="rounded-xl bg-[#D45D1B] p-2 px-4">{gift}</div>
        <p className="text-nowrap text-[#D45D1B]">{tgift}</p>
      </div>
    </div>
  );
}
export default Rewards;
