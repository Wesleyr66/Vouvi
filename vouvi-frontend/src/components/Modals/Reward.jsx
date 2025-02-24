import Modal from "./Modal";
import Newbie from "../../assets/images/newbie-insigne.svg";
import InsigneModalCard from "../Cards/InsigneModalCard";
import Vcoin from "../../assets/images/vcoins-icon.svg";
import { Link } from "react-router-dom";

function FinancialPerformance() {
  return (
    <Modal
      id="reward"
      // TODO colocar o ícone correto
      icon={""}
      iconColor={""}
      iconWidth={48}
      title={""}
      titleColor=""
      hide={"hidden"}
      perfom={"border-primary-200 border-4"}
    >
      <div className="flex flex-col items-center gap-5 text-[32px]">
        <h1>Recompensas</h1>
        <div className="flex gap-5">
          <InsigneModalCard
            img={Vcoin}
            imgSize={"w-24"}
            title={"5"}
            text={"Vcoins"}
            color={"dark:bg-[#02020B] bg-[#878787]"} // Atribui a cor com base no ID da conquista
          />
          <InsigneModalCard
            img={Newbie} // Ícone dinâmico pode ser colocado aqui
            title={"Intermediário"}
            text={"Financeiro"}
            color={"dark:bg-[#02020B] bg-[#878787]"} // Atribui a cor com base no ID da conquista
          />
        </div>
        <div>
          <Link to={"/learn"}>
            <p className="cursor-pointer rounded-md bg-primary-200 p-5 px-20 text-base font-medium transition-colors duration-300 hover:bg-primary-300">
              Próxima aula
            </p>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default FinancialPerformance;
