import { useEffect, useState } from "react";

// Import components
import CreateAccountStep1 from "./CreateAccountStep1";
import CreateAccountStep2 from "./CreateAccountStep2";
import CreateAccountStep3 from "./CreateAccountStep3";
import CreateAccountStep4 from "./CreateAccountStep4";
import CreateAccountStep5 from "./CreateAccountStep5";

import bgVideo from "/src/assets/videos/video_do_login.mp4";

function CreateAccount() {
  const [step, setStep] = useState(1);

  // Step 1
  const [cep, setCep] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Step 2
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2000);
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("select");
  const [pronoum, setPronoum] = useState("select");

  // Step 3
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  // Step 4
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Calcula a idade
  useEffect(() => {
    const date = new Date();

    if (year < 1900 || year > date.getUTCFullYear()) {
      return;
    }

    if (month < 1 || month > 12) {
      return;
    }

    if (day < 1 || day > 31) {
      return;
    }

    setAge(date.getUTCFullYear() - year);
  }, [day, month, year]);


  const verifyStep = () => {
    switch (step) {
      case 1:
        return (
          <CreateAccountStep1
            tabIndex="0"
            setStep={setStep}
            cep={cep}
            setCep={setCep}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
          />
        );
      case 2:
        return (
          <CreateAccountStep2
            tabIndex="0"
            setStep={setStep}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            age={age}
            setAge={setAge}
            gender={gender}
            setGender={setGender}
            pronoum={pronoum}
            setPronoum={setPronoum}
          />
        );
      case 3:
        return (
          <CreateAccountStep3
            tabIndex="0"
            setStep={setStep}
            username={username}
            setUsername={setUsername}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
          />
        );
      case 4:
        return (
          <CreateAccountStep4
            tabIndex="0"
            setStep={setStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 5:
        return <CreateAccountStep5 tabIndex="0" />;
      default:
        break;
    }
  };

  useEffect(() => {
    document.getElementById("bg-video").play();
  });


  return (
    <div className="flex h-screen w-auto items-center justify-center">
      <video
        src={bgVideo}
        className="fixed left-0 top-0 -z-10 h-[1080px] w-full object-cover opacity-100"
        autoPlay
        muted
        loop
        id="bg-video"
      ></video>

      <div className="flex flex-col items-center">
        <div className="itens-center align-center mb-[30px] mt-[10px] flex w-[170px] justify-center">
          <img src="src/assets/images/logo-vouvi-branco1.svg" alt="" />
        </div>
        <form
          className="flex h-full w-[350px] flex-col justify-around gap-4 rounded-sm bg-white bg-opacity-90 p-10 sm:w-[600px]"
          action=""
        >
          <h1 className="text-center text-[30px] font-bold sm:text-lg">
            Criar uma conta
          </h1>
          {/* Exibe os passos do formulário */}
          {verifyStep()}
          {/* Exibe erro, se houver */}
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
