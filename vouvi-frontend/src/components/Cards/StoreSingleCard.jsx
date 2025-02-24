import StoreCard from "./StoreCard";

function StoreSingleCard({
  children,
  title,
  color1,
  color2,
  color3,
  color4,
  img1,
  img2,
  img3,
}) {
  return (
    <section
      className={`${color4} mb-20 mt-20 flex h-full flex-col gap-5 rounded-md p-5 md:p-10 max-2xl:justify-between md:h-[420px] md:flex-row lg:h-[600px] lg:gap-10 dark:bg-[#1F1F1F]`}
    >
      <div className="flex flex-none rounded-md bg-[#C4C4C47D] md:h-[340px] md:w-[350px] lg:h-[490px] lg:w-[500px]">
        {children}
      </div>
      <div className="relative flex flex-col">
        <h1 className="text-[20px] md:text-[25px] font-medium text-black lg:text-base leading-[1] dark:text-white">
          {title}{" "}
        </h1>
        <div className="mt-4 flex justify-center flex-wrap md:overflow-y-scroll lg:mt-10">
          <StoreCard
            color2={"bg-primary-200"}
            color3={"bg-[#470063]"}
            color={color1}
            value={"120"}
          >
            <img className="md:rounded-sm" src={img1} alt="" />
          </StoreCard>
          <StoreCard
            color2={"bg-primary-200"}
            color3={"bg-[#470063]"}
            color={color2}
            value={"100"}
          >
            <img className="md:rounded-sm" src={img2} alt="" />
          </StoreCard>
          <StoreCard
            color2={"bg-primary-200"}
            color3={"bg-[#470063]"}
            color={color3}
            value={"150"}
          >
            <img className="md:rounded-sm" src={img3} alt="" />
          </StoreCard>
        </div>
      </div>
    </section>
  );
}
export default StoreSingleCard;
