import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SettingsModal({ closeModal }) {
  const [ballAnimation, noBallAnimation] = useState(true);
  const BA = "translate-x-14";

  const Call = () => {
    noBallAnimation(!ballAnimation);
    document.body.classList.toggle("dark");
    setDarkMode((dm) => !dm);
  };

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-fit w-11/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black md:w-10/12 lg:w-8/12 dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-black dark:bg-white">
              <Icon
                className="relative right-[1px] text-white dark:text-black"
                icon="solar:settings-bold"
                width="3rem"
              />
            </div>
            <h1 className="text-right text-[32px] font-medium dark:text-white">
              Ajustes
            </h1>
          </div>
          <Icon
            onClick={closeModal}
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        <div className="mt-5 flex cursor-pointer items-center justify-between rounded-md bg-[rgba(141,141,141,0.30);] p-4 transition-colors duration-300 hover:bg-[#8D8D8DCC] dark:bg-black hover:dark:bg-[#02020B66]">
          <div className="flex flex-col">
            <Link to="/plans" className="block">
              <h1 className="text-[20px] font-medium xs:text-[25px] sm:text-[32px] dark:text-white">
                Plano atual
              </h1>
              <p className="hidden text-[16px] font-medium text-primary-200 xs:text-[20px] sm:block sm:text-md">
                Atualize seu plano hoje mesmo
              </p>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="/plans" className="block">
              <h1 className="text-right text-[20px] font-medium xs:text-[25px] sm:text-[32px] dark:text-white">
                Essencial
              </h1>
              <p className="hidden text-[16px] font-medium text-primary-200 xs:text-[20px] sm:block sm:text-md">
                Seja Premium
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-md bg-[rgba(141,141,141,0.30);] p-4 transition-colors duration-300 hover:bg-[#8D8D8DCC] dark:bg-black hover:dark:bg-[#02020B66]">
          <div className="flex flex-col">
            <h1 className="text-[20px] font-medium xs:text-[25px] sm:text-[32px] dark:text-white">
              Modo claro
            </h1>
            <p className="hidden text-[16px] font-medium text-primary-200 xs:text-[20px] sm:block sm:text-md">
              Aqui é você que escolhe a visualização
            </p>
          </div>
          <div
            onClick={Call}
            className="flex h-10 w-24 cursor-pointer items-center rounded-md bg-black p-1 dark:bg-white"
          >
            <div
              className={`h-8 w-8 rounded-full bg-white transition-transform duration-300 dark:bg-black ${
                ballAnimation ? BA : ""
              }`}
            ></div>
          </div>
        </div>
        <Link to={"/"}>
          <div
            onClick={Logout}
            className="mt-32 flex cursor-pointer items-center justify-between rounded-md bg-[#E3000033] px-4 py-2 transition-colors duration-300 hover:bg-[#E300001A]"
          >
            <div className="flex flex-col">
              <h1 className="text-[20px] font-medium xs:text-[25px] sm:text-[32px] dark:text-white">
                Sair da conta
              </h1>
              <p className="text-[16px] font-medium text-red xs:text-[20px] sm:text-md">
                Aqui é você que escolhe a visualização
              </p>
            </div>
            <Icon className="text-red" icon="solar:exit-bold" width="4rem" />
          </div>
        </Link>
        <p className="m-auto mt-4 text-[24px] font-semibold text-black dark:text-white">
          Versão 1.0.0 (beta)
        </p>
      </div>
    </section>
  );
}

export default SettingsModal;
