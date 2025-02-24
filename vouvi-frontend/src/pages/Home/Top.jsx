import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Cards from "../../components/Cards/MarketingCards";
import FireIcon from "../../assets/images/fire-icon.svg";
import GreenIcon from "../../assets/images/graphicgreen-icon.svg";
import HeartIcon from "../../assets/images/heart-icon.svg";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Top({ background }) {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.init({ once: true });
  });

  return (
    <>
      <section className="flex flex-col justify-center items-center w-screen">
        {/* Background */}
        <div className="absolute top-0 left-0 -z-10 w-full overflow-hidden">
          <video
            className="h-screen lg:h-auto lg:min-h-full object-cover opacity-[0.25] blur-[2px] dark:blur-0"
            src={background}
            autoPlay
            muted
            loop
          ></video>
          <div className="to-transparent absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#ffffff] dark:from-black w"></div>
        </div>

        <div className="m-auto mb-32 mt-[200px] flex flex-col justify-center text-center text-black sm:mb-0 dark:text-white bg">
          <h1 className="text-[40px] font-normal leading-[0.85] sm:text-[50px] md:text-[60px] lg:text-[90px]">
            <strong className="font-medium text-secondary-200 drop-shadow-[0px_0px_50px_#007FFF]">
              Transforme
            </strong>{" "}
            suas{" "}
            <strong className="font-medium text-primary-200">
              {" "}
              <br className="block xs:hidden" /> finanças{" "}
            </strong>
            <br className="hidden xs:block" />
            em
            <br className="block xs:hidden" /> uma{" "}
            <strong className="font-medium text-primary-200">aventura</strong>
          </h1>
          <p className="mt-2 text-[16px] leading-[1] md:mt-7 md:text-[28px] lg:text-[36px]">
            Aprenda a fazer essa <br className="block xs:hidden" /> grana durar!
          </p>
        </div>

        <Link
          tabIndex="-1"
          to={"/login"}
          title="Aperte para criar uma nova conta"
        >
          <PrimaryButton text={"Começar agora!"} />
        </Link>

        <div className="m-auto mt-5 flex flex-col items-center justify-center xs:mt-[150px] bg">
          <p className="text-[30px] sm:text-[36px] dark:text-white">
            Saiba mais
          </p>
          <Icon
            className="relative animate-bounce text-[5rem] text-black sm:text-[7rem] dark:text-white"
            icon="ep:arrow-down-bold"
          />
        </div>
      </section>

      <h1
        className={`mb-10 mt-40 flex justify-center text-center text-[36px] font-medium leading-[1.2] sm:text-[50px] md:text-[60px] lg:text-[90px] ${TextGradient} `}
        data-aos="fade-up"
      >
        Educação Financeira
      </h1>

      <section
        className="flex flex-wrap justify-center gap-4 !scroll-smooth lg:flex-nowrap lg:gap-0"
        data-aos="fade-up"
      >
        <Cards
          img={FireIcon}
          area-label="ícone de Ícone quadrado com cantos arredondados em tom de laranja claro, com uma chama estilizada em laranja mais escuro no centro, representando fogo"
          title={"Zero dívidas!"}
          text={"Aprenda a se livrar das despesas e manter sua conta no azul."}
          color="text-[#FFB515] bg-[radial-gradient(105.89%_105.89%_at_50%_105.89%,rgba(255,184,104,0.26)_0%,rgba(2,2,11,0.00)_100%);] dark:bg-[radial-gradient(105.89%_105.89%_at_50%_105.89%,rgba(253,163,61,0.26)_0%,rgba(2,2,11,0.26)_100%)]"
        />
        <Cards
          img={GreenIcon}
          area-label="Ícone quadrado verde com bordas arredondadas. Dentro do ícone, há uma seta verde apontando para cima, que começa no canto inferior esquerdo e curva-se para cima até o canto superior direito. Este ícone é geralmente usado para representar crescimento, progresso ou aumento de valor, como em contextos financeiros ou estatísticos."
          title={"Grana que cresce!"}
          text={"Saber investir é fazer seu dinheiro trabalhar por você."}
          color="text-[#14A900] bg-[radial-gradient(104.28%_104.28%_at_50.1%_104.28%,rgba(20,169,0,0.26)_0%,rgba(8,67,0,0.00)_100%)]"
        />
        <Cards
          img={HeartIcon}
          area-label="Ícone quadrado rosa com bordas arredondadas. Dentro do ícone, há uma coração no centro,  Este ícone é geralmente usado para representar amor, progresso ou sentimentos"
          title={"Realize sonhos!"}
          text={`Com planejamento, seu sonho tá logo ali na esquina.`}
          color="text-[#FF0084] bg-[linear-gradient(0deg,rgba(255,0,132,0.26)_-8.57%,rgba(255,0,132,0.00)_100%)]"
        />
      </section>
    </>
  );
}
export default Top;
