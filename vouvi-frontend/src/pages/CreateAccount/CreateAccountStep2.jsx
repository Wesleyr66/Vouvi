import ProgressBar from "../../components/Forms/ProgressBar";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import PreviousButton from "../../components/Forms/PreviousButton";
import NextButton from "../../components/Forms/NextButton";

import PropTypes from "prop-types";

function CreateAccountStep2({
  setStep,
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  age,
  setAge,
  gender,
  setGender,
  pronoum,
  setPronoum,
}) {
  return (
    <>
      <ProgressBar value={20} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col justify-around gap-5">
        <div className="grid grid-cols-3 gap-4">
          <span className="grid">
            <Label htmlFor="day-of-birth">Dia:</Label>
            <Input
              type="number"
              min={1}
              max={31}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              name="day-of-birth"
              id="day-of-birth"
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="month-of-birth">Mês:</Label>
            <Input
              type="number"
              min={1}
              max={12}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              name="month-of-birth"
              id="month-of-birth"
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="year-of-birth">Ano:</Label>
            <Input
              type="number"
              min={1900}
              max={new Date().getFullYear()}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              name="year-of-birth"
              id="year-of-birth"
              isRequired
            />
          </span>
        </div>

        <span className="flex flex-col">
          <Label htmlFor="age">Sua Idade:</Label>
          <Input
            type="number"
            min={14}
            max={110}
            value={age}
            name="age"
            id="age"
            isRequired
            isReadOnly
          />
        </span>

        <div className="grid grid-cols-2 gap-4">
          <span className="grid">
            <Label htmlFor="gender">Gênero:</Label>
            <select
              className="h-fit w-full border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base outline-primary-200 transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200 focus:outline-none"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="select" disabled>
                Selecione
              </option>
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
              <option value="nb">Não Binário</option>
              <option value="nd">Prefiro não responder</option>
              <option value="o">Outro</option>
            </select>
          </span>

          <span className="grid">
            <Label htmlFor="pronoum">Pronome</Label>
            <select
              className="h-fit w-full border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base outline-primary-200 transition-colors duration-500 ease-in-out hover:border-b-primary-200 focus:border-b-primary-200 focus:outline-none"
              name="pronoum"
              id="pronoum"
              value={pronoum}
              onChange={(e) => setPronoum(e.target.value)}
            >
              <option value="select" disabled>
                Selecione
              </option>
              <option value="m">Ele/Dele</option>
              <option value="f">Ela/Dela</option>
              <option value="nb">Elu/Delu</option>
            </select>
          </span>
        </div>
      </div>

      <p className="my-3 text-center text-[16px]">
        Os outros usuários não verão sua idade
      </p>

      {/* Botão de enviar/próximo */}
      <div className="flex justify-around gap-4">
        <PreviousButton setStep={setStep} />
        <NextButton setStep={setStep} text={"Próximo"} />
      </div>
    </>
  );
}

CreateAccountStep2.propTypes = {
  setStep: PropTypes.func,
  day: PropTypes.number,
  setDay: PropTypes.func,
  month: PropTypes.number,
  setMonth: PropTypes.func,
  year: PropTypes.number,
  setYear: PropTypes.func,
  age: PropTypes.number,
  setAge: PropTypes,
};

export default CreateAccountStep2;
