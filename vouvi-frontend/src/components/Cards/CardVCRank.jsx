import PropTypes from "prop-types";
import primeiro from "../../../images/coroaclaro.png";
import segundo from "../../../images/prata.png";
import terceiro from "../../../images/bronzeclaro.png";
import Darkprimeiro from "../../../images/coroa.png";
import Darksegundo from "../../../images/prata.png";
import Darkterceiro from "../../../images/bronze.png";

const CardLateral = ({ nome, posicao, vc }) => {
  const textp = "text-[#FF9F07]";
  const texts = "text-[#767676]";
  const textt = "text-[#FF9F07]";

  return (
    <>
      {/* If its the user */}
      {nome === "Usuario" ? (
        <div className="flex w-full items-center justify-between rounded-md bg-[#002952] p-4 text-secondary-200 m-2 mr-3">
          <div className="flex items-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-200 text-md text-[#002952] md:h-10 md:w-10">
              {posicao}°
            </span>

            <div className="ml-2 text-[20px] font-medium md:w-1 md:text-[19px] lg:text-md">
              Você
            </div>
          </div>

          <div className="border-b-2 border-secondary-200 text-[20px] font-light leading-[1rem] text-secondary-200 md:leading-none lg:text-md">
            {vc} VC
          </div>
        </div>
      ) : posicao < 4 ? (
        // If its the top 3
        <div className="mb-2 flex h-14 w-full justify-between rounded-md bg-white p-1 md:h-[65px] dark:bg-[#3D3D3D]">
          <div className="flex items-center">
            {/* Primeiro */}
            {posicao === 1 ? (
              <img
                src={
                  document.body.classList.value === "dark"
                    ? Darkprimeiro
                    : primeiro
                }
                alt=""
                className="text-teste mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black md:h-12 md:w-12 lg:h-14 lg:w-14"
              />
            ) : posicao === 2 ? (
              // Segundo
              <img
                src={
                  document.body.classList.value === "dark"
                    ? Darksegundo
                    : segundo
                }
                alt=""
                className="text-teste mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black md:h-12 md:w-12 md:text-[19px] lg:h-12 lg:w-12"
              />
            ) : (
              // Terceiro
              <img
                src={
                  document.body.classList.value === "dark"
                    ? Darkterceiro
                    : terceiro
                }
                alt=""
                className="text-teste mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black md:h-12 md:w-12 lg:h-14 lg:w-14"
              />
            )}

            {posicao === 1 ? (
              // Primeiro
              <div
                className={`${textp} text-[20px] font-medium md:text-[23px] lg:text-md`}
              >
                {nome}
              </div>
            ) : posicao === 2 ? (
              // Segundo
              <div
                className={`${texts} text-[20px] md:text-[23px] lg:font-medium`}
              >
                {nome}
              </div>
            ) : (
              // Terceiro
              <div
                className={`${textt} text-[20px] md:text-[23px] lg:font-medium`}
              >
                {nome}
              </div>
            )}
          </div>
          {posicao === 1 ? (
            // Primeiro
            <div
              className={`${textp}underline mr-2 text-[16px] font-medium md:text-[22px] lg:text-md`}
            >
              {vc}VC
            </div>
          ) : posicao === 2 ? (
            // Segundo
            <div
              className={`${texts} mr-2 text-[16px] font-light underline md:text-[22px] lg:text-md`}
            >
              {vc}VC
            </div>
          ) : (
            // Terceiro
            <div
              className={`${textt}underline mr-2 text-[16px] font-light md:text-[22px] lg:text-md`}
            >
              {vc}VC
            </div>
          )}
        </div>
      ) : (
        <div className="mb-2 w-full items-center justify-between rounded-lg bg-white p-1 md:h-11 md:text-sm lg:flex dark:bg-[#3D3D3D]">
          <div className="text-textolado flex text-primary-200 dark:text-[#5C5C5C]">
            <div className="ml-4 mr-3 text-md">{posicao}°</div>
            <div className="text-md font-medium">{nome}</div>
          </div>
        </div>
      )}
    </>
  );
};

CardLateral.propTypes = {
  nome: PropTypes.string,
  posicao: PropTypes.number,
  vc: PropTypes.number,
};

export default CardLateral;
