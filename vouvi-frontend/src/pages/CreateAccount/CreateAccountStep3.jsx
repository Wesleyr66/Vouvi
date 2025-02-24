import PropTypes from "prop-types";

import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import NextButton from "../../components/Forms/NextButton";
import PreviousButton from "../../components/Forms/PreviousButton";
import ProgressBar from "../../components/Forms/ProgressBar";

function CreateAccountStep3({
  setStep,
  username,
  setUsername,
  name,
  setName,
  lastName,
  setLastName,
}) {
  return (
    <>
      <ProgressBar value={40} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col justify-around gap-5">
        <span className="grid">
          <Label htmlFor="username">Nome de usuário:</Label>
          <Input
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={30}
          />
          <span className="mt-2 flex justify-between">
            <p>Disponibilidade</p>
            <div className="w-20 rounded-[4px] bg-green-200"></div>
          </span>
        </span>

        <span className="grid">
          <Label htmlFor="name">Nome</Label>
          <Input
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            isRequired={true}
          />
        </span>

        <span className="grid">
          <Label htmlFor="last-name">Sobrenome:</Label>
          <Input
            maxLength={30}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="last-name"
            id="last-name"
            isRequired={true}
          />
        </span>
      </div>

      <p className="my-3 text-center text-[16px]">
        Seu nome de usuário ficará visível para todos
      </p>

      {/* Botão de enviar/próximo */}
      <div className="flex justify-around gap-4">
        <PreviousButton setStep={setStep} />
        <NextButton setStep={setStep} text={"Próximo"} />
      </div>
    </>
  );
}

CreateAccountStep3.propTypes = {
  setStep: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  lastName: PropTypes.string,
  setLastName: PropTypes.func,
};

export default CreateAccountStep3;
