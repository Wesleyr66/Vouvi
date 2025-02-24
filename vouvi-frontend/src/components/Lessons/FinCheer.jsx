import finBlink from "../../assets/images/fin-piscando.png";
import { Link } from "react-router-dom";

function FinCheer({ title, text, next, to }) {
  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-[rgba(2,2,11,0.50)] backdrop-blur-[25px]`}
    >
      <div className="flex h-fit w-fit gap-10 rounded-lg border-8 border-secondary-200 bg-secondary-300 p-10">
        <img src={finBlink} alt="fin piscando" />

        <div className="flex flex-col gap-14">
          <h1 className="text-lg font-bold text-secondary-200">{title}</h1>
          <p className="text-base font-light text-white">{text}</p>
          <div className="flex h-full flex-col items-end justify-end text-right align-text-bottom">
              <button
                className="w-fit rounded-md border-4 bg-white p-3 text-base text-black transition-all duration-200 hover:border-primary-200 hover:text-primary-200"
                onClick={next}
              >
                Continuar
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCheer;
