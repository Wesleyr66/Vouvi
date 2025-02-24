import { Icon } from "@iconify/react";
import axios from "axios";
import Friends from "../Cards/FriendCards";
import { useState } from "react";
function FriendsModal({ closeModal }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [friend, setFriend] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) {
      setError("Digite o nome do seu amigo");
      return;
    }

    try {
      const response = await axios.get(
        `https://backend.vouvi.com.br/users/${searchTerm}`,
      );
      const user = response.data;

      if (!user) {
        setError("Nenhum amigo encontrado");
        setFriend(null);
        return;
      }

      const levelUser = Math.floor(user.xp / 100) + 1;
      setFriend({ ...user, level: levelUser });
      setError("");
    } catch (error) {
      console.error("Erro ao buscar amigo:", error);
      if (error.response && error.response.status === 404) {
        setError("Amigo não encontrado");
      } else {
        setError("Erro ao conectar com o servidor");
      }
      setFriend(null);
    }
  };

  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-[90vh] w-11/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black md:w-10/12 lg:w-8/12 dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <h1 className="text-right text-[26px] font-medium sm:text-[32px] dark:text-white">
            Adicionar amigo
          </h1>

          <div className="flex items-center gap-5">
            <Icon
              tabIndex="0"
              onClick={closeModal}
              className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
        </div>

        <div
          tabIndex="0"
          className="mt-5 flex justify-between rounded-md bg-[#8D8D8D33] p-2 dark:bg-[#3D3D3D4D]"
        >
          <input
            className="w-full rounded-md bg-white bg-opacity-0 text-[24px] outline-none placeholder:text-[24px] placeholder:font-medium placeholder:text-[#02020B80] dark:text-white placeholder:dark:text-[#F5F5F44D]"
            type="text"
            placeholder="Digite o nome do seu amigo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Icon
            icon="fluent:search-12-filled"
            width="36px"
            className="cursor-pointer text-[#878787]"
            onClick={handleSearch}
          />
        </div>

        {/* Exibe os resultados da busca */}
        <div className="mt-5">
          {friend ? (
            <Friends
              key={friend.id}
              icon={"red"}
              name={friend.username}
              level={friend.level}
              xp={friend.xp}
              vcoin={friend.vcoin}
            />
          ) : (
            <p className="text-gray-500 text-center dark:text-white">Nenhum amigo encontrado</p>
          )}
        </div>
      </div>
    </section>
  );
}
export default FriendsModal;
