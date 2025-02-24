import { Icon } from "@iconify/react";
import { useState } from "react";
import convertFloat from "../../utils/convertFloat";
import hideModal from "../../utils/hideModal";

function BudgetDetailsEdit() {
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
      id={"budget-details-edit"}
    >
      {/* Modal container */}
      <div className="h-fit w-fit min-w-80 rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
        {/* Modal heading */}
        <div className="flex justify-between">
          <span className="flex items-center gap-4">
            <Icon icon={"mdi:wallet"} className={`text-pink-200`} width={32} />
            <h2>Orçamento</h2>
          </span>
          <span className="flex gap-3">
            <button
              className="rounded-[9px] border-[3px] border-black p-1 px-4 transition-all duration-200 hover:bg-black/50 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              onClick={() => hideModal("budget-details-edit")}
            >
              Cancelar
            </button>
            <button className="rounded-[9px] border-[3px] border-black p-1 px-4 transition-all duration-200 hover:bg-black/50 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
              Apagar
            </button>
          </span>
        </div>

        {/* Modal body */}
        <div className="mt-2">
          {/* Heading */}
          <div className="flex w-[50vw] justify-between">
            <div>
              <h4 className="font-bold">A receber:</h4>
              <ul className="flex gap-3">
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 font-light hover:bg-white hover:text-black dark:border-white">
                  Emprego
                </li>
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 font-light hover:bg-white hover:text-black dark:border-white">
                  Freelance
                </li>
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 font-light hover:bg-white hover:text-black dark:border-white">
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
          <div className="mt-8 rounded-sm bg-black/10 p-5">
            <div className="mb-5 flex justify-between">
              <h4>A pagar:</h4>
              <span className="cursor-pointer rounded-[9px] border-[3px] border-black p-1 px-2 hover:bg-white hover:text-black dark:border-white">
                <p>+ Adicionar</p>
              </span>
            </div>

            <div className="relative top-3 flex justify-between">
              <p className="w-1/4 pl-8">Título</p>
              <p className="w-1/4 pl-8">Valor</p>
              <p className="w-1/4 pl-8">Tipo</p>
              <p className="w-1/4 pl-8">Data</p>
            </div>

            <ul className="flex h-[40vh] flex-col gap-3 overflow-y-scroll">
              {expenses.map((expense) => (
                <li
                  key={expense.id}
                  className="flex items-center justify-between gap-1"
                >
                  <div className="flex w-full items-center justify-between rounded-sm bg-white py-4 dark:bg-black">
                    <p className="flex w-1/4 items-center gap-2 pl-4">
                      <span className="w-fit rounded-full bg-red p-4">
                        <Icon icon={"mdi-wallet"} width={32} color="white" />
                      </span>
                      {expense.title}
                    </p>
                    <p className="w-1/4 pl-8">{expense.value}</p>
                    <p className="w-1/4 pl-8">{expense.type}</p>
                    <p className="w-1/4 pl-8">{expense.date}</p>
                  </div>
                  <span className="flex h-full cursor-pointer items-center rounded-sm bg-white px-2 py-4 hover:bg-black/10 dark:bg-black">
                    <Icon icon={"mdi-pencil"} width={32} className="" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal container 2 */}
      <div className="h-fit w-fit min-w-80 max-w-[50vw] rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
        {/* Modal heading */}
        <div className="flex justify-between">
          <h2>Resumo</h2>
        </div>

        {/* Modal body */}
        <div className="mt-10">
          <div className="flex flex-col gap-3">
            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-green-200">A Receber</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toReceive)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-red">A Pagar</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toPay)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-yellow">Para metas</h5>
              <p>
                <strong>Total:</strong> R$0,00
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-sm bg-black/10 p-4">
            <h5 className="font-bold text-secondary-200">Valor economizado</h5>
            <p>
              <strong>Total:</strong> R$0,00
            </p>
          </div>

          {/* Submit */}
          <div className="mt-8 flex w-full justify-between gap-2">
            <div className="group flex w-2/5 items-center justify-center rounded-sm border-4 border-primary-200 transition-all duration-200 hover:bg-secondary-300">
              <button>
                <Icon
                  icon={"mdi:repeat"}
                  width={64}
                  className="text-primary-200 group-hover:text-secondary-200"
                />
              </button>
            </div>

            <div className="w-3/5 rounded-sm bg-primary-200 p-4 hover:bg-secondary-200">
              <button className="text-center font-bold text-white">
                Registrar orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetDetailsEdit;
