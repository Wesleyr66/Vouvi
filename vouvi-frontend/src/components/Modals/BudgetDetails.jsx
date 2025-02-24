import { Icon } from "@iconify/react";
import { useState } from "react";
import convertFloat from "../../utils/convertFloat";
import hideModal from "../../utils/hideModal";

function BudgetDetails() {
  const expenses = [
    { id: 0, title: "Aluguel", value: 1000, type: "Conta", date: "03/11/2021" },
    {
      id: 1,
      title: "Mercado",
      value: 500,
      type: "Alimentação",
      date: "03/11/2021",
    },
    {
      id: 2,
      title: "Spotify",
      value: 200,
      type: "Assinatura",
      date: "03/11/2021",
    },
    { id: 3, title: "Jogos", value: 300, type: "Lazer", date: "03/11/2021" },
    {
      id: 4,
      title: "Saúde",
      value: 150,
      type: "Alimentação",
      date: "03/11/2021",
    },
    {
      id: 5,
      title: "Alura",
      value: 100,
      type: "Educação",
      date: "03/11/2021",
    },
  ];

  const [toReceive, setToReceive] = useState(0);
  const [toPay, setToPay] = useState(0);

  return (
    // Background
    <div
      className={`fixed left-0 top-0 z-50 flex hidden h-screen w-screen justify-center gap-3 overflow-hidden bg-white/50 pt-10 backdrop-blur-xl dark:bg-black/50`}
      id={"budget-details"}
    >
      {/* Modal container */}
      <div className="flex lg:flex-row flex-col sm:w-[80%] xs:w-[90%] w-[100%] xl:gap-6 gap-3">
        <div className="h-fit lg:w-fit md:w-[100%] min-w-80 rounded-md bg-white lg:p-9 md:p-6 sm:p-4 xs:p-2 p-2 2xl:text-md xl:text-[20px] md:text-sm sm:text-[18px] xs:text-[14px] text-[12px] text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
          {/* Modal heading */}
          <div className="flex justify-between text-md">
            <span className="flex items-center gap-4">
              <Icon icon={"mdi:wallet"} className={`text-pink-200`} width={32} />
              <h2>Orçamento</h2>
            </span>
            <button className="cursor-pointer">
              <Icon
                onClick={() => hideModal("budget-details")}
                className="relative right-[1px] cursor-pointer text-black"
                icon="carbon:close-filled"
                width="3rem"
              />
            </button>
          </div>

          {/* Modal body */}
          <div className="mt-2">
            {/* Heading */}
            <div className="flex lg:w-[100%] w-[100%] justify-between">
              <div>
                <h4 className="font-bold">A receber:</h4>
                <ul className="flex lg:mt-[9px] mt-3 2xl:gap-3 xl:gap-2 lg:gap-1 sm:gap-2 xs:gap-1 gap-[2px]">
                  <li className="rounded-[9px] xs:border-[3px] border-[2px] border-black p-1 xl:px-2 font-light hover:bg-white hover:text-black dark:border-white">
                    Emprego
                  </li>
                  <li className="rounded-[9px] xs:border-[3px] border-[2px] border-black p-1 xl:px-2 font-light hover:bg-white hover:text-black dark:border-white">
                    Freelance
                  </li>
                  <li className="rounded-[9px] xs:border-[3px] border-[2px] border-black p-1 xl:px-2 font-light hover:bg-white hover:text-black dark:border-white">
                    Adicionar +
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="">Mês referente:</h4>
                <span className="flex w-full items-center">
                  <span className="w-full rounded-[9px] border-[3px] p-1 px-2 text-secondary-200">
                    <p>Novembro</p>
                  </span>
                  <Icon
                    icon={"mdi-calendar"}
                    width={55}
                    className="text-secondary-200"
                  />
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="xl:mt-8 lg:mt-5 rounded-sm bg-black/10 2xl:p-5 lg:p-3 lg:pt-4 md:p-5 sm:p-3 p-2">
              <div className="mb-5 flex justify-between">
                <h4>A pagar:</h4>
                <span className="cursor-pointer rounded-[9px] border-[3px] border-black p-1 px-2 hover:bg-white hover:text-black dark:border-white">
                  <p>+ Adicionar</p>
                </span>
              </div>

              <div className="relative flex justify-between">
                <p className="w-1/4 xl:pl-8 lg:pl-4 md:pl-8 sm:pl-5 xs:pl-3 pl-6">Título</p>
                <p className="w-1/4 xl:pl-8 lg:pl-4 md:pl-8 sm:pl-5 xs:pl-3 pl-4">Valor</p>
                <p className="w-1/4 xl:pl-8 lg:pl-4 md:pl-8 sm:pl-5 xs:pl-3 pl-2">Tipo</p>
                <p className="w-1/4 xl:pl-8 lg:pl-4 md:pl-8 sm:pl-5 xs:pl-3 pl-0">Data</p>
              </div>

              <ul className="flex lg:h-[40vh] md:h-[20vh] sm:h-[25vh] h-[20vh] flex-col lg:gap-3 gap-1 overflow-y-scroll md:pr-2 pr-1">
                {expenses.map((expense) => (
                  <li
                    key={expense.id}
                    className="flex items-center justify-between gap-1"
                  >
                    <div className="flex w-full items-center justify-between rounded-sm bg-white lg:py-4 py-2 dark:bg-black">
                      <p className="flex w-1/4 items-center gap-2 2xl:pl-4 xl:pl-2 pl-1">
                        <span className="w-fit rounded-full bg-red 2xl:p-4 xl:p-2 md:p-[4px] md:px-[8px] sm:p-[1px] sm:px-[8px] px-[8px]">
                          <Icon icon={"mdi-wallet"} width={32} color="white" className="2xl:w-auto xl:w-[28px] lg:w-[22px] md:w-[20px] w-[16px]" />
                        </span>
                        {expense.title.length > 7
                          ? expense.title.substring(0, 7) + "..."
                          : expense.title}
                      </p>
                      <p className="w-1/5 2xl:pl-8 xl:pl-8 lg:pl-8 md:text-center md:pl-0 sm:pl-6 xs:pl-4 pl-6">{expense.value}</p>
                      <p className="w-1/4 2xl:pl-8 xl:pl-0 xl:pr-8 md:pl-0 sm:pl-4 text-center">{expense.type}</p>
                      <p className="w-1/4 2xl:pl-8 lg:pl-0 md:pl-8 sm:pl-4 pl-2">{expense.date}</p>
                    </div>
                    <span className="flex h-full cursor-pointer items-center lg:rounded-sm md:rounded-[12px] rounded-[8px] bg-white lg:px-2 lg:py-4 py-2 px-1 hover:bg-black/10 dark:bg-black">
                      <Icon icon={"mdi-pencil"} width={32} className="lg:w-full xs:w-[24px] w-[16px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal container 2 */}
        <div className="h-fit lg:w-fit min-w-80 lg:max-w-[50vw] w-full rounded-md bg-white lg:p-9 md:p-6 md:py-5 sm:p-4 p-3  xl:text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
          {/* Modal heading */}
          <div className="flex justify-between xs:text-md text-sm">
            <h2>Resumo</h2>
          </div>

          {/* Modal body */}
          <div className="2xl:mt-10 xl:mt-11 lg:mt-10 mt-2 gap-2">
            <div className="flex lg:flex-col md:w-full md:justify-between xl:gap-3 lg:gap- sm:gap-2 gap-1">
              <div className="w-full lg:rounded-sm rounded-[12px] bg-black/10 2xl:p-4 lg:p-3 sm:p-2 sm:py-1 p-1 px-2 xl:text-md lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                <h5 className="font-bold text-green-200">A Receber</h5>
                <p>
                  <strong>Total:</strong> R${convertFloat(toReceive)}
                </p>
              </div>

              <div className="w-full lg:rounded-sm rounded-[12px] bg-black/10 2xl:p-4 lg:p-3 sm:p-2 sm:py-1 p-1 px-2 xl:text-md lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                <h5 className="font-bold text-red">A Pagar</h5>
                <p>
                  <strong>Total:</strong> R${convertFloat(toPay)}
                </p>
              </div>

              <div className="w-full lg:rounded-sm rounded-[12px] bg-black/10 2xl:p-4 lg:p-3 sm:p-2 sm:py-1 p-1 px-2 xl:text-md lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                <h5 className="font-bold text-yellow">Para metas</h5>
                <p>
                  <strong>Total:</strong> R$0,00
                </p>
              </div>
            </div>
            <div className="lg:flex flex-col hidden lg:w-full lg:mt-10 lg:rounded-sm rounded-[12px] xl:text-md lg:text-[20px] bg-black/10 2xl:p-4 lg:p-3 md:p-2 md:py-1">
                <h5 className="font-bold text-secondary-200">Valor economizado</h5>
                <p>
                  <strong>Total:</strong> R$0,00
                </p>
              </div>
            <div className="flex flex-wrap lg:hidden h-15 mt-2 xs:justify-between justify-center md:text-[20px] sm:text-[16px] text-[14px] gap-1">
              <div className="flex flex-row rounded-[12px] bg-black/10 sm:p-2 md:py-3 space-x-2 p-1 px-2">
                <h5 className="font-bold text-secondary-200">Valor economizado:</h5>
                <p>
                  R$0,00
                </p>
              </div>
              <div className="flex w-fit lg:hidden xs:w-2/5 rounded-[12px] bg-primary-200 hover:bg-secondary-200 xs:p-0 p-2">
                <button className="text-center font-bold text-white mx-auto text-nowrap">
                  Registrar orçamento
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 lg:flex w-full justify-between gap-2 hidden">
              <div className="group flex w-2/5 items-center justify-center rounded-sm border-4 border-primary-200 transition-all duration-200 hover:bg-secondary-300">
                <button>
                  <Icon
                    icon={"mdi:repeat"}
                    width={64}
                    className="text-primary-200 group-hover:text-secondary-200 2xl:w-auto xl:w-[52px] lg:w-[48px]"
                  />
                </button>
              </div>

              <div className="w-3/5 rounded-sm bg-primary-200 2xl:p-4 lg:p-2 lg:py-2.5 hover:bg-secondary-200">
                <button className="text-center font-bold text-white">
                  Registrar orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetDetails;
