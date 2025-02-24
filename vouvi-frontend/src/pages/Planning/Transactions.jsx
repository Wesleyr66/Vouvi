import { PieChart } from "@mui/x-charts";
import PropTypes from "prop-types";
import convertFloat from "../../utils/convertFloat";
import { Icon } from "@iconify/react";
import showModal from "../../utils/showModal";

import { useEffect, useState } from "react";
import axios from "axios";

function DailyTransaction({ description, value, type, date, iconSrc }) {
  
  return (
    <li className="mb-2 flex justify-around rounded-md bg-white p-2 text-[12px] xs:text-[14px] sm:text-[18px] md:text-[16px] lg:text-[18px] xl:p-3 xl:text-[22px] 2xl:text-md dark:bg-black">
      <div className="flex items-center">
        <Icon
          icon={iconSrc}
          className="h-5 w-5 rounded-full bg-yellow p-[2px] xs:h-7 xs:w-7 xs:p-1 sm:h-10 sm:w-10 sm:p-2 md:h-8 md:w-8 md:p-1 xl:h-10 xl:w-10 xl:p-2 2xl:h-12 2xl:w-12"
        />
        <span className="w-1/4 p-1 md:p-2 xl:p-4">{description}</span>
      </div>
      <span className="w-1/3 p-2 px-0 text-center md:pt-2 lg:p-3 xl:p-4">
        R$ {convertFloat(value)}
      </span>
      <span className="w-1/4 p-2 text-center md:p-2 lg:p-3 xl:p-4">{type}</span>
      <span className="w-1/4 p-2 md:p-2 lg:p-3 xl:p-4">{date}</span>
    </li>
  );
}

function Transactions() {
  
  const performance = 88;

  return (
    <div className="mt-10 flex w-full flex-col justify-between md:flex-row dark:text-white">
      <div className="rounded-md bg-[#888] bg-opacity-20 p-6 sm:w-full md:w-7/12 dark:bg-[#1B1B1B]">
        <h3 className="w-fit rounded-xl bg-primary-200 p-3 font-semibold text-white sm:text-[3vw] md:text-[26px] lg:text-[32px] dark:bg-black py-1">
          Transações
        </h3>

        <br />

        <ul className="max-h-96 overflow-y-scroll">
          <li className="flex justify-around text-[17px] text-md xs:mb-0 xs:text-[14px] sm:mb-2 sm:text-[16px] md:text-[20px]">
            <span className="w-1/4 p-4 text-center font-bold">Descrição</span>
            <span className="w-1/4 p-4 pl-[39px] text-center font-bold xs:pl-0 md:py-4 md:pl-10 lg:p-4">
              Valor
            </span>
            <span className="w-1/4 p-4 pl-7 text-center font-bold xs:pl-0 md:py-4 md:pl-4 lg:p-4">
              Tipo
            </span>
            <span className="w-1/4 p-4 text-center font-bold">Data</span>
          </li>

          <DailyTransaction
            description="Aluguel"
            value={1000}
            type="Débito"
            date="10/10/2021"
            iconSrc="carbon:money"
          />
          <DailyTransaction
            description="Aluguel"
            value={1000}
            type="Débito"
            date="10/10/2021"
            iconSrc="carbon:money"
          />
          <DailyTransaction
            description="Aluguel"
            value={1000}
            type="Débito"
            iconSrc="carbon:money"
            date="10/10/2021"
          />
          <DailyTransaction
            description="Aluguel"
            value={1000}
            type="Débito"
            date="10/10/2021"
            iconSrc="carbon:money"
          />
          
        </ul>
      </div>

      <div className="relative mt-5 flex flex-col rounded-md bg-[#888] bg-opacity-20 p-1 sm:w-full md:mt-0 md:w-2/5 dark:bg-[#1B1B1B] pb-10">
        <h3 className="xl:m-8 lg:m-6 m-5 lg:text-nowrap font-medium 2xl:text-[32px] xl:text-base lg:text-[30px] md:text-[28px] sm:text-[3vw] text-[20px] text-white bg-primary-200  dark:bg-black w-fit p-4 py-3 rounded-2xl">
          Desempenho Financeiro
        </h3>
        <div className="flex flex-col items-center">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 50, color: "#480ca8" },
                  { id: 1, value: 15, color: "#560bad" },
                  { id: 2, value: 15, color: "#7209b7" },
                  { id: 3, value: 20, color: "#b5179E" },
                ],
                innerRadius:
                  window.innerWidth > 768 && window.innerWidth < 1024 ? 100 : 150,
                outerRadius:
                  window.innerWidth > 768 && window.innerWidth < 1024 ? 120 : 180,
                cornerRadius: 35,
                startAngle: -90,
                endAngle: 90,
                paddingAngle: 3,
              },
            ]}
            margin={{ top: 150, right: 0, bottom: 0, left: 0 }}
            width={600}
            height={300}
          />
          <span className="absolute top-1/2 text-lg md:top-[55%] md:text-lg lg:top-1/2 lg:text-xl">
            {performance}%
          </span>
          <button
            tabIndex="0"
            onClick={() => showModal("financial-performance")}
            className="w-full rounded-md border-4 border-black py-3 text-md md:w-3/5 md:text-[20px] lg:w-4/6 dark:border-white"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}

DailyTransaction.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.string,
};

export default Transactions;
