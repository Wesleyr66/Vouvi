import Modal from "./Modal";
import showModal from "../../utils/showModal";
import { Link } from "react-router-dom";
import hideModal from "../../utils/hideModal";

function FinancialMissions() {
    return (
        <Modal
            id="financial-missions"
            // TODO colocar o ícone correto
            icon={"mingcute:target-line"}
            iconColor={"red"}
            iconWidth={48}
            title={"Missões Financeiras"}
            top
        >
            <div className="mx-0 my-4 lg:text-md sm:text-[20px] text-[16px] flex flex-col gap-4">
                <div className="flex flex-row bg-[#DDDDDD] sm:p-4 p-2 dark:bg-[#1B1B1B] gap-3 rounded-md items-center justify-between">
                    <p className="w-[55%] text-wrap">Registre três pequenas <br /> economias feitas hoje</p>
                    <div onClick={() => {showModal("new-income");
                        hideModal("financial-missions");
                    }}
                    type="button">
                    <button
                    className="w-fit bg-primary-200 rounded-sm px-4 p-1 text-white hover:bg-secondary-200 hover:text-black transition-all duration-200" onClick={() => showModal("new-income")}>
                        Fazer agora!
                    </button>
                    </div>
                </div>
                <div className="flex flex-row text-wrap bg-[#DDDDDD] sm:p-4 p-2 dark:bg-[#1B1B1B] gap-3 rounded-md items-center justify-between">
                    <p className="w-[60%] text-wrap">Crie um novo orçamento</p>
                    <div onClick={() => {showModal("budget-modal");
                        hideModal("financial-missions");
                        hideModal("new-income");
                    }}
                    type="button">
                    <button
                    className="w-fit text-nowrap right-full bg-primary-200 rounded-sm px-4 p-1 text-white hover:bg-secondary-200 hover:text-black transition-all duration-200" onClick={() => showModal("new-income")}>
                        Fazer agora!
                    </button>
                    </div>
                </div>
                <div className="flex flex-row bg-[#DDDDDD] sm:p-4 p-2 dark:bg-[#1B1B1B] gap-3 rounded-md items-center justify-between">
                    <p className="w-[60%] text-wrap">Faça uma nota anotação</p>
                    <div onClick={() => {showModal("notes-modal");
                        hideModal("financial-missions");
                        hideModal("new-income");
                        hideModal("budget-modal");
                    }}
                    type="button">
                    <button
                    className="w-fit text-nowrap bg-primary-200 rounded-sm px-4 p-1 text-white hover:bg-secondary-200 hover:text-black transition-all duration-200" onClick={() => showModal("new-income")}>
                        Fazer agora!
                    </button>
                    </div>
                </div>
                
                
            </div>
            <div className="md:mt-5 sm:my-auto flex flex-col w-full mx-auto justify-center items-center gap-4 p-2">
            <p className="mt-2 sm:text-[16px] text-[14px] text-center">Veja suas missões completas e recompensas no seu perfil.</p>
                <Link className="" to={"/profile"}>
                    <button className="sm:text-md text-[16px] font-bold mx-auto bg-primary-200 rounded-sm px-5 p-2 text-white hover:bg-secondary-200 hover:text-black transition-all duration-200">
                        Ir para o Perfil
                    </button>
                </Link>
            </div>
        </Modal>
    );
}

export default FinancialMissions;