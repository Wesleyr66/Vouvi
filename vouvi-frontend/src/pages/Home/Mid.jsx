import AiCards from "../../components/Cards/AiCards";
import AiCardsReverse from "../../components/Cards/AiCardsReverse";
import Rewards from "../../assets/images/missionsandrewards.png";
import HomeAnimation from "../../components/Rive/HomeAnimation";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Mid() {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.init({ once: true });
  });

  const AiIcon = (
    <svg
      viewBox="0 0 182 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[145px] 2xl:w-[182px]"
    >
      <rect
        x="4"
        y="4"
        width="174"
        height="174"
        rx="30"
        className="animate-pulse-color stroke-[#8D8D8D]"
        strokeWidth="8"
        strokeDasharray="12 12"
      />
    </svg>
  );

  const LineTopLeft = (
    <svg
      viewBox="0 0 100 174"
      className="relative right-2 top-[70px] hidden w-[80px] lg:flex 2xl:right-0 2xl:top-20 2xl:w-[100px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.8696 171H57.8696C57.8696 172.657 59.2127 174 60.8696 174V171ZM60.8696 16H63.8696C63.8696 14.3431 62.5264 13 60.8696 13V16ZM0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16ZM100 168H60.8696V174H100V168ZM63.8696 171V16H57.8696V171H63.8696ZM60.8696 13H16V19H60.8696V13Z"
        className="animate-pulse-line fill-[#8D8D8D]"
      />
    </svg>
  );

  const LineTopRight = (
    <svg
      className="hidden lg:flex lg:w-[240px] 2xl:w-[300px]"
      viewBox="0 0 297 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 16.5V13.5C1.84315 13.5 0.5 14.8431 0.5 16.5H3.5ZM264.5 16.5C264.5 25.3366 271.663 32.5 280.5 32.5C289.337 32.5 296.5 25.3366 296.5 16.5C296.5 7.66344 289.337 0.5 280.5 0.5C271.663 0.5 264.5 7.66344 264.5 16.5ZM6.5 67.5V16.5H0.5V67.5H6.5ZM3.5 19.5H280.5V13.5H3.5V19.5Z"
        className="animate-pulse-line fill-[#8D8D8D]"
      />
    </svg>
  );

  const LineDownLeft = (
    <svg
      className="relative -top-2 hidden w-[240px] lg:flex 2xl:w-[300px]"
      viewBox="0 0 305 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M302 92V95C303.657 95 305 93.6569 305 92H302ZM0 92C0 100.837 7.16344 108 16 108C24.8366 108 32 100.837 32 92C32 83.1634 24.8366 76 16 76C7.16344 76 0 83.1634 0 92ZM299 0V92H305V0H299ZM302 89H16V95H302V89Z"
        className="animate-pulse-line fill-[#8D8D8D]"
      />
    </svg>
  );

  const LineDownRight = (
    <svg
      className="relative hidden w-[180px] lg:bottom-20 lg:left-[15px] lg:flex 2xl:w-[224px]"
      viewBox="0 0 221 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M121.403 3H124.403C124.403 1.34315 123.059 0 121.403 0V3ZM121.403 202H118.403C118.403 203.657 119.746 205 121.403 205V202ZM189 202C189 210.837 196.163 218 205 218C213.837 218 221 210.837 221 202C221 193.163 213.837 186 205 186C196.163 186 189 193.163 189 202ZM0 6H121.403V0H0V6ZM118.403 3V202H124.403V3H118.403ZM121.403 205H205V199H121.403V205Z"
        className="animate-pulse-line fill-[#8D8D8D]"
      />
    </svg>
  );

  return (
    <>
      <section className="mt-24 flex flex-col items-center lg:mt-72">
        <h1
          data-aos="fade-up"
          className={`text-center text-[36px] font-medium leading-[1.2] sm:text-[50px] md:text-[72px] lg:text-[90px] ${TextGradient}`}
        >
          Planejamento <br className="block xs:hidden" /> inteligente
        </h1>

        <p
          data-aos="fade-up"
          className={`text-center text-[16px] sm:text-[28px] lg:text-[36px] ${TextGradient} relative top-3`}
        >
          Inteligência artificial? Aqui é para organizar sua vida!
        </p>

        <div
          className="relative mt-12 flex flex-col p-3 sm:mt-20 sm:items-stretch sm:p-10 lg:mt-0 lg:p-0"
          aria-label="A imagem mostra um ícone de banco de dados. O ícone é composto por três cilindros pretos empilhados horizontalmente, representando discos de armazenamento de dados, sobre um fundo cinza claro. Este ícone é frequentemente usado para representar bancos de dados em contextos de tecnologia da informação e desenvolvimento de software, sendo relevante para identificar sistemas de gerenciamento de dados."
        >
          <div className="relative bottom-3 m-auto flex flex-col items-end gap-4 sm:flex-row sm:items-center sm:gap-0 lg:bottom-0">
            <div
              title="A imagem mostra um ícone de banco de dados."
              data-aos="fade-right"
              className="animate-color-1 relative flex lg:top-[40px] 2xl:right-3"
              aria-label="A imagem mostra um ícone de um banco de dados"
            >
              <AiCards
                icon={
                  <Icon
                    icon="solar:database-bold"
                    className="text-[85px] xl:text-[108px]"
                  />
                }
                animateBgColor={"animate-bg-color-1"}
                animateColor={"animate-color-1"}
                text={"Acompanhamento de Dados"}
              />

              {LineTopLeft}
            </div>
            <div
              aria-label="ícone de planejamento. um calendario"
              title="ícone de calendario"
              data-aos="fade-left"
              className="animate-color-2 relative flex lg:left-[40px] lg:top-[30px] xl:left-[60px] 2xl:left-[100px]"
            >
              {LineTopRight}
              <AiCardsReverse
                icon={
                  <Icon
                    icon="fluent:calendar-ltr-16-filled"
                    className="text-[100px] xl:text-[120px]"
                  />
                }
                animateBgColor={"animate-bg-color-2"}
                animateColor={"animate-color-2"}
                text={`Planejamento personalizável`}
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="hidden items-center justify-center lg:flex"
          >
            {AiIcon}
            <p className="animate-pulse-color absolute text-[72px] text-[#8D8D8D] 2xl:text-2xl">
              IA
            </p>
          </div>

          <div className="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-stretch sm:gap-0 lg:top-3 lg:m-auto">
            <div
              aria-label="ícone de relogio"
              title="ícone de relogio preto"
              data-aos="fade-right"
              className="animate-color-3 relative flex lg:bottom-[40px]"
            >
              <AiCards
                icon={
                  <Icon
                    icon="lets-icons:time-atack"
                    className="text-[85px] xl:text-[108px]"
                  />
                }
                animateBgColor={"animate-bg-color-3"}
                animateColor={"animate-color-3"}
                text={"Dicas em Tempo Real"}
              />
              {LineDownLeft}
            </div>
            <div
              aria-label="A imagem mostra um logo e texto. O logo consiste em um círculo preto com três linhas curvas brancas dentro, parecendo um gráfico ou diagrama estilizado."
              title="ícone de diagrama preto"
              data-aos="fade-left"
              className="animate-color-4 relative flex justify-end lg:bottom-[60px] lg:left-[35px] lg:top-5 2xl:left-[60px]"
            >
              {LineDownRight}
              <AiCardsReverse
                icon={
                  <Icon
                    icon="solar:round-graph-bold"
                    className="text-[100px] xl:text-[120px]"
                  />
                }
                animateBgColor={"animate-bg-color-4"}
                animateColor={"animate-color-4"}
                text={"Gráficos inteligentes"}
              />
            </div>
          </div>
        </div>
      </section>

      <h1
        data-aos="fade-up"
        className={`${TextGradient} w-10/12 text-center text-[36px] font-medium leading-[1] xs:w-full sm:text-[50px] md:text-[72px] lg:text-[90px] xl:leading-[1.2] mt-[250px]`}
      >
        Domine o jogo, domine o dinheiro!
      </h1>
      <p
        data-aos="fade-up"
        className={`${TextGradient} text-center text-sm sm:text-md lg:text-base`}
      >
        Economize de Verdade Com Cada Missão Completa.
      </p>

      <br />

      <section className="mt-28 flex flex-col items-center lg:mt-20">
        <div data-aos="fade-right" className="m-auto flex h-[500px] w-screen flex-col items-center justify-center sm:flex-row">
          <div className="m-0 h-[300px] md:ml-40 md:h-full lg:ml-40 lg:w-1/3">
            <HomeAnimation stateMachine={"rico"} />
          </div>
          <div className="-mt-10 flex h-full w-full items-center justify-start text-center sm:m-0 md:ml-10 md:w-1/2 md:text-left">
            <h1
              className={`${TextGradient} w-full text-lg sm:text-lg md:text-[40px] lg:text-xl`}
            >
              Faça missões e <br /> ganhe recompensas
            </h1>
          </div>
        </div>

        <div data-aos="fade-left" className="mt-15 flex h-[500px] w-screen flex-col items-center justify-center gap-5 sm:mt-0 sm:flex-row-reverse md:mt-0">
          <div className="h-[300px] w-[350px] md:h-full lg:w-1/3">
            <HomeAnimation stateMachine={"personalize"} />
          </div>
          <div className="flex h-full w-full items-start text-center sm:items-center sm:text-end md:w-1/2">
            <h1
              className={`${TextGradient} w-full text-lg sm:text-lg md:text-lg lg:text-xl`}
            >
              Personalize <br /> o seu avatar
            </h1>
          </div>
        </div>

        <div data-aos="fade-right" className="flex h-[500px] w-screen flex-col items-center sm:flex-row">
          <div className="m-0 h-[300px] w-[400px] md:ml-40 md:h-full lg:ml-40 lg:w-1/3">
            <HomeAnimation stateMachine={"piscadinha"} />
          </div>
          <div className="-mt-20 flex h-full w-full items-center justify-start text-center sm:m-0 md:ml-10 md:w-1/2 md:text-left">
            <h1
              className={`${TextGradient} w-full text-lg sm:text-lg md:text-[40px] lg:text-xl`}
            >
              Economize e <br /> suba de ranking
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mid;
