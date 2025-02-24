import StoreCard from "./StoreCard";
import { Icon } from "@iconify/react";

function StoreDoubleCard({
  icon1,
  icon2,
  title1,
  title2,
  text1,
  text2,
  color1,
  color2,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
}) {
  return (
    <section className="flex flex-col rounded-md bg-[#007FFF33] p-3 md:p-10 dark:bg-[#1F1F1F]">
      <div className="mb-5 flex flex-col items-center justify-between text-[20px] text-black md:flex-row md:text-[25px] lg:text-base dark:text-white">
        <div className="flex items-center font-medium">
          <Icon icon={`${icon1}`} />
          <h3 className="mx-2">{title1}</h3>
        </div>
        <p className="font-extralight">{text1}</p>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between md:overflow-x-scroll">
        <StoreCard
          color3={"bg-[#002952]"}
          color={color1}
          color2={"bg-secondary-200"}
          value={value1} // Se necessario coloque props para o valor unitario de cada unidade
        >
          <img className="rounded-sm" src={img1} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value2}
        >
          <img className="rounded-sm" src={img2} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value3}
        >
          <img className="rounded-sm" src={img3} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value4}
        >
          <img className="rounded-sm" src={img4} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value5}
        >
          <img className="rounded-sm" src={img5} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={color2}
          color2={"bg-secondary-200"}
          value={value6}
        >
          <img className="rounded-sm" src={img1} alt="" />
        </StoreCard>
      </div>

      <div className="mb-5 mt-12 flex flex-col items-center justify-between text-[20px] text-black md:flex-row md:text-[25px] lg:text-base dark:text-white">
        <div className="flex items-center font-medium">
          <Icon icon={`${icon2}`} />
          <h3 className="mx-2">{title2}</h3>
        </div>
        <p className="font-extralight">{text2}</p>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between md:overflow-x-scroll">
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value7}
        >
          <img className="rounded-sm" src={img6} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value8}
        >
          <img className="rounded-sm" src={img7} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value9}
        >
          <img className="rounded-sm" src={img8} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value10}
        >
          <img className="rounded-sm" src={img9} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value11}
        >
          <img className="rounded-sm" src={img10} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
          value={value12}
        >
          <img className="rounded-sm" src={img6} alt="" />
        </StoreCard>
      </div>
    </section>
  );
}
export default StoreDoubleCard;
