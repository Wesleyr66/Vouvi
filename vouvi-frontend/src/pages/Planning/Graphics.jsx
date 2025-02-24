import Transactions from "./Transactions";
import convertFloat from "../../utils/convertFloat";

import { LineChart, PieChart } from "@mui/x-charts";
import { useState } from "react";

function Graphics() {
  const [expenses] = useState(2587);

  return (
    <div className="mt-5 dark:text-white">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-7/12 w-full rounded-md bg-[#868686] bg-opacity-20 xl:pb-10 md:mb-0 mb-5 dark:bg-[#1B1B1B]">
          <h3 className="lg:m-8 m-5 lg:text-nowrap font-medium 2xl:text-[32px] xl:text-base lg:text-[30px] md:text-[28px] sm:text-[3vw] text-[20px] text-white bg-primary-200  dark:bg-black w-fit p-4 py-3 rounded-2xl">
            Seus investimentos decolando
          </h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
            series={[
              {
                data: [0, 20, 40, 80, 160, 320],
                area: true,
                color: "#480ca8",
              },
            ]}
            colors={["dark"]}
            height={300}
          />
        </div>

        <div className="md:w-2/5 sm:w-full rounded-md bg-[#868686] bg-opacity-20 xl:pb-8 xl:pt-0 lg:pt-2 dark:bg-[#1B1B1B]">
          <h3 className="xl:m-8 lg:m-6 m-5 lg:text-nowrap font-medium 2xl:text-[32px] xl:text-base lg:text-[30px] md:text-[28px] sm:text-[3vw] text-[20px] text-white bg-primary-200  dark:bg-black w-fit p-4 py-3 rounded-2xl">
            Distribuição de gastos
          </h3>
          <span className="flex absolute md:hidden pl-[60%] text-[18px] font-bold">
              R${convertFloat(expenses)}
          </span>
          <div className="relative 2xl:w-auto xl:w-[600px] lg:w-[455px] md:w-[350px] 2xl:mt-20 w-full dark:text-white">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 12, label: "Aluguel", color: "#480ca8" },
                    { id: 1, value: 12, label: "Compras", color: "#560bad" },
                    { id: 2, value: 12, label: "Gás", color: "#7209b7" },
                    { id: 3, value: 12, label: "Contas", color: "#b5179E" },
                    { id: 4, value: 12, label: "Saúde", color: "#f72585" },
                    { id: 5, value: 40, label: "Carro", color: "#8d8d8d" },
                  ],
                  outerRadius: (window.innerWidth > 768)? 9 * (window.innerWidth / 100): 20 * (window.innerWidth / 100),
                },
              ]}
              margin={{
                top: 0,
                right: (window.innerWidth > 768 && window.innerWidth < 1024) 
                     ? (window.innerWidth / 100) + 180 
                     : (window.innerWidth > 640)
                     ? 270 - 2 * (window.innerWidth / 100)
                     : (window.innerWidth > 400) 
                     ? 200 - (window.innerWidth / 100)
                     : 150 - (window.innerWidth / 100),
                bottom: 0,
                left: 0,
              }}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "middle", horizontal: "right" },
                  labelStyle: { color: "white" },
                  padding: {
                    right: (window.innerWidth > 768 && window.innerWidth < 1024) ? ((window.innerWidth / 100) + (window.innerWidth / 100) * 9) : 9 * (window.innerWidth / 100),
                  },
                },
              }}
              height={350}
            />
            <span className="md:flex md:absolute hidden xl:left-[60%] lg:right-24 md:left-[50%] md:right-0 sm:left-[70%] md:top-0 sm:top-5 text-left lg:text-md md:text-[20px] font-bold">
              R${convertFloat(expenses)}
            </span>
          </div>
        </div>
      </div>

      <div className="m-auto mt-8 w-full rounded-md bg-[#888] bg-opacity-20 p-3 dark:bg-[#1B1B1B]">
        <div className="sm:ml-16 xs:ml-10 ml-5 flex lg:gap-10 md:gap-8 sm:gap-6 gap-4 xl:text-md lg:text-[20px] md:text-[18px] text-[20px] sm:mt-10 mt-4">
          <span className="flex items-center lg:gap-2 gap-2 bg-secondary-200 dark:bg-primary-500 w-fit font-bold lg-text[32px] p-2 md:p-3 lg:p-4 py-3 rounded-[12px] text-secondary-200 dark:bg-opacity-80 bg-opacity-40 text-[18px] md:text-[24px] lg:text-[32px]">
            <span className="lg:h-3 lg:w-3 w-2 h-2 rounded-full bg-secondary-200" ></span>
            <p>Ganhos</p>
          </span>
          <span className="flex items-center lg:gap-2 gap-1 text-[18px] md:text-[24px] lg:text-[32px] w-fit font-bold bg-primary-300 bg-opacity-30 p-2 md:p-3 lg:p-4 py-2 rounded-[12px] text-primary-200">
            <span className="lg:h-3 lg:w-3 w-2 h-2 rounded-full bg-primary-200"></span>
            <span className=""></span>
            <p>Gastos</p>
          </span>
        </div>
        <LineChart
          xAxis={[{ data: [1, 3, 7, 10, 14, 20, 23, 27, 30] }]}
          sx={{
            "& .MuiLineElement-root": {
              strokeWidth: (window.innerWidth<768)?5:10,
            },
          }}
          series={[
            {
              data: [0, 1000, 1200, 500, 2200, 3300, 2700, 3000, 2000],
              color: "#480ca8",
            },
            {
              data: [1800, 2800, 1500, null, 3800, 1300, 500, 1900, 3900],
              color: "#b5179e",
              connectNulls: true,
            },
          ]}
          height={(window.innerWidth<768)?(window.innerWidth-window.innerWidth/2):500}
          grid={{ horizontal: true }}
        />
      </div>

      <Transactions />
    </div>
  );
}

export default Graphics;
