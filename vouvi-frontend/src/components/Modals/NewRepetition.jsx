import hideModal from "../../utils/hideModal";
import Modal from "./Modal";
import { useState } from "react";
import { Icon } from "@iconify/react";

function NewRepetition() {

  // Const para a checkbox marcada
  const [selectedOption, setSelectedOption] = useState("");

  // Mudar as informações conforme a opção marcada
  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? "" : option); // Alterna entre marcar/desmarcar
  };

  return (
    <Modal
      id="new-repetition"
      // TODO colocar o ícone correto
      icon={"icon-park-solid:up-one"}
      iconColor={"green"}
      iconWidth={32}
      title={"Adicionar Repetição"}
      top
    >
      <div className="mx-5 my-4 md:text-md text-sm">
        <div class="gap-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="despesaFixa"
              name="despesaFixa"
              className="scale-150 w-3 h-3"
              checked={selectedOption === "despesaFixa"}
              onChange={() => handleCheckboxChange("despesaFixa")}
            />
            <label htmlFor="despesaFixa">é uma despesa fixa</label>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            id="parcelado"
            name="parcelado"
            className="scale-150 w-3 h-3"
            checked={selectedOption === "parcelado"}
            onChange={() => handleCheckboxChange("parcelado")}
          />
          <label htmlFor="parcelado">é um lançamento parcelado</label>
        </div>
      </div>

      <div className="mt-4 p-4">
        {selectedOption === "despesaFixa" && (
          <div className="w-full flex justify-between gap-2">
            <select
              className="w-2/5 border-[3px] border-black rounded-[12px] px-3 py-2 sm:text-[20px] text-[16px] focus:ring focus:ring-blue-300"
            >
              <option>Mensal</option>
              <option>Bimestral</option>
              <option>Semestral</option>
            </select>

            <input
              type="date"
              className="border-[3px] border-secondary-200 rounded-[12px] px-3 py-2 sm:text-[20px] text-[16px] focus:ring focus:ring-blue-300"
            />
          </div>
        )}
        {selectedOption === "parcelado" && (
          <div className="">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center gap-3">

                <select
                  className="w-full border-[3px] border-black rounded-[12px] px-3 py-2 sm:text-[20px] text-[16px] focus:ring focus:ring-blue-300"
                >
                  <option>1 Parcela</option>
                  <option>2 Parcelas</option>
                  <option>3 Parcelas</option>
                  <option>4 Parcelas</option>
                  <option>5 Parcelas</option>
                  <option>6 Parcelas</option>
                  <option>7 Parcelas</option>
                  <option>8 Parcelas</option>
                  <option>9 Parcelas</option>
                  <option>10 Parcelas</option>
                  <option>11 Parcelas</option>
                  <option>12 Parcelas</option>
                </select>

                <div className="w-full flex justify-between gap-2">
                  <select
                    className="sm:w-2/5 border-[3px] border-black rounded-[12px] px-3 py-2 sm:text-[20px] text-[16px] focus:ring focus:ring-blue-300"
                  >
                    <option>Mensal</option>
                  </select>

                  <input
                    type="date"
                    className="border-[3px] border-secondary-200 rounded-[12px] px-3 py-2 sm:text-[20px] text-[16px] focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div className="mt-2 gap-2 text-gray-500 text-sm flex items-center">
                <div className="">
                  <Icon
                    icon="si:info-fill"
                    width="25px"
                    color="gray"
                  />
                </div>
                <div className="sm:text-[16px] text-[14px]">
                Serão lançadas <u>2 parcelas</u> de <strong className="text-green-200">R$0,00</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="mt-[40%] flex w-full justify-between p-3 sm:p-0">
        <button className="rounded-[9px] bg-black/20 p-2 sm:px-8 px-4 transition-all duration-200 hover:bg-black/70 hover:text-white"
        onClick={() => hideModal("new-repetition")}
        >
          Cancelar
        </button>
        <button
          className="font-bold rounded-[9px] bg-primary-200 p-2 sm:px-11 px-7 text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black"
          onClick={() => hideModal("new-repetition")}
        >
          Salvar
        </button>

      </div>
    </Modal>
  );
}

export default NewRepetition;