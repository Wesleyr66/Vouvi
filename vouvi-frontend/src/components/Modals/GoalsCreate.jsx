import { Icon } from "@iconify/react";
import convertFloat from "../../utils/convertFloat";
import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import hideModal from "../../utils/hideModal";

function BudgetDetailsEdit({ closeModal }) {
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
      className={`fixed left-0 top-0 z-50 flex hidden h-screen w-screen flex-wrap justify-center gap-3 overflow-hidden bg-white/50 pt-10 backdrop-blur-xl dark:bg-black/50`}
      id={"create-goal"}
    >
      {/* Modal container */}
      <div className="h-[650px] w-2/5 min-w-80 rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
        <div
          className="flex items-center justify-between"
          onClick={() => hideModal("create-goal")}
        >
          <h1 className="text-right text-[36px] font-medium dark:text-white">
            Criar meta
          </h1>

          <Icon
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>

        <div className="flex h-full w-3/5 flex-col justify-evenly text-[32px] font-medium">
          <div>
            <label className="">Nome:</label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Ex. fones de ouvido "
              required
            />
          </div>
          <div>
            <label className="">Valor:</label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="R$ 0,00"
              required
            />
          </div>
          <div>
            <label className="">Data de conclusão:</label>
            <Input type="date" id="title" name="title" required />
          </div>
          <div>
            <label className="">Valor inicial:</label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="R$0,00 "
              required
            />
          </div>
        </div>
      </div>

      {/* Modal container 2 */}
      <div className="h-[650px] w-fit min-w-80 max-w-[50vw] rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
        {/* Modal heading */}
        <div className="flex justify-between">
          <h2>Resumo</h2>
        </div>

        {/* Modal body */}
        <div className="mt-10">
          <div className="flex flex-col gap-3">
            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-green-200">Meta mensal:</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toReceive)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-red">Meta semanal:</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toPay)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-yellow">Meta diária:</h5>
              <p>
                <strong>Total:</strong> R$0,00
              </p>
            </div>
          </div>

          {/* Submit */}

          <div className="mt-20">
            <PrimaryButton text={"Criar meta"} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border-[3px] border-primary-200 p-1 pl-2 outline-none sm:border-4 sm:p-2 sm:text-[20px] md:text-md dark:border-secondary-200 dark:bg-black dark:text-white"
    />
  );
}

export default BudgetDetailsEdit;
