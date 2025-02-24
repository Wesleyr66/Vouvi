// Import Components
import AvatarColors from "./AvatarColors";
import AvatarTrinkets from "../../components/Cards/AvatarTrinkets";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

// Import Assets
import EyesLightBlue from "../../assets/images/eyes-light-blue.svg";
import EyesGray from "../../assets/images/eyes-gray.svg";
import EyesBrown from "../../assets/images/eyes-brown.svg";
import EyesDarkGreen from "../../assets/images/eyes-dark-green.svg";
import NecklaceLemon from "../../assets/images/necklace-lemon-chiffon.svg";
import NecklaceNaples from "../../assets/images/necklace-naples-yellow.svg";
import NecklaceVerdigris from "../../assets/images/necklace-verdigris.svg";
import NecklaceYale from "../../assets/images/necklace-yale-blue.svg";
import Pendant8Star from "../../assets/images/pendant-8-star.svg";
import PendantHearth from "../../assets/images/pendant-hearth.svg";
import PendantIndigo from "../../assets/images/pendant-indigo-v.svg";
import PendantTiffany from "../../assets/images/pendant-tiffany-star.svg";
import BgBeach from "../../assets/images/background-beach.svg";
import BgForest from "../../assets/images/background-forest.svg";
import BgSpace from "../../assets/images/background-space.svg";
import BgRoom from "../../assets/images/background-room.svg";

import { Icon } from "@iconify/react";
import { useState } from "react";

