import hideModal from "../../utils/hideModal";
import Modal from "./Modal";

function FinancialPerformance() {
  return (
    <Modal
      id="financial-performance"
      // TODO colocar o ícone correto
      icon={"si:info-fill"}
      iconColor={"gray"}
      iconWidth={48}
      title={"Como calculamos o seu Desempenho Financeiro"}
      titleColor="font-bold text-[25px] "
    >
      <div className="mx-5 my-4 text-center md:text-md text-sm">
        
        <p>
        <span className="font-bold">Renda:</span> O total de dinheiro que você ganha, incluindo <br/> salário, bônus, investimentos, etc. <br/> <br/><span className="font-bold">despesas mensais:</span> Todos os gastos mensais, como <br/>  aluguel, alimentação, transporte, lazer, etc.<br/> <br/>

        <span className="font-bold">Economias:</span> A diferença entre sua renda e suas despesas.</p>

        <div className="mt-5 flex w-full justify-between">
         
          <button
            className="rounded-[9px] bg-primary-200 p-2 sm:px-5 px-3 text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black flex-grow"
            onClick={() => hideModal("tip-from-fin")}
          >
            Entendi
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default FinancialPerformance;