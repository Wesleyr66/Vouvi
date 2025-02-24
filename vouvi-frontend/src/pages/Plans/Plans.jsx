import Subscription from "../../components/Cards/SubscriptionCard";
import subscriptionHover from "../../assets/images/subscription-hover.svg";
import subscriptionStar from "../../assets/images/subscription-star.svg";
import subscriptionStar2 from "../../assets/images/subscription-star2.svg";
import subscriptionStar3 from "../../assets/images/subscription-star3.svg";
import HeaderIntern from "../../components/Header/HeaderIntern";
import AvatarFull from "../../components/Header/AvatarFull";
import Footer from "../../components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../../utils/dots.css";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow z-10`}
      style={{
        ...style,
        display: "block",
        right: "20px",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow z-10`}
      style={{
        ...style,
        display: "block",
        left: "10px",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

function Plans() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <HeaderIntern
        iconActiveNumber={''}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull />
      </HeaderIntern>
      <section data-aos="fade-right">
        <h1
          className={`${TextGradient} mt-[160px] text-center text-[36px] font-medium leading-[1.1] sm:text-[50px] md:text-[72px] lg:text-[90px] xl:leading-[1.2]`}
        >
          Escolha o plano e vire o jogo
        </h1>
        <p
          className={`${TextGradient} m-auto mb-10 w-5/6 text-center text-[16px] leading-[1] sm:text-[28px] lg:mb-20 lg:w-4/6 lg:text-[36px]`}
        >
          Do básico ao premium, tem um plano certinho para sua caminhada
          financeira. Bora começar e subir de nível!
        </p>
        <div className="slider-container">
          <Slider {...settings}>
            <Subscription
              color={"bg-[#007FFF]"}
              colortitle={"text-[#002952]"}
              title={"Free"}
              price={"Gratuito"}
              text1={"Acesso às aulas de educação financeira."}
              text2={"Newsletter duas vezes por semana."}
              text3={"Ferramentas de planejamento."}
              colorbutton={
                "bg-[#002952] hover:outline-[#002952] hover:text-[#002952]"
              }
              texthover={
                "Ideal para quem está começando a aprender sobre finanças."
              }
            />
            <Subscription
              color={
                "bg-primary-200 border-8 dark:border-black outline outline-8 outline-primary-300 relative"
              }
              colortitle={"text-[#35005B]"}
              title={"Premium"}
              price={"R$14,90"}
              mes={"/Mês"}
              text1={"Acesso às aulas personalizadas."}
              text2={"Vida infinita e recompensas únicas."}
              text3={"Relatórios mensais detalhados."}
              bold={"font-medium"}
              colorbutton={
                "bg-primary-300 hover:outline-primary-300 hover:text-primary-300 "
              }
              texthover={
                "Perfeito para quem quer se aprofundar no controle financeiro."
              }
            >
              <img
                src={subscriptionHover}
                className="pointer-events-none absolute -top-64 -ml-64 scale-[2] opacity-30 transition-transform duration-1000 group-hover:translate-x-[550px] group-hover:translate-y-[650px]"
              />
            </Subscription>
            <Subscription
              color={"bg-[#DDA010] dark:bg-[#FFB12099]"}
              colortitle={"text-[#583900]"}
              title={"Family"}
              price={"R$39,90"}
              mes={"/Mês"}
              text1={"Todos os benefícios do Plano Premium."}
              text2={"Acesso para até 4 pessoas."}
              text3={`Suporte com o fin.`}
              bold={"z-10"}
              colorbutton={
                "bg-[#6B4B08] hover:outline-[#6B4B08] hover:text-[#6B4B08] "
              }
              texthover={
                "Para profissionais e empresários que buscam otimizar finanças."
              }
            >
              <div className="pointer-events-none absolute z-10 ml-0 mt-10 w-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 xs:w-full dark:group-hover:opacity-60">
                <img src={subscriptionStar} alt="Estrela de Inscrição" />
              </div>
              <div className="pointer-events-none absolute z-10 ml-0 mt-[380px] w-40 rotate-45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 xs:w-fit dark:group-hover:opacity-60">
                <img src={subscriptionStar2} alt="Estrela de Inscrição" />
              </div>
              <div className="pointer-events-none absolute z-20 ml-32 mt-[150px] w-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 xs:ml-52 xs:w-full dark:group-hover:opacity-60">
                <img src={subscriptionStar3} alt="Estrela de Inscrição" />
              </div>
            </Subscription>
          </Slider>
        </div>
      </section>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default Plans;