function AvatarCustom() {
  // button color
  const [BtColor, BtNoColor] = useState(0);
  const BtBg = "bg-white dark:bg-[#1F1F1F] text-black dark:text-white";
  const TextColor = "text-black dark:text-white";
  const Hidden = "hidden";
  const SetColor = (index) => {
    BtNoColor(index);
  };

  const [eyesColor, setEyesColor] = useState(null); // Estado para armazenar a cor dos olhos

  // Função para atualizar o estado de eyesColor ao clicar
  const ChangeEyes = (eyes) => {
    setEyesColor(eyes); // Define EyesBrown como o valor do estado
  };

  const [pendantColor, setPendantColor] = useState(null);

  const ChangePendant = (pendant) => {
    setPendantColor(pendant);
  };

  const [necklaceColor, setNecklaceColor] = useState(null);

  const ChangeNecklace = (necklace) => {
    setNecklaceColor(necklace);
  };

  const [textureColor, setTextureColor] = useState();

  const ChangeTexture = (texture) => {
    setTextureColor(texture);
  };

  const [backgroundColor, setBackgroundColor] = useState();

  const ChangeBackground = (texture) => {
    setBackgroundColor(texture);
  };
  return (
    <div className="f flex h-[100%] w-full flex-col gap-0 p-0 md:h-auto md:max-w-[90%] md:flex-row md:justify-center lg:w-full 2xl:w-[90%] 2xl:justify-evenly 2xl:gap-5">
      <AvatarColors
        Eyes={eyesColor}
        Texture={textureColor}
        Necklace={necklaceColor}
        Pendant={pendantColor}
        Background={backgroundColor}
      />

      <div className="flex h-[100%] flex-col bg-[#C9C9C8] md:w-[510px] md:rounded-br-md md:rounded-tr-md md:p-5 lg:w-[550px] lg:rounded-r-md xl:w-7/12 2xl:w-[900px] 2xl:rounded-md 2xl:p-10 dark:bg-[#151515]">
        <h1 className="hidden w-full font-medium md:flex md:pb-5 md:text-md lg:pb-10 lg:text-lg dark:text-white">
          Crie seu avatar!
        </h1>
        <div className="flex justify-center md:w-auto md:justify-start">
          <button
            className={`${BtColor === 0 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 items-center justify-evenly rounded-t-[10px] p-3 font-medium md:h-10 md:rounded-t-md md:p-[2.40%] md:text-sm lg:h-10 lg:p-5 lg:text-[20px] xl:h-12 xl:p-3 xl:text-[20px] 2xl:h-14 2xl:p-5 2xl:text-md`}
            onClick={() => SetColor(0)}
          >
            <Icon
              className={`${BtColor === 0 ? TextColor : ""} w-8 md:w-5 lg:w-14 xl:w-8 2xl:w-10`}
              width="34"
              icon={"mingcute:eye-fill"}
            />{" "}
            <p className="hidden md:flex lg:hidden xl:flex">Olhos</p>
          </button>
          <button
            className={`${BtColor === 1 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} ml-[4px] flex h-10 items-center justify-evenly rounded-t-[10px] p-3 font-medium md:ml-0 md:h-10 md:rounded-t-md md:p-[2.40%] md:text-sm lg:h-10 lg:p-5 lg:text-[20px] xl:h-12 xl:p-3 xl:text-[20px] 2xl:h-14 2xl:p-5 2xl:text-md`}
            onClick={() => SetColor(1)}
          >
            <Icon
              className={`${BtColor === 1 ? TextColor : ""} w-8 md:w-5 lg:w-14 xl:w-8 2xl:w-10`}
              width="34"
              icon={"icon-park-outline:texture"}
            />{" "}
            <p className="hidden md:flex lg:hidden xl:flex">Pelos</p>
          </button>
          <button
            className={`${BtColor === 2 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} ml-[4px] flex h-10 items-center justify-evenly rounded-t-[10px] p-3 font-medium md:ml-0 md:h-10 md:rounded-t-md md:p-[2.40%] md:text-sm lg:h-10 lg:p-5 lg:text-[20px] xl:h-12 xl:p-3 xl:text-[20px] 2xl:h-14 2xl:p-5 2xl:text-md`}
            onClick={() => SetColor(2)}
          >
            <Icon
              className={`${BtColor === 2 ? TextColor : ""} w-8 md:w-5 lg:w-14 xl:w-8 2xl:w-10`}
              width="34"
              icon={"carbon:circle-dash"}
            />{" "}
            <p className="hidden md:flex lg:hidden xl:flex">Coleiras</p>
          </button>
          <button
            className={`${BtColor === 3 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} ml-[4px] flex h-10 items-center justify-evenly rounded-t-[10px] p-3 font-medium md:ml-0 md:h-10 md:rounded-t-md md:p-[2.40%] md:text-sm lg:h-10 lg:p-5 lg:text-[20px] xl:h-12 xl:p-3 xl:text-[20px] 2xl:h-14 2xl:p-5 2xl:text-md`}
            onClick={() => SetColor(3)}
          >
            <Icon
              className={`${BtColor === 3 ? TextColor : ""} w-8 md:w-5 lg:w-14 xl:w-8 2xl:w-10`}
              width="34"
              icon={"mdi:necklace"}
            />{" "}
            <p className="hidden md:flex lg:hidden xl:flex">Pingentes</p>
          </button>
          <button
            className={`${BtColor === 4 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} ml-[4px] flex h-10 items-center justify-evenly rounded-t-[10px] p-3 font-medium md:ml-0 md:h-10 md:rounded-t-md md:p-[2.35%] md:text-sm lg:h-10 lg:p-5 lg:text-[20px] xl:h-12 xl:p-3 xl:text-[20px] 2xl:h-14 2xl:p-5 2xl:text-md`}
            onClick={() => SetColor(4)}
          >
            <Icon
              className={`${BtColor === 4 ? TextColor : ""} w-8 md:w-5 lg:w-14 xl:w-8 2xl:w-10`}
              width="34"
              icon={"mynaui:square-solid"}
            />{" "}
            <p className="hidden md:flex lg:hidden xl:flex">Fundos</p>
          </button>
        </div>
        <div
          className={`${BtColor !== 0 ? Hidden : "inline"} m-auto mb-0 mt-0 flex h-[225px] w-[295px] flex-wrap rounded-[0px_0px_24px_24px] bg-white pl-0.5 pt-3 md:mb-0 md:h-[170px] md:w-full md:p-5 lg:h-full dark:bg-[#1F1F1F]`}
        >
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeEyes(EyesBrown)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={EyesBrown}
              alt="Olhos castanhos"
              title="Clique para selecionar olhos castanhos"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeEyes(EyesDarkGreen)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={EyesDarkGreen}
              alt="Olhos verde escuro"
              title="Clique para selecionar olhos verde escuro"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeEyes(EyesGray)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={EyesGray}
              alt="Olhos cinza"
              title="Clique para selecionar olhos cinza"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeEyes(EyesLightBlue)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={EyesLightBlue}
              alt="Olhos azul claro"
              title="Clique para selecionar olhos azul claro"
            />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 1 ? Hidden : "inline"} m-auto flex h-[225px] w-[295px] flex-wrap rounded-[0px_0px_24px_24px] bg-white p-5 pl-0.5 pt-3 md:h-full md:w-full md:p-5 dark:bg-[#1F1F1F]`}
        >
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeTexture("white")}
            color={"bg-white"}
            aria-label="Selecione a textura branca"
            title="Selecione a textura branca"
          ></AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeTexture("#D5BAA5")}
            color={"bg-[#D5BAA5]"}
            aria-label="Selecione a textura bege"
            title="Selecione a textura bege"
          ></AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeTexture("#090909")}
            color={"bg-[#090909]"}
            aria-label="Selecione a textura preta"
            title="Selecione a textura preta"
          ></AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeTexture("#C44A07")}
            color={"bg-[#C44A07]"}
            aria-label="Selecione a textura marrom"
            title="Selecione a textura marrom"
          ></AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 2 ? Hidden : "inline"} m-auto flex h-[225px] w-[295px] flex-wrap rounded-[0px_0px_24px_24px] bg-white pl-0.5 pt-3 md:h-full md:w-full md:p-5 dark:bg-[#1F1F1F]`}
        >
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeNecklace(NecklaceYale)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={NecklaceYale}
              alt="Colar Yale"
              title="Clique para selecionar o colar Yale"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeNecklace(NecklaceNaples)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={NecklaceNaples}
              alt="Colar Naples"
              title="Clique para selecionar o colar Naples"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeNecklace(NecklaceLemon)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={NecklaceLemon}
              alt="Colar Lemon"
              title="Clique para selecionar o colar Lemon"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeNecklace(NecklaceVerdigris)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img
              src={NecklaceVerdigris}
              alt="Colar Verdigris"
              title="Clique para selecionar o colar Verdigris"
            />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 3 ? Hidden : "inline"} m-auto flex h-[225px] w-[295px] flex-wrap rounded-[0px_0px_24px_24px] bg-white p-5 pl-0.5 pt-3 md:h-full md:w-full md:p-5 dark:bg-[#1F1F1F]`}
        >
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangePendant(Pendant8Star)}
            color={"bg-white"}
          >
            <img
              src={Pendant8Star}
              alt="Pingente em forma de estrela com 8 pontas"
              title="Clique para selecionar o pingente estrela com 8 pontas"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangePendant(PendantHearth)}
            color={"bg-white"}
          >
            <img
              src={PendantHearth}
              alt="Pingente em forma de coração"
              title="Clique para selecionar o pingente coração"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangePendant(PendantIndigo)}
            color={"bg-white"}
          >
            <img
              src={PendantIndigo}
              alt="Pingente na cor índigo"
              title="Clique para selecionar o pingente índigo"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangePendant(PendantTiffany)}
            color={"bg-white"}
          >
            <img
              src={PendantTiffany}
              alt="Pingente na cor Tiffany"
              title="Clique para selecionar o pingente Tiffany"
            />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 4 ? Hidden : "inline"} m-auto flex h-[225px] w-[295px] flex-wrap rounded-[0px_0px_24px_24px] bg-white p-5 pl-0.5 pt-3 md:h-full md:w-full md:p-5 dark:bg-[#1F1F1F]`}
        >
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeBackground(BgBeach)}
          >
            <img
              className="h-full max-w-none"
              src={BgBeach}
              alt="Imagem de fundo de uma praia"
              title="Clique para selecionar o fundo de praia"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeBackground(BgForest)}
          >
            <img
              className="h-full max-w-none"
              src={BgForest}
              alt="Imagem de fundo de uma floresta"
              title="Clique para selecionar o fundo de floresta"
            />
          </AvatarTrinkets>
          <AvatarTrinkets
            tabIndex="0"
            onClick={() => ChangeBackground(BgSpace)}
          >
            <img
              className="h-full max-w-none"
              src={BgSpace}
              alt="Imagem de fundo do espaço"
              title="Clique para selecionar o fundo de espaço"
            />
          </AvatarTrinkets>
          <AvatarTrinkets tabIndex="0" onClick={() => ChangeBackground(BgRoom)}>
            <img
              className="h-full max-w-none"
              src={BgRoom}
              alt="Imagem de fundo de um quarto"
              title="Clique para selecionar o fundo de quarto"
            />
          </AvatarTrinkets>
        </div>
        <div className="relative mx-auto flex w-[296px] flex-row justify-between pt-[5%] md:absolute">
          <Link className="flex w-full md:hidden" to={"/profile"}>
            <SecondaryButton
              color={
                "w-12/12 text-sm sm:text-sm hover:bg-opacity-100 hover:text-primary-200 bg-white"
              }
              text={"Pronto!"}
            />
          </Link>
          <Link className="flex w-full md:hidden" to={"/profile"}>
            <SecondaryButton
              color={
                "w-[160px] sm:w-[150px] sm:text-sm text-sm hover:bg-opacity-100 hover:text-primary-200 bg-white"
              }
              text={"Salvar Estilo"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AvatarCustom;
