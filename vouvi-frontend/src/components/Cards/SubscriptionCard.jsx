import SecondaryButton from "../Buttons/SecondaryButton";
import { Link } from "react-router-dom";

function Subscription({
  color,
  colorbutton,
  colortitle,
  title,
  price,
  text1,
  text2,
  text3,
  texthover,
  mes,
  bold,
  children,
}) {
  return (
    <div
      tabIndex="-1"
      className={`${color} group m-auto mb-5 mt-5 flex h-[35rem] w-80 flex-col justify-between overflow-hidden rounded-md py-10 text-white xs:w-96`}
    >
      <div className="flex flex-col items-center">
        <h3 className={`${colortitle} text-[40px] font-bold`}>{title}</h3>
        <h2 className="text-lg font-semibold">
          {price} <strong className="text-[24px] font-medium">{mes}</strong>
        </h2>
      </div>
      <div className="ml-10 mt-10 flex w-9/12 flex-col gap-3 text-left text-[24px] font-extralight leading-[1] transition-all duration-500 group-hover:pointer-events-none group-hover:cursor-text group-hover:opacity-0 xs:text-[32px]">
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text1}</p>
        </div>
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text2}</p>
        </div>
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text3}</p>
        </div>
      </div>
      {children}

      <div className="pointer-events-none mx-10 flex justify-center leading-[1.3] opacity-0 transition-all duration-700 group-hover:pointer-events-auto group-hover:-translate-y-72 group-hover:opacity-100">
        <p className="absolute text-center text-[24px] xs:text-[32px]">
          {texthover}
        </p>

        <div className="absolute mt-[200px]">
          <Link tabIndex="-1" to="/plans" className="block">
            <SecondaryButton
              color={`hover:bg-opacity-100 hover:bg-white text-nowrap ${colorbutton}`}
              text="Assinar Agora!"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Subscription;
