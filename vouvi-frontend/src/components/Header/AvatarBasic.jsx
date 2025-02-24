import Avatar from "../../assets/images/avatar-sm-icon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AvatarBasic({ width }) {
  const [userName, setUserName] = useState(null);



  return (
    <Link to={'/profile'}>
      <div className="flex cursor-pointer items-center rounded-[60px] transition-colors duration-300 hover:bg-[#222222]/10 lg:p-[5px_11px_5px_14px] xl:p-[6px_13px_6px_16px] 2xl:p-[8px_16px_8px_20px] hover:dark:bg-[#222222]">
        <div className={`flex items-center`}>
          <div className="mr-3 hidden flex-col leading-[1.1] lg:flex">
            <h1 className="text-right font-medium text-black lg:text-[22px] xl:text-[25px] 2xl:text-[32px] dark:text-white">
              {"userName"}
            </h1>
          </div>
          <img
            src={Avatar}
            className={`${width} lg:h-[57px] xl:h-[64px]`}
            alt="Imagem de avatar representando o perfil do usuário."
          />
        </div>
      </div>
    </Link>
  );
}
export default AvatarBasic;
