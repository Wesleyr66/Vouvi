import React from "react";
import { Icon } from "@iconify/react";
const GoalsHistory = () => {
  return (
    <div className="flex justify-between rounded-[18px] bg-[#8D8D8D] dark:bg-black xl:px-6 lg:px-4 lg:py-4 sm:px-2 sm:py-2 px-1 py-1 gap-1">
      <div className="flex items-center gap-2">
        <div className={`h-fit w-fit flex-none rounded-full bg-orange-200 xl:p-4 lg:p-2 lg:px-3 sm:p-1 sm:px-2 p-1 px-[8px]`}>
          <Icon icon="fa6-solid:house" width="36px" className="text-white xl:w-auto lg:w-[24px] md:w-[20px] sm:w-[24px] w-[20px]" />
        </div>
        <p className="xl:text-base lg:text-[32px] sm:text-[24px] text-[24px] text-white dark:text-[#878787]">Casa</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="xl:text-[32px] lg:text-[28px] text-[20px] text-white dark:text-[#878787]">+R$260,00</p>
        <p className="xl:text-md lg:text-[20px] text-[16px] text-[#DDDDDD] dark:text-[#87878799]">01 de Outubro</p>
      </div>
    </div>
  );
};

export default GoalsHistory;
