import { Icon } from "@iconify/react";
import { useState } from "react";
import convertFloat from "../../utils/convertFloat";
import { useEffect } from "react";
import showModal from "../../utils/showModal";

function Top({ onClick, onClick2 }) {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(6000);
  const [income, setIncome] = useState(2500);
  const [expense, setExpense] = useState(6021);

  const [btnOn, setBtnOn] = useState(0);

  const handleClick = (n) => {
    setBtnOn(n);
    if (n === 0) {
      onClick(0);
    } else if (n === 1) {
      onClick2(1);
    }
  };

  const [colorCatIcon, setCatIconColor] = useState(null);

  const catIcon = (
    <svg
      className="w-5 lg:w-7 xl:w-8 2xl:w-10"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-colors duration-500"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15092 1.27999C4.2131 1.07731 4.27794 0.874585 4.34551 0.671875C4.5304 0.777367 4.72866 0.8956 4.93797 1.02593C5.12266 1.14093 5.31595 1.26535 5.51627 1.39876C8.0298 3.07269 11.65 6.16161 13.2531 9.80496C15.2056 9.25601 17.3084 8.95712 19.4996 8.95712C21.6739 8.95712 23.7611 9.2514 25.7007 9.79224C27.3067 6.15442 30.9214 3.07074 33.432 1.39876C33.6323 1.26535 33.8256 1.14093 34.0103 1.02593C34.2196 0.8956 34.4179 0.777367 34.6028 0.671875C34.6703 0.874585 34.7352 1.07731 34.7974 1.27999L34.8122 1.32867C36.4614 6.74078 36.2203 12.1128 35.4743 16.1063C37.1465 18.3092 38.1077 20.8868 38.1077 23.6415C38.1077 31.7514 29.7766 38.3258 19.4996 38.3258C9.22271 38.3258 0.891602 31.7514 0.891602 23.6415C0.891602 20.9093 1.83716 18.3514 3.48412 16.1604C2.73021 12.1614 2.47937 6.76525 4.13604 1.32867L4.15092 1.27999Z"
        fill={colorCatIcon ? "#007FFF" : "#878787"}
      />
    </svg>
  );

  return (
    <div className="md:w-[97%] lg:w-full">
      <section className="mt-5 flex w-full justify-between sm:mt-6 md:gap-[1px] lg:mt-8 lg:gap-2 2xl:mt-10 2xl:h-auto">
        <div className="flex w-[50%] flex-col justify-center overflow-hidden whitespace-nowrap rounded-[12px] bg-[#DDDDDD] px-3 leading-[1.1] xs:w-[57%] sm:w-[63%] sm:py-4 md:w-[15%] md:px-2 md:py-0 lg:w-[18%] lg:rounded-sm xl:rounded-md xl:px-3 2xl:w-2/12 2xl:gap-3 2xl:px-4 2xl:py-4 dark:bg-[#1B1B1B] dark:text-white">
          <p className="mb-1 text-[16px] font-light sm:text-[20px] md:text-[16px] lg:text-md xl:text-[32px] 2xl:text-[36px]">
            Saldo
          </p>
          <h1 className="font-medium xs:text-[24px] sm:text-[32px] md:text-[16px] lg:text-md xl:text-[32px] 2xl:text-[36px]">
            R$ {convertFloat(balance)}
          </h1>
        </div>

        <div className="flex flex-col gap-1 whitespace-nowrap text-[16px] leading-[1.1] sm:text-[20px] md:text-[16px] lg:gap-2 lg:text-md xl:text-[28px] 2xl:text-[32px]">
          <div
            tabIndex="0"
            onClick={() => showModal("new-income")}
            className="group relative cursor-pointer rounded-[8px] bg-[#84CE7A99] py-2 font-medium text-[#14A900] transition-all duration-300 hover:bg-[#14A900] hover:text-[#133810] hover:transition-none hover:duration-0 sm:px-4 md:px-1 md:py-[1%] lg:rounded-sm lg:px-3 lg:py-2 xl:rounded-md xl:px-4 xl:py-4 dark:bg-[rgba(11,85,5,0.50);]"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 lg:gap-1`}
            >
              <Icon
                icon="typcn:plus"
                width="25px"
                className="w-4 xs:w-5 md:w-4 lg:w-full xl:w-[20px] 2xl:w-[25px]"
              />
              <h1 className="">Adicionar</h1>
            </div>

            <div className={`flex items-center gap-1 group-hover:opacity-0`}>
              <Icon
                icon="icon-park-solid:up-one"
                width="25px"
                className="w-4 xs:w-5 md:w-4 lg:w-full 2xl:w-auto"
              />
              <h1 className="">R$ {convertFloat(income)}</h1>
            </div>
          </div>

          <div
            tabIndex="0"
            onClick={() => showModal("new-expense")}
            className="group relative cursor-pointer rounded-[8px] bg-[#A9000066] py-2 font-medium text-[#E30000] transition-all duration-300 hover:bg-[#E30000] hover:text-[#390C0C] hover:transition-none hover:duration-0 sm:px-4 md:px-1 md:py-[1%] lg:rounded-sm lg:px-3 lg:py-2 xl:rounded-md xl:px-4 xl:py-4"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 mr-1 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 lg:gap-1`}
            >
              <Icon
                icon="typcn:plus"
                width="25px"
                className="w-4 xs:w-5 md:w-4 lg:w-full xl:w-[20px] 2xl:w-[25px]"
              />
              <h1 className="">Adicionar</h1>
            </div>

            <div className={`flex items-center group-hover:opacity-0`}>
              <Icon
                icon="icon-park-solid:down-one"
                width="25px"
                className="w-4 xs:w-5 md:w-4 lg:w-full 2xl:w-auto"
              />
              <h1 className="">R$ {convertFloat(expense)}</h1>
            </div>
          </div>
        </div>

        <div
          tabIndex="0"
          onClick={() => showModal("financial-missions")}
          className="hidden cursor-pointer flex-col justify-around bg-[#DDDDDD] p-2 py-2 md:flex md:w-[42%] md:rounded-[12px] lg:w-[35%] lg:rounded-sm xl:w-5/12 xl:rounded-md dark:bg-[#1B1B1B]"
        >
          <p className="font-light md:text-[16px] lg:p-1 lg:text-md xl:text-[32px] 2xl:p-2 2xl:text-base dark:text-white">
            Missões
          </p>
          <div className="overflow-hidden whitespace-nowrap bg-white text-black md:rounded-[12px] md:text-[14px] lg:rounded-sm lg:p-1 lg:text-[20px] xl:rounded-md xl:p-2 xl:text-[28px] 2xl:p-1 2xl:text-[32px]">
            <p className="slide-track animate-scroll relative left-[800px]">
              Anote três pequenas economias que você fez hoje
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 whitespace-nowrap leading-[1.1] md:text-[16px] lg:gap-2 lg:text-md xl:text-[28px] 2xl:text-[32px]">
          <div
            tabIndex="0"
            onClick={() => showModal("notes-modal")}
            className="flex cursor-pointer items-center gap-1 rounded-[8px] bg-[#FFB51533] px-1 font-medium text-[#FFB515] transition-all duration-300 hover:bg-yellow hover:text-[#493A1A] md:h-[27px] md:w-[115%] md:px-2 md:py-0 lg:h-[44px] lg:w-full lg:rounded-sm lg:px-3 lg:py-2 xl:h-[61px] xl:rounded-md xl:px-4 xl:py-4"
          >
            <Icon
              icon="solar:notes-bold"
              className="w-[30px] sm:w-[33px] md:w-[9%] lg:w-[10%] xl:w-[23px] 2xl:w-[25px]"
              width="41px"
            />
            <h1 className="hidden md:flex">Anotações livres</h1>
          </div>
          <div
            tabIndex="0"
            onClick={() => showModal("budget-modal")}
            className="flex cursor-pointer items-center gap-1 rounded-[8px] bg-[#FF48A733] px-1 font-medium text-[#FF48A7] transition-all duration-300 hover:bg-[#FF48A7] hover:text-[#492437] md:h-[27px] md:w-[115%] md:px-2 md:py-0 lg:h-[44px] lg:w-full lg:rounded-sm lg:px-3 lg:py-2 xl:h-[61px] xl:rounded-md xl:px-4 xl:py-4"
          >
            <Icon
              icon="iconoir:wallet-solid"
              className="w-[30px] sm:w-[33px] md:w-[9%] lg:w-[10%] xl:w-[23px] 2xl:w-[25px]"
              width="41px"
            />
            <h1 className="hidden md:flex">Orçamento</h1>
          </div>
        </div>
      </section>
      <div className="mt-3 flex flex-col rounded-[12px] bg-[#DDDDDD] px-3 py-2 md:hidden dark:bg-[#1B1B1B]">
        <p className="text-[16px] font-light xs:text-[25px] dark:text-white">
          Missões
        </p>
        <div className="overflow-hidden whitespace-nowrap rounded-[12px] bg-white p-1 text-[16px] text-black xs:p-2 xs:text-[20px]">
          <p className="slide-track animate-scroll relative left-[800px]">
            Anote três pequenas economias que você fez hoje
          </p>
        </div>
      </div>

      <section className="mt-3 flex w-full flex-col justify-between rounded-md sm:flex-row sm:items-center md:w-[103.2%] lg:mt-4 lg:w-full xl:mt-5 xl:p-2 2xl:mt-10 2xl:p-4">
        <div className="flex w-full justify-between sm:w-auto sm:gap-2 xl:gap-5 2xl:gap-7">
          <button
            onClick={() => handleClick(0)}
            className={`${
              btnOn == 0
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
            } rounded-[8px] p-2 text-[24px] xs:rounded-[12px] md:text-[16px] lg:rounded-sm lg:p-4 lg:text-md xl:h-14 xl:py-0 xl:text-[32px] 2xl:h-auto 2xl:rounded-md 2xl:py-4 2xl:text-base`}
          >
            Planejar
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${
              btnOn == 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
            } rounded-[8px] p-2 text-[24px] xs:rounded-[12px] md:text-[16px] lg:rounded-sm lg:p-4 lg:text-md xl:h-14 xl:py-0 xl:text-[32px] 2xl:h-auto 2xl:rounded-md 2xl:text-base`}
          >
            Metas
          </button>
        </div>
        <div className="flex justify-between whitespace-nowrap text-[#8D8D8D] sm:gap-2 lg:gap-7 dark:text-white">
          {btnOn == 1 ? (
            <>
              <div
                onClick={() => showModal("create-goal")}
                className="mt-2 flex cursor-pointer items-center justify-center gap-1 rounded-[12px] border-[2px] border-[#8D8D8D] px-3 py-2 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200 xs:border-[3px] sm:mt-0 md:h-[38px] lg:h-[60px] lg:gap-2 lg:rounded-sm lg:px-6 xl:gap-4 2xl:h-20 2xl:rounded-md 2xl:border-4"
              >
                <Icon
                  icon={"typcn:plus"}
                  className="text-[20px] md:text-[16px] lg:text-md xl:text-base"
                />
                <p className="text-[20px] md:text-[16px] lg:text-md xl:text-[32px] 2xl:text-base">
                  Criar Meta
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                tabIndex="0"
                onMouseEnter={() => setCatIconColor(true)}
                onMouseLeave={() => setCatIconColor(false)}
                onClick={() => showModal("tip-from-fin")}
                className="mt-5 flex cursor-pointer items-center justify-center gap-1 rounded-[12px] border-[3px] border-[#8D8D8D] p-2 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200 xs:mt-2 md:mt-0 md:h-[39px] md:px-3 lg:mt-[1px] lg:h-[60px] lg:gap-3 lg:rounded-sm lg:border-[3px] lg:px-6 xl:gap-4 2xl:mt-0 2xl:h-20 2xl:gap-6 2xl:rounded-md 2xl:border-4"
              >
                {catIcon}
                <p className="text-[20px] md:text-[16px] lg:text-md xl:text-[32px] 2xl:text-base">
                  Dicas do Fin
                </p>
              </div>
              <div
                tabIndex="0"
                className="mt-5 flex items-center justify-center rounded-[12px] border-[3px] border-[#8D8D8D] transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200 xs:mt-2 md:mt-0 md:h-[39px] md:gap-1 md:px-3 lg:mt-[1px] lg:h-[60px] lg:gap-6 lg:rounded-sm lg:border-[3px] lg:px-6 2xl:mt-0 2xl:h-20 2xl:rounded-md 2xl:border-4"
              >
                <p className="hidden flex-row items-center justify-center text-nowrap md:flex md:gap-2 md:text-[16px] lg:gap-4 lg:text-md xl:text-[32px] 2xl:text-base">
                  <input
                    className="outline-none md:w-5 lg:w-7 xl:w-8 2xl:w-full dark:bg-black"
                    type="date"
                  />
                </p>
                <Icon
                  tabIndex="-1"
                  className="flex px-2 md:hidden"
                  icon={"bi:calendar-fill"}
                  width={40}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Top;
