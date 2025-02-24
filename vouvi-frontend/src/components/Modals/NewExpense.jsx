import Modal from "./Modal";
import hideModal from "../../utils/hideModal";
import showModal from "../../utils/showModal";
import { useState } from "react";

function NewExpense() {

  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [account, setAccount] = useState(0);
  const [category, setCategory] = useState(0);

  const clearForm = () => {
    setTitle("");
    setAmmount(0);
    setDate(new Date().toISOString().split("T")[0]);
    setAccount(0);
    setCategory(0);
  };

  return (
    // TODO Change icon to match figma
    <Modal
      id="new-expense"
      title="Novo gasto"
      icon="bx:bxs-wallet"
      iconColor={"red"}
      iconWidth={48}
      top
    >
      <form
        className="flex md:w-96 flex-col gap-7 md:text-md sm:text-[20px] xs:text-[14px] text-[12px]"
        onSubmit={(event) => {
          hideModal("new-income");
          event.preventDefault();
          clearForm();
        }}
      >
        <label htmlFor="income-name">Título:</label>
        <Input
          type="text"
          id="income-name"
          name="income-name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-amount">Valor:</label>
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
            <label htmlFor="income-date">Data:</label>
            <Input
              type="date"
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
            <label htmlFor="account">Conta/Cartão</label>
            <button
              name="account"
              id="account"
              className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 p-2 md:text-md sm:text-[20px] dark:border-secondary-200 dark:bg-black"
              value={account}
              onClick={() => showModal("choose-account")}
            >
              Conta
            </button>
          </div>

          <div className="flex w-1/2 flex-col">
            <label htmlFor="category">Categoria:</label>
            <button
              name="category"
              id="category"
              className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 p-2 md:text-md sm:text-[20px] dark:border-secondary-200 dark:bg-black"
              value={category}
              onClick={() => showModal("choose-expense-category")}
            >
              Categoria
            </button>
          </div>
        </div>

        <button className="rounded-sm bg-black/40 p-3 font-bold transition-all duration-200 hover:bg-black/0"
        type="button"
        onClick={() => showModal("new-repetition")}>
          Adicionar repetição
        </button>

        <button
          className={`flex w-full items-center justify-center rounded-sm bg-primary-200 p-3 font-bold text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black`}
        >
          <p className="md:text-md sm:text-[20px] xs:text-[18px] text-[14px]">Salvar</p>
        </button>
      </form>
    </Modal>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 sm:p-2 p-1 pl-2 md:text-md sm:text-[20px] outline-none dark:border-secondary-200 dark:bg-black dark:text-white"
    />
  );
}

export default NewExpense;
