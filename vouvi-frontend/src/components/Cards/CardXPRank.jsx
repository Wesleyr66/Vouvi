import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="bg-card mb-2 flex h-10 w-full items-center justify-between rounded-[20px] bg-primary-200 p-2 text-[#DFDFDE] md:h-14 lg:items-center lg:text-md dark:bg-[#3D3D3D]">
      <div className="flex items-center">
        {/* 1º */}
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#DFDFDE] text-[20px] text-primary-200 md:mx-2 md:h-9 md:w-9 lg:h-12 lg:w-12 lg:text-md dark:bg-black dark:text-white">
          {props.posicao}°
        </span>

        {/* Alastor */}
        <div className="text-[20px] font-medium lg:text-base dark:text-[#B1B1B1]">
          {props.nome}
        </div>
      </div>

      {/* 1000 XP */}
      <div className="mr-9 flex h-fit w-fit border-b-2 border-white text-base leading-[1rem] md:leading-none dark:text-[#B1B1B1]">
        <div className="text-[16px] md:text-[20px] lg:text-[30px] lg:font-normal">
          {props.xp}
        </div>
        <div className="pl-[2px] text-[16px] md:text-[20px] lg:text-[30px] lg:font-light">
          XP
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  posicao: PropTypes.number,
  nome: PropTypes.string,
  xp: PropTypes.number,
};

export default Card;
