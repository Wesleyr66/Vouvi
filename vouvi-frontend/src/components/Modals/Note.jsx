import Modal from "./Modal";
import { useState } from "react";


function Note() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <Modal
      title="Anotações livres"
      id="note-modal"
      icon={"mdi:note-outline"}
      iconColor={"black"}
      iconWidth={32}
      top
    >
      <form className="w-[35vw]">
        <div className="flex flex-col rounded-md bg-[#FFB515] p-4">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="title"
            placeholder="Título"
            className="mb-4 bg-black/0 text-base placeholder:text-black/50 focus:outline-none"
          />
          <textarea
            name="note"
            id="note"
            rows={5}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="resize-none overflow-y-hidden text-base focus:outline-none"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #FFB515, #FFB515 2.3rem, #000 2.3rem, #000 2.5rem)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            maxLength={300}
          ></textarea>
        </div>

        <div className="mt-8 flex w-full justify-between text-[30px] font-bold">
          <button
            type="button" // Define o botão como "button" para evitar o envio automático
            onClick={() => {
              setTitle(""); // Limpa o campo de título
              setNote(""); // Limpa o campo de texto
            }}
            className="rounded-sm bg-black/50 p-6 transition-colors hover:bg-[#FFB515]"
          >
            Cancelar
          </button>
          <button
            type="submit" // Submete o formulário
            className="rounded-sm p-6 transition-colors hover:bg-[#FFB515]"
          >
            Salvar anotação
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Note;
