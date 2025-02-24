import Cat from "../../assets/images/cat2-about-us.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { Link } from "react-router-dom";

function Low() {
  return (
    <>

<section className="m-auto mt-20 flex flex-col items-center justify-center text-center leading-[1] md:flex-row md:text-left md:justify-around">
  <div className="w-full max-w-[580px] mb-6 px-4 text-black dark:text-white md:mb-0 md:px-0">
    <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium">
      Método de Ensino
    </h1>
    <p className="mt-5 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-light md:mt-10">
      Utilizamos uma abordagem <strong className="text-primary-200">prática</strong> e <strong className="text-secondary-200">interativa</strong> que
      combina jogos, quadrinhos e atividades para tornar o aprendizado
      sobre finanças <strong className="text-primary-200">divertido</strong> e
      envolvente.
    </p>
  </div>
  <img
    src={Cat}
    aria-label="Gato fin"
    alt="O gato Fin, mascote da plataforma de cor cinza e olhos com heterocromia."
    title="O gato Fin, mascote da plataforma de cor cinza e olhos com heterocromia."
    className="w-28 sm:w-36 md:w-48 lg:w-60"
  />
</section>

<section className="m-auto mt-20 flex w-11/12 flex-col items-center md:mt-20- md:flex-row md:justify-around">
  <div className="flex-1 w-full max-w-md rounded-lg bg-[#7C20BE33] p-8 text-center text-black dark:text-white md:rounded-[72px] md:text-left md:p-10 md:min-h-[300px] flex flex-col justify-between">
    <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium text-[#7C20BE]">
      Nossa Equipe
    </h1>
    <p className="mt-5 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-light md:mt-14">
      Contamos com uma equipe de especialistas em finanças, educadores e
      designers que trabalham juntos para criar uma experiência de
      aprendizado única e eficaz.
    </p>
  </div>
  <div className="mt-10 flex-1 w-full max-w-md rounded-lg bg-secondary-200/20 p-8 text-center text-black dark:text-white dark:bg-[#0029524D] md:rounded-[72px] md:text-left md:p-12 md:min-h-[300px] flex flex-col justify-between">
    <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium text-[#002952] dark:text-secondary-200">
      Impacto Social
    </h1>
    <p className="mt-6 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-light md:mt-14">
      Estamos comprometidos em impactar positivamente a vida das pessoas.
      Oferecemos educação financeira para comunidades de baixa renda,
      ajudamos a construir um futuro mais sustentável.
    </p>
  </div>
</section>

<section className="m-auto mt-16 w-11/12 text-center md:mt-20 md:w-8/12">
  <p className="mb-8 mt-8 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-light text-black dark:text-white md:mb-16 md:mt-[200px]">
    Na <strong className="font-bold text-primary-200">Vouvi</strong>,
    acreditamos que todos podem aprender a lidar melhor com seu dinheiro.
    <strong className="font-bold">
      Junte-se a nós e transforme sua vida financeira.
    </strong>
  </p>
  <Link to="/login" className="w-full flex justify-center">
    <PrimaryButton text="Começar agora!" className="w-10/12 sm:w-8/12 md:w-auto" />
  </Link>
</section>




    </>
  );
}

export default Low;
