import { Icon } from "@iconify/react";
import hideModal from "../../utils/hideModal";

function ChooseExpenseCategory() {
  const categories = [
    { id: 0, title: "Alimentação" },
    { id: 1, title: "Transporte" },
    { id: 2, title: "Lazer" },
  ];

  return (
    // Background
    <div
      className={`fixed left-0 top-0 z-50 flex hidden h-screen w-screen justify-center gap-3 overflow-hidden bg-white/50 backdrop-blur-xl dark:bg-black/50`}
      id={"choose-expense-category"}
    >
      {/* Modal container */}
      <div className="h-fit w-fit min-w-80 rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50">
        {/* Modal heading */}
        <div className="flex justify-between">
          <span className="flex items-center gap-4">
            <h2>Categoria</h2>
          </span>
          <button className="cursor-pointer">
            <Icon
              onClick={() => hideModal("choose-expense-category")}
              className="relative right-[1px] cursor-pointer text-black"
              icon="carbon:close-filled"
              width="3rem"
            />
          </button>
        </div>

        {/* Modal body */}
        <div className="mt-2">
          {
            // TODO trocar o icone de pesquisa
          }
          <span className="flex items-center justify-between rounded-[9px] border-[3px] border-secondary-200 p-2 transition-all hover:border-primary-200 focus:border-primary-200">
            <input
              type="search"
              className="bg-white/0 outline-none placeholder:text-black/80"
              placeholder="Pesquise seu banco"
            />
            <Icon icon={"akar-icons:search"} className="text-black" />
          </span>

          <ul className="max-h-[50vh] overflow-scroll">
            {categories.map((account) => (
              <li
                key={account.id}
                className="mt-4 flex items-center gap-4 rounded-sm bg-black/20 p-5"
              >
                {
                  // TODO adicionar o ícone por categoria
                  /* <img src="#" alt="imagem do banco" /> */
                }
                <Icon
                  width={64}
                  icon={"carbon:home"}
                  className="rounded-full bg-primary-200 p-5 text-white"
                />
                <span>{account.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-center gap-4">
            <button className="w-full rounded-[9px] bg-black/20 p-2 px-3 transition-all duration-200 hover:bg-black/70 hover:text-white">
              Cancelar
            </button>
            <button className="w-full rounded-[9px] bg-primary-200 p-2 px-3 text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black">
              Selecionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseExpenseCategory;
