import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

function UserReturn() {
  return (
    <section className="md:mt-50 left-0 top-0 z-20 flex h-full lg:items-center justify-center overflow-y-hidden backdrop-blur-[25px] md:h-auto lg:fixed lg:w-full  dark:bg-black/50 mr-7 lg:mt-20 lg:h-[700px] mt-20">
      <div className="flex w-96 flex-col items-center justify-center rounded-md bg-white p-6 shadow-2xl md:h-[600px] md:w-[600px] lg:w-8/12 dark:bg-[#1B1B1B] dark:shadow-black  ">
        <p className="text-nowrap text-[20px] font-semibold text-black dark:text-[#FFFFFF] md:text-[25px]">
          Você voltou, sentimos sua falta!
        </p>{" "}
        <p className="text-[20px]">O que deseja fazer?</p>
        <div className="flex h-[400px] items-center justify-around gap-4 rounded-md p-8 md:w-11/12 md:items-center lg:gap-0 flex-col md:flex-row ">
          <Box
            icon={
              <Icon className="text-primary-200" icon="solar:home-2-bold" />
            }
            cor={true}
            texto="Voltar a última atividade"
          />
          <Box
            icon={
              <Icon className="text-secondary-200" icon="solar:graph-up-bold" />
            }
            cor={false}
            texto="Atualizar as suas finanças"
          />
        </div>
      </div>
    </section>
  );
}

function Box({ icon, cor, texto }) {
  return (
    <div
      className={`${cor ? "hover:bg-primary-200" : "hover:bg-secondary-200"} hover:rounded-md hover:border-8 hover:bg-opacity-30 ${cor ? "hover:border-[#7C20BE]" : "hover:border-secondary-200"} flex items-center justify-center rounded-md bg-secondary-200/20 p-4 text-center text-[90px] text-black shadow-black md:h-[200px] md:w-48 md:text-center md:text-[140px] lg:flex lg:h-[250px] lg:w-4/12 lg:text-[150px] dark:bg-black dark:text-white flex-col w-40 `}
    >
      {icon}
      <p className="text-[16px] font-bold md:text-[16px] lg:text-[20px]">
        {texto}
      </p>
    </div>
  );
}

Box.propTypes = {
  icon: PropTypes.element,
  cor: PropTypes.bool,
  texto: PropTypes.string,
};

export default UserReturn;
