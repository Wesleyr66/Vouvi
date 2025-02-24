import Avatar from "../../assets/images/avatar-sm-icon.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function AvatarFull() {
  // API para buscar dados do usuário

  const [userName, setUserName] = useState(null);
  const [xp, setXp] = useState(0);
  const [vcoins, setVcoins] = useState(0);

  return (
    <Link to="/profile">
      <div className="flex cursor-pointer items-center rounded-[60px] transition-colors duration-300 hover:bg-[#222222]/10 lg:p-[5px_11px_5px_14px] xl:p-[6px_13px_6px_16px] 2xl:p-[8px_16px_8px_20px] hover:dark:bg-[#222222]">
        <div className="mr-3 flex flex-col lg:leading-[0.9] 2xl:leading-[1.1]">
          <h1 className="text-right font-medium text-black lg:text-[22px] xl:text-[25px] 2xl:text-[32px] dark:text-white">
            {"userName"}
          </h1>
          {/* Gambiarra dos infernos */}
          <div className="flex items-center text-black lg:text-[17px] xl:text-[19px] 2xl:text-[24px] dark:text-white">
            <div className="flex lg:mr-[7px] xl:mr-2 2xl:mr-3">
              <p className="font-bold text-secondary-200 lg:mr-[2px] xl:mr-[3px] 2xl:mr-1">
                XP
              </p>
              <p>{xp}</p>
            </div>
            <div className="flex items-center">
              <img
                className="lg:mr-[2px] lg:w-[28px] xl:mr-[3px] xl:w-[31px] 2xl:mr-1 2xl:w-[38px]"
                src={Vicon}
                alt="Ícone representando Vcoins, a moeda virtual exclusiva do nosso projeto."
              />
              <p>{vcoins}</p>
            </div>
          </div>
        </div>
        <img
          src={Avatar}
          className={`lg:h-[57px] xl:h-[64px]`}
          alt="Imagem de avatar representando o perfil do usuário."
        />
      </div>
    </Link>
  );
}
export default AvatarFull;
