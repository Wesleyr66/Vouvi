import Modal from "./Modal";
import hideModal from "../../utils/hideModal";
import showModal from "../../utils/showModal";
import { useState } from "react";
import axios from "axios";

function NewExpense() {
  const userAccounts = [
    { id: 0, name: "nu" },
    { id: 1, name: "carteira" },
    { id: 2, name: "depósitos" },
  ];

  const userCategories = [
    { id: 0, name: "salário" },
    { id: 1, name: "freelance" },
    { id: 2, name: "investimentos" },
  ];

  const [ammount, setAmmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [account, setAccount] = useState(0);
  const [category, setCategory] = useState(0);

  const clearForm = () => {
    setAmmount(0);
    setDate(new Date().toISOString().split("T")[0]);
    setAccount(0);
    setCategory(0);
  };

  return (
    // TODO Change icon to match figma
    <Modal
      id="update-goal"
      title="Casa"
      icon="solar:pen-bold"
      iconColor={"#FF8800"}
      iconWidth={48}
      top
    >
      <form
        className="mt-10 flex flex-col gap-7 text-[12px] xs:text-[14px] sm:text-[20px] md:w-96 md:text-md -z-10"
        onSubmit={(event) => {
          hideModal("new-income");
          event.preventDefault();
          clearForm();
        }}
      >
        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-amount">Valor da meta:</label>
            <Input
              type="number"
              id="income-amount"
              name="income-amount"
              value={ammount}
              onChange={(event) => setAmmount(event.target.value)}
              required
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-date">Valor atual:</label>
            <Input
              type="number"
              id="income-date"
              name="income-date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-date">Adicionar valor:</label>
            <Input
              type="number"
              id="income-date"
              name="income-date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="flex w-1/2 flex-col">
            <label htmlFor="category">Categoria:</label>
            <button
              name="category"
              id="category"
              className="w-full rounded-md border-[3px] border-primary-200 p-2 sm:border-4 sm:text-[20px] md:text-md dark:border-secondary-200 dark:bg-black"
              value={category}
              onClick={() => showModal("choose-expense-category")}
            >
              Categoria
            </button>
          </div>
        </div>

        <div className="font-medium flex flex-col gap-2">
          <p>Meta mensal: R$100,00</p>
          <p>Meta semanal: R$100,00</p>
          <p>Meta diária: R$100,00</p>
        </div>

        <button
          className={`flex w-full items-center justify-center rounded-sm bg-primary-200 p-3 font-bold text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black`}
        >
          <p className="text-[14px] xs:text-[18px] sm:text-[20px] md:text-md">
            Salvar
          </p>
        </button>
      </form>
    </Modal>
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

export default NewExpense;
