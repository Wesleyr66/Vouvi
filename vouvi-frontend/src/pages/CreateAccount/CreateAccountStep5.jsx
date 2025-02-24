import ProgressBar from "../../components/Forms/ProgressBar";
import SubmitButton from "../../components/Forms/SubmitButton";

import { Link } from "react-router-dom";

function CreateAccountStep5() {
  // const inputs = document.querySelectorAll(".inputs");
  // const container = document.getElementById('input-container');

  const changeToNext = (e) => {
    const nextInput = e.target.nextElementSibling;
    const previousInput = e.target.previousElementSibling;

    if (nextInput && e.target.value.trim() !== "") {
      nextInput.focus();
    }

    if (e.code == "Backspace" && previousInput) {
      previousInput.focus();
    }
  };

  return (
    <>
      <ProgressBar value={80} />

      <h2 className="text-center text-[25px] sm:text-lg">
        Agora é só
        <br />
        confirmar o seu e-mail
      </h2>

      {/* Área onde o usuário insere informações */}
      <div>
        <div
          id="input-container"
          className="mb-0 mt-16 flex items-center justify-center gap-4"
        >
          <input
            className="h-15 w-16 sm:h-32 sm:w-28 cursor-pointer border-b-4 border-b-secondary-200 text-center text-lg font-bold outline-none transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="h-15 w-16 sm:h-32 sm:w-28 cursor-pointer border-b-4 border-b-secondary-200 text-center text-lg font-bold outline-none transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="h-15 w-16 sm:h-32 sm:w-28 cursor-pointer border-b-4 border-b-secondary-200 text-center text-lg font-bold outline-none transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="h-15 w-16 sm:h-32 sm:w-28 cursor-pointer border-b-4 border-b-secondary-200 text-center text-lg font-bold outline-none transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
        </div>
      </div>
      <p className="mt-0 p-0 text-center">
        Enviamos um código de 4 digitos no seu email
      </p>

      {/* Botão de enviar/próximo */}
      <Link to="/avatar">
        <SubmitButton text={"Confirmar"} onClick={() => {}} />
      </Link>
    </>
  );
}

export default CreateAccountStep5;
