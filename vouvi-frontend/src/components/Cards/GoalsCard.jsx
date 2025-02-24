import { Icon } from "@iconify/react";
import trend from "../../assets/images/goals-trend.svg";
import conclude from "../../assets/images/goals-conclude.svg";
import notStarted from "../../assets/images/goals-notstarted.svg";
import delayed from "../../assets/images/goals-delayed.svg";
import { useEffect, useState } from "react";
import showModal from "../../utils/showModal";

function GoalsCard({ objective, actualValue, maxValue, date }) {
  const [iconBar, setIconBar] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [describeText, setDescribeText] = useState(null);

  const colors = {
    default: ["bg-[#C6C6C6]", "text-[#6F6F6F]"],
    progress: ["bg-[#FF8800]", "text-[#6F6F6F]"],
    complete: ["bg-[#14A900]", "text-[#14A900]"],
    delayed: ["bg-[#E30000]", "text-[#E30000]"],
  };

  const describe = ["Não iniciado", "Em andamento...", "Concluída", "Atrasado"];

  const currentDate = new Date();
  const objectiveDate = new Date(date);
  objectiveDate.setDate(objectiveDate.getDate() + 1);

  let progression = Math.min((actualValue / maxValue) * 100, 100).toFixed(2);
  progression;

  useEffect(() => {
    const conclusive = () => {
      if (objectiveDate < currentDate && progression < 100) {
        setIconBar(delayed);
        setBgColor(colors.delayed[0]);
        setTextColor(colors.delayed[1]);
        setDescribeText(describe[3]);
      } else if (progression == 0) {
        setIconBar(notStarted);
        setBgColor(colors.default[0]);
        setTextColor(colors.default[1]);
        setDescribeText(describe[0]);
      } else if (progression > 0 && progression <= 99) {
        setIconBar(trend);
        setBgColor(colors.progress[0]);
        setTextColor(colors.progress[1]);
        setDescribeText(describe[1]);
      } else {
        setIconBar(conclude);
        setBgColor(colors.complete[0]);
        setTextColor(colors.complete[1]);
        setDescribeText(describe[2]);
      }
    };

    conclusive();
  }, [progression, currentDate, objectiveDate]);

  return (
    <div onClick={() => showModal("update-goal")} className="relative flex flex-col rounded-md bg-[#86868633] px-4 py-8 sm:px-6 md:px-4 lg:px-8 xl:px-14 dark:bg-[#1B1B1B] group">
      <p className="text-[20px] text-[#878787] sm:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-base group-hover:opacity-0 transition-opacity duration-300">
        {objective}
      </p>
      <div className="mt-4 flex items-center gap-5 group-hover:opacity-0 transition-opacity duration-300">
        <div
          className={`${bgColor} h-fit w-fit flex-none rounded-full p-1 px-[8px] sm:p-3 sm:px-3 md:p-1 md:px-2 lg:p-2 lg:px-3 xl:p-4`}
        >
          <Icon
            icon="fa6-solid:house"
            width="36px"
            className="w-[20px] text-white sm:w-[28px] md:w-[20px] lg:w-[24px] xl:w-auto"
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex justify-between text-[14px] text-[#6F6F6F] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
            <p>{describeText}</p>
            <p>{progression}%</p>
          </div>
          <div className="h-[8px ] m-auto flex w-[100%] rounded-md bg-[#F5F5F480] md:h-[12px] lg:h-[16px] xl:h-[20px] 2xl:h-[25px]">
            <div
              style={{ width: `${progression}%` }}
              className={` ${bgColor} rounded-md`}
            ></div>
          </div>
          <div className="flex justify-between text-[14px] text-[#6F6F6F] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
            <p>
              R${actualValue.toFixed(2)} / R${maxValue.toFixed(2)}
            </p>
            <p
              className={`${textColor}`}
            >{`${objectiveDate.toLocaleDateString()}`}</p>
          </div>
        </div>
        <div>
          <img src={iconBar} alt="Icone de progresso" />
        </div>
      </div>
      {/* Animação Hover */}
      <div
        className={`absolute cursor-pointer w-full flex justify-center h-full items-center left-0 top-0 opacity-0 group-hover:opacity-100 text-base group-hover:transition-all group-hover:duration-300 lg:gap-1 text-[#6F6F6F]`}
      >
        <Icon
          icon="typcn:plus"
          width="25px"
          className="w-4 xs:w-5 md:w-4 lg:w-full xl:w-[20px] 2xl:w-[25px]"
        />
        <h1 className="">Alterar</h1>
      </div>
    </div>
  );
}
export default GoalsCard;
