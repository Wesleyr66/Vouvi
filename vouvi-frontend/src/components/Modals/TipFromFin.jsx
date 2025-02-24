import hideModal from "../../utils/hideModal";
import Modal from "./Modal";

function TipFromFin() {
  return (
    <Modal
      id="tip-from-fin"
      // TODO colocar o ícone correto
      icon={"mdi:lightbulb-on-outline"}
      iconColor={"blue"}
      iconWidth={48}
      title={"Dica do Fin!"}
      top
    >
      <div className="mx-5 my-4 text-center md:text-md text-sm">
        <p>Diminua seus gastos com mercado se possível para economizar mais!</p>

        <div className="mt-5 flex w-full justify-between">
          <button className="rounded-[9px] bg-black/20 p-2 sm:px-5 px-3 transition-all duration-200 hover:bg-black/70 hover:text-white">
            Outra dica
          </button>
          <button
            className="rounded-[9px] bg-primary-200 p-2 sm:px-5 px-3 text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black"
            onClick={() => hideModal("tip-from-fin")}
          >
            Obrigado!
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TipFromFin;
