import primeiro from "../../../images/coroaclaro.png";
import segundo from "../../../images/prata.png";
import terceiro from "../../../images/bronzeclaro.png";
import Darkprimeiro from "../../../images/coroa.png";
import Darksegundo from "../../../images/prata.png";
import Darkterceiro from "../../../images/bronze.png";

const Colocacao = (props) => {
  const textp = "text-primeiro";
  const texts = "text-segundo";
  const textt = "text-terceiro";

  return (
    <>
      <div className="flex flex-col items-center justify-end">
        <div className="relative left-5 top-6 h-6 md:left-9 md:top-2 md:h-2 md:w-14">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-medium text-white md:h-9 md:w-9">
            {props.posicao}°
          </span>
        </div>
        {props.posicao === 1 ? (
          <img
            src={
              document.body.classList.value === "dark" ? Darkprimeiro : primeiro
            }
            alt=""
            className="mr-6 w-[18vw] md:m-4 md:w-[12vw] lg:w-[10vw]"
          ></img>
        ) : props.posicao === 2 ? (
          <img
            src={
              document.body.classList.value === "dark" ? Darksegundo : segundo
            }
            alt=""
            className="mr-6 w-[13vw] md:w-[10vw] lg:w-[8vw]"
          ></img>
        ) : (
          <img
            src={
              document.body.classList.value === "dark" ? Darkterceiro : terceiro
            }
            alt=""
            className="mr-6 w-[13vw] md:w-[10vw] lg:w-[8vw]"
          ></img>
        )}

        {props.posicao === 1 ? (
          <>
            <p
              className={`${textp}lg:text-base mr-5 font-medium text-primary-200 md:text-[24px] dark:text-[#FF9F07]`}
            >
              {props.nome}
            </p>
            <p
              className={`${textp}underline mr-5 text-nowrap text-[16px] font-normal text-primary-200 md:mr-0 md:text-[20px] lg:mr-0 lg:text-base dark:text-[#FF9F07]`}
            >
              {props.xp} XP
            </p>
          </>
        ) : props.posicao === 2 ? (
          <>
            <p
              className={`${texts}lg:text-base mr-5 font-medium text-primary-200 md:text-[24px] dark:text-white`}
            >
              {props.nome}
            </p>
            <p
              className={`${texts}underline mr-5 text-nowrap text-[16px] font-normal text-primary-200 md:mr-auto md:text-[20px] lg:mr-0 lg:text-base dark:text-white`}
            >
              {props.xp} XP
            </p>
          </>
        ) : (
          <>
            <p
              className={`${textt} mr-5 text-nowrap text-[16px] font-medium text-primary-200 md:text-[24px] dark:text-[#C86B00]`}
            >
              {props.nome}
            </p>
            <p
              className={`${textt} mr-5 text-nowrap text-[14px] font-normal text-primary-200 md:mr-auto md:text-[20px] lg:mr-0 lg:text-base dark:text-[#C86B00]`}
            >
              {props.xp} XP
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Colocacao;
