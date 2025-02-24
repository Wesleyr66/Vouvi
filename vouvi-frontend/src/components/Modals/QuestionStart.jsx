import Modal from "./Modal";
import MoneyHistory from "../../assets/images/money-history.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function FinancialPerformance() {
  return (
    <Modal
      id="question-start"
      // TODO colocar o ícone correto
      icon={"ic:round-menu-book"}
      iconColor={"primary"}
      iconWidth={48}
      title={"A história do dinheiro"}
      titleColor="font-medium text-[32px] "
    >
      <div className="flex flex-wrap justify-center gap-5 pt-10">
        <img src={MoneyHistory} alt="Histórico do dinheiro" />
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex gap-2 rounded-md bg-[#C9C9C8] p-3 text-base text-black dark:bg-black dark:text-[#8D8D8D]">
              <Icon icon={"flowbite:star-solid"} />
              <Icon icon={"flowbite:star-solid"} />
              <Icon icon={"flowbite:star-solid"} />
              <Icon icon={"flowbite:star-solid"} />
              <Icon icon={"flowbite:star-solid"} />
            </div>
            <div className="flex items-center rounded-md bg-[#C9C9C8] px-10 text-[32px] text-black dark:bg-black dark:text-[#8D8D8D]">
              <p>Não concluído</p>
            </div>
          </div>
          <div className="w-[540px] rounded-md bg-[#C9C9C8] dark:bg-black">
            <p className="flex p-5">
              O Fin guia você por uma linha do tempo divertida e interativa, e
              revela a evolução do dinheiro desde o escambo até os pagamentos
              digitais.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/lesson-1"}>
          <p className="w-fit cursor-pointer rounded-sm bg-primary-200 p-3 px-10 text-[28px] font-medium text-white transition-colors duration-300 hover:bg-secondary-200 hover:text-secondary-400">
            Iniciar atividade
          </p>
        </Link>
      </div>
    </Modal>
  );
}

export default FinancialPerformance;
