import Friends from "../../components/Cards/FriendCards";
import { Icon } from "@iconify/react";
function Low({ friends, openModal, openModal2 }) {
  return (
    <section className="m-auto mt-20 w-11/12 text-[32px] font-medium sm:text-[40px] dark:text-white">
      <div className="group flex flex-col rounded-md bg-[rgba(124,32,190,0.50);] p-5 transition-colors duration-500 hover:bg-primary-200 dark:bg-[#1e1e1e] dark:hover:bg-[#282828]">
        <div className="flex flex-col flex-wrap items-start justify-between text-[#471650] group-hover:text-white sm:flex-row dark:text-white">
          <h1 className="mx-3 transition-colors duration-500 sm:mx-0">
            Amigos: {friends}
          </h1>

          <div
            onClick={openModal2}
            className="flex cursor-pointer flex-row-reverse items-center rounded-xl border-[#471650] px-2 text-[25px] transition-colors duration-500 hover:bg-black group-hover:border-white sm:flex-row sm:border-4 sm:text-[32px] dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <Icon icon="typcn:plus" />
            <p className="mx-1">Adicionar amigo</p>
          </div>
        </div>
        <div className="h-[37vh]">
          <Friends
            icon={"red"}
            name={"Débora paixão"}
            level={"999"}
            xp={"999"}
            vcoin={"999"}
          />
          <Friends
            icon={"blue"}
            name={"Pipoca"}
            level={"999"}
            xp={"5.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"PetiGatão"}
            level={"999"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
        </div>
        <div className="mx-5 mt-3 flex items-center justify-end text-[#471650] group-hover:text-white dark:text-white">
          <p
            onClick={openModal}
            className="cursor-pointer text-[32px] font-medium transition-colors duration-500"
          >
            Ver todos
          </p>
          <Icon
            onClick={openModal}
            icon="prime:sort-down-fill"
            className="cursor-pointer transition-colors duration-500"
          />
        </div>
      </div>
    </section>
  );
}
export default Low;
