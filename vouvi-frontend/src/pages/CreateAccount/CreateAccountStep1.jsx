import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import ProgressBar from "../../components/Forms/ProgressBar";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import NextButton from "../../components/Forms/NextButton";

function CreateAccountStep1({
  setStep,
  cep,
  setCep,
  state,
  setState,
  city,
  setCity,
}) {
  return (
    <>
      <ProgressBar value={0} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col justify-around gap-5">
        <div className="grid grid-cols-2 gap-4">
          <span className="grid">
            <Label htmlFor="country">País:</Label>
            <Input name="country" id="country" value={"Brasil"} isReadOnly />
          </span>

          <span className="grid">
            <Label htmlFor="cep">CEP:</Label>
            <Input
              name="cep"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="state">Estado:</Label>
            <Input
              name="state"
              id="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="city">Cidade:</Label>
            <Input
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              isRequired
            />
          </span>
        </div>
      </div>

      <p className="my-3 text-center text-[16px]">
        O seu local de residência é só para a gente confirmar sua identidade
        quando você entrar em contato. Ninguém mais vai ver isso, tá? Aqui na
        Vouvi, sua privacidade é prioridade!
      </p>

      {/* Botão de enviar/próximo */}
      <NextButton setStep={setStep} text={"Próximo"} />

      <div className="my-5 flex w-full flex-row items-center justify-center gap-5">
        <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
        OU
        <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
      </div>

      <div className="flex flex-row items-center justify-center gap-3">
        <span tabIndex="0" className="cursor-pointer rounded-full border-4 border-secondary-200 bg-white p-1">
          <Icon icon={"flat-color-icons:google"} width={"60px"} />
        </span>
        <span tabIndex="0" className="cursor-pointer rounded-full border-4 border-secondary-200 bg-white p-1">
          <Icon icon={"ic:baseline-facebook"} width={"60px"} />
        </span>
        <span tabIndex="0" className="cursor-pointer rounded-full border-4 border-secondary-200 bg-white p-1">
          <Icon icon={"ic:baseline-apple"} width={"60px"} />
        </span>
      </div>
    </>
  );
}

CreateAccountStep1.propTypes = {
  setStep: PropTypes.func,
  cep: PropTypes.number,
  setCep: PropTypes.func,
  state: PropTypes.string,
  setState: PropTypes.func,
  city: PropTypes.string,
  setCity: PropTypes.func,
};

export default CreateAccountStep1;
