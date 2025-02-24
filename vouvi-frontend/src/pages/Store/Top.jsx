// Import assets
import CatBanner from "../../assets/images/cat-banner-store.svg";

// Import components
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import StoreButton from "../../components/Buttons/StoreButton";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Top() {
  const [btnColor, setBtnColor] = useState(0);

  const activeButton = (index) => {
    setBtnColor(index);
  };

  return (
    <>
      <section className="m-auto mt-24 flex w-11/12 justify-between overflow-hidden rounded-[10px] bg-primary-100 px-5 pt-5 outline outline-[20px] outline-[#7C20BE33] sm:rounded-md md:px-10 md:pt-10 md:outline-[26px]">
        <div className="mt-5 w-3/6 leading-[1] text-primary-200 lg:ml-5">
          <h1 className="text-nowrap text-[24px] font-bold sm:text-[35px] md:text-[45px] lg:text-[54px] xl:text-xl">
            Seja Premium
          </h1>
          <p className="mt-6 w-[300px] text-[22px] font-light sm:w-fit sm:text-[23px] md:text-[29px] lg:text-base xl:text-lg">
            Energia infinita, ferramentas avançadas, e relatórios em PDF, para
            toda a família.
          </p>
          <div className="relative mt-14 w-fit pb-10">
            <Link to='/plans'>
              <PrimaryButton text={"Assinar agora!"} />
            </Link>
          </div>
        </div>
        <img
          className="pointer-events-none relative top-20 w-[150px] sm:top-0 sm:w-[240px] md:w-[300px] lg:w-[390px] xl:w-[510px]"
          src={CatBanner}
          alt="gato Fin, Uma ilustração em estilo cartoon de um gato preto com olhos bem abertos que têm dinheiro roxos nas pupilas. A boca do gato está aberta e um brilho roxo com dinheiro está emanando dela. O fundo é de cor roxa clara e o gato está usando um colar azul."
          title="gato Fin, Uma ilustração em estilo cartoon de um gato preto "
        />
      </section>

      <hr className="m-auto mb-5 mt-20 w-10/12 rounded-md bg-black p-1 lg:mb-14 dark:bg-[#F5F5F442]" />

      <section className={`relative m-auto w-11/12`}>
        <div className="mb-6 flex flex-wrap items-center justify-center overflow-hidden lg:flex-nowrap lg:justify-between">
          <div className="text-center text-base leading-[1] text-black lg:mr-10 lg:text-left xl:mr-20 dark:text-white">
            <h1 className={`font-medium`}>Personalize!</h1>
            <p className="font-light">Gaste vcoins!</p>
          </div>

          <div className="mt-14 flex w-full justify-around gap-2 lg:mt-0 lg:gap-4 lg:overflow-x-scroll">
            <div onClick={() => setBtnColor(0)}>
              <StoreButton
                tabIndex="0"
                title="opções de acessórios"
                color={
                  btnColor === 0
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }
                text={"Todos"}
              >
                <Icon
                  icon={"solar:star-shine-bold"}
                  title="opções de acessórios"
                />
              </StoreButton>
            </div>
            <div tabIndex="0" onClick={() => setBtnColor(1)}>
              <StoreButton
                color={
                  btnColor === 1
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }
                text={"Olhos"}
              >
                <Icon icon={"mingcute:eye-fill"} />
              </StoreButton>
            </div>
            <div tabIndex="0" onClick={() => setBtnColor(2)}>
              <StoreButton
                color={
                  btnColor === 2
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }
                text={"Pelos"}
              >
                <Icon icon={"icon-park-outline:texture"} />
              </StoreButton>
            </div>
            <div tabIndex="0" onClick={() => setBtnColor(3)}>
              <StoreButton
                color={
                  btnColor === 3
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }
                text={"Coleiras"}
              >
                <Icon icon={"carbon:circle-dash"} />
              </StoreButton>
            </div>
            <div tabIndex="0" onClick={() => setBtnColor(4)}>
              <StoreButton
                color={
                  btnColor === 4
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }
                text={"Pingente"}
              >
                <Icon icon={"mdi:necklace"} />
              </StoreButton>
            </div>
            <div tabIndex="0" onClick={() => activeButton(5)}>
              <StoreButton
                color={`${
                  btnColor === 5
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
                }`}
                text={"Fundos"}
                title="opções de fundo"
              >
                <Icon icon={"mynaui:square-solid"} />
              </StoreButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Top;
