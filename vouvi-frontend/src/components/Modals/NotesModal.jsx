import Modal from "./Modal";
import NoteCard from "../Cards/NoteCard";
import showModal from "../../utils/showModal";
import { useEffect, useState } from "react";

function NotesModal() {
  const [notes, setNotes] = useState([]); // Estado para armazenar anotações

  const sortedNotes = [...notes].sort((a, b) => b.id - a.id);

  return (
    <Modal
      title="Anotações livres"
      id="notes-modal"
      icon={"solar:notes-bold"}
      iconColor={"#8B4A00"}
      iconWidth={32}
      top
    >
      <ul className="mt-4 flex max-h-[65vh] flex-col gap-4 overflow-y-auto px-3">
        <li>
          <button
            onClick={() => showModal("note-modal")}
            type="button"
            className="w-full rounded-[16px] border-4 border-[#8B4A00] bg-[transparent] p-2 text-[18px] font-semibold text-[#8B4A00] transition-all duration-300 hover:text-black xs:text-[20px] sm:text-md dark:border-0 dark:bg-yellow dark:hover:bg-white"
          >
            Adicionar anotação
          </button>
        </li>
            <NoteCard title={"note.title"} content={"note.text"} />
            <NoteCard title={"note.title"} content={"note.text"} />
            <NoteCard title={"note.title"} content={"note.text"} />
            <NoteCard title={"note.title"} content={"note.text"} />
      </ul>
    </Modal>
  );
}

export default NotesModal;
