import Input from "../../components/Forms/Input";
import PasswordInput from "../../components/Forms/PasswordInput";
import Label from "../../components/Forms/Label";
import NextButton from "../../components/Forms/NextButton";
import PreviousButton from "../../components/Forms/PreviousButton";
import ProgressBar from "../../components/Forms/ProgressBar";

import PropTypes from "prop-types";
import { useState } from "react";

function CreateAccountStep4({
  setStep,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const [confirmPassword, setConfirmPasword] = useState("");

  return (
    <>
      <ProgressBar value={60} />

      {/* Área onde o usuário insere informações */}
      <div className=" flex flex-col justify-around gap-5">
        <span className="grid">
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            maxLength={40}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            isRequired={true}
          />
        </span>

        <span className="grid">
          <Label>Senha:</Label>
          <PasswordInput
            id={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="mt-2 flex items-center justify-between">
            <div>Intensidade da senha</div>
            <div className="h-5 w-14 rounded-[4px] bg-green-200" />
          </span>
        </span>

        <span className="grid">
          <PasswordInput
            id={"confirm-password"}
            name={"confirm-password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPasword(e.target.value)}
            placeholder={"Confirme sua senha"}
          />
          <span className="mt-1 flex justify-center">
            <p className="text-xs text-opacity-50">
              Seu e-mail é usado quando você esquece a senha. Está seguro!
            </p>
          </span>
        </span>
      </div>

      <p className="my-3 text-center text-[16px]">
        <span className="text-xs">
          Ao criar uma conta, você concorda com os
        </span>
        <br />
        <a className="underline" href="#">
          Termos de serviço
        </a>{" "}
        e{" "}
        <a className="underline" href="#">
          Política de Privacidade
        </a>
      </p>

      {/* Botão de enviar/próximo */}
      <div className="flex justify-around gap-4">
        <PreviousButton setStep={setStep} />
        <NextButton setStep={setStep} text={"Criar conta"} />
      </div>
    </>
  );
}

CreateAccountStep4.propTypes = {
  setStep: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
};

export default CreateAccountStep4;
