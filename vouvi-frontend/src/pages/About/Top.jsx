import Cat from "../../assets/images/cat-about-us.svg";
import Target from "../../assets/images/target-about-us.svg";

function Top() {
  return (
    <>
  <section className="flex items-center justify-center mt-10 text-primary-200 sm:gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:flex-row-reverse">
  <div className="flex items-center sm:ml-4">
    <h1
      className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-center font-medium sm:text-left leading-[1]"
    >
      Aprenda a <br /> dominar suas <br /> finanças de <br /> forma divertida!
    </h1>
  </div>
  <div className="flex items-center md:justify-start md:pr-4">
    <img
      src={Cat}
      alt="O gato Fin, mascote da plataforma de cor cinza e olhos com heterocromia."
      title="O gato Fin, mascote da plataforma de cor cinza e olhos com heterocromia."
      className="w-40 sm:w-40 md:w-72 lg:w-80 xl:w-96 2xl:w-[32rem]"
    />
  </div>
</section>

<section className="m-auto mt-20 flex w-full sm:w-[95%] flex-col items-center rounded-lg bg-secondary-200/10 p-6 px-4 sm:px-10 md:px-8 lg:px-12 xl:px-16 2xl:px-20 leading-[1.2] text-center dark:bg-[#0029524D] sm:p-8 md:mt-20 md:rounded-[72px] md:p-24 lg:p-28 xl:p-32 2xl:p-36">
  <div className="m-auto flex flex-col items-center md:flex-row md:text-left md:space-x-4">
    <img
      src={Target}
      alt="Um dardo roxo e azul atingindo uma moeda amarela com um símbolo de dólar branco no centro."
      title="Um dardo roxo e azul atingindo uma moeda amarela com um símbolo de dólar branco no centro."
      className="hidden sm:block w-20 sm:w-32 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
    />
    <div className="relative mt-4 flex w-full max-w-[16rem] flex-col items-center rounded-md bg-secondary-200/20 p-4 text-white dark:bg-[#0029524D] sm:max-w-[20rem] sm:p-6 md:ml-10 md:mt-0 md:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem] 2xl:max-w-[36rem] md:items-start">
      <h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium text-[#002952] dark:text-secondary-200">
        Missão
      </h1>
      <p className="mt-2 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-light text-black dark:text-white">
        Empoderar <strong className="text-secondary-200">todos</strong> a conquistar um{" "}
        <strong className="text-primary-200">futuro</strong> financeiro saudável por meio de educação{" "}
        <strong className="text-secondary-200">acessível</strong> e <strong className="text-primary-200">gamificada.</strong>
      </p>
    </div>
  </div>

  <div className="mt-6 flex flex-col items-center md:mt-16 md:flex-row md:items-start md:text-left">
    <div className="relative flex w-full max-w-[16rem] flex-col items-center rounded-md bg-secondary-200/20 p-4 text-white dark:bg-[#0029524D] sm:max-w-[20rem] sm:p-6 md:mr-6 md:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem] 2xl:max-w-[36rem] md:items-start">
      <h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium text-[#002952] dark:text-secondary-200">
        Valores
      </h1>
      <p className="mt-2 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-light text-black dark:text-white">
        <strong className="text-primary-200">Transformar</strong> a educação financeira em uma{" "}
        <strong className="text-secondary-200">experiência</strong> divertida e eficaz.
      </p>
    </div>

    <div className="relative mt-6 flex w-full max-w-[16rem] flex-col items-center rounded-md bg-secondary-200/20 p-4 text-white dark:bg-[#0029524D] sm:max-w-[20rem] sm:p-6 md:mt-0 md:ml-6 md:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem] 2xl:max-w-[36rem] md:items-start">
      <h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium text-[#002952] dark:text-secondary-200">
        Visão
      </h1>
      <p className="mt-2 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-light text-black dark:text-white">
        <strong className="text-primary-200">Educação</strong> para todos,{" "}
        <strong className="text-secondary-200">Inovação</strong>, <strong className="text-primary-200">Inclusão</strong> e{" "}
        <strong className="text-secondary-200">Transparência</strong>.
      </p>
    </div>
  </div>
</section>


    </>
  );
}

export default Top;
