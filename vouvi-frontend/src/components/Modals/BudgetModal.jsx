import showModal from "../../utils/showModal";
import Modal from "./Modal";
import { Icon } from "@iconify/react";

export default function BudgetModal() {
  const budget = [
    { id: 0, month: "Janeiro", revenue: 1000, expense: 800, economy: 200 },
    { id: 1, month: "Fevereiro", revenue: 1000, expense: 800, economy: 200 },
    { id: 2, month: "Março", revenue: 1000, expense: 800, economy: 200 },
    { id: 3, month: "Abril", revenue: 1000, expense: 800, economy: 0 },
  ];

  return (
    <Modal
      id="budget-modal"
      title="Orçamento"
      icon="mdi:wallet"
      iconWidth={32}
      top
    >
      {/* Legend for each colomn */}
      <ul className="flex max-h-[55vh] flex-col gap-2 overflow-hidden overflow-y-scroll text-[14px] xs:w-[67vw] sm:text-[16px] md:w-[60vw] md:gap-3 md:text-[18px] lg:w-[50vw] lg:gap-2 lg:text-[22px] xl:gap-3 xl:text-md">
        <li className="relative left-6 top-3 flex items-center justify-between gap-4 sm:left-10 xl:left-16">
          <div className="flex w-full">
            <span className="w-1/4">Mês</span>
            <span className="w-1/4">Receita</span>
            <span className="w-1/4">Despesa</span>
            <span className="w-1/4">Economia</span>
            <span className="w-1/4"></span>
          </div>
        </li>

        {budget.map((item) => (
          <li className="flex items-center justify-between gap-2" key={item.id}>
            <div className="flex w-full items-center justify-between gap-1 rounded-sm bg-black/5 p-1 sm:gap-2 lg:p-3 xl:p-4 dark:bg-black">
              <Icon
                className="w-[18px] xs:w-[20px] sm:w-[30px] md:w-[30px] lg:w-[35px] xl:w-auto"
                icon={"mdi:wallet"}
                width={48}
                color={`${item.economy <= 0 ? "red" : "blue"}`}
              />
              <span
                className={`w-1/4 ${item.economy <= 0 ? "text-red" : "text-secondary-200"}`}
              >
                {item.month}
              </span>
              <span className="w-1/4">R$ {item.revenue}</span>
              <span className="w-1/4">R$ {item.expense}</span>
              <span
                className={`w-1/4 ${item.economy <= 0 ? "text-red" : "text-secondary-200"}`}
              >
                R$ {item.economy}
              </span>
            </div>
            <div
              tabIndex="0"
              onClick={() => showModal("budget-details-edit")}
              className="h-auto cursor-pointer rounded-[12px] bg-black/5 px-1 py-4 transition-all hover:bg-black/10 xs:px-2 xs:py-5 sm:rounded-[16px] sm:px-3 lg:rounded-sm lg:py-7 dark:bg-white/50"
            >
              <Icon icon="mdi:pencil" />
            </div>
          </li>
        ))}
      </ul>
      <button className="flex w-full items-center justify-between gap-4">
        <div
          onClick={() => showModal("budget-details")}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-sm border-[3px] border-dashed p-1 text-[16px] xs:p-2 sm:p-4 sm:text-[18px] md:mt-3 md:border-4 md:text-[20px] lg:text-md"
        >
          <Icon icon={"mdi:plus-bold"} /> <p>Criar orçamento</p>
        </div>
      </button>
    </Modal>
  );
}
