import { Icon } from "@iconify/react";
import { useState } from "react";
import { atom, useAtom } from "jotai";

import FinCheer from "../../components/Lessons/FinCheer";
import WrongAnswer from "../../components/Lessons/WrongAnswer";
import apple from "../../assets/images/learn-question-apple.svg";
import smarthphone from "../../assets/images/learn-question-smartphone.svg";
import coin from "../../assets/images/learn-question-coin.svg";
import card from "../../assets/images/learn-question-card.svg";
import moneyIcon from "../../assets/images/money-icon.svg";
import smartphoneIcon from "../../assets/images/smartphone-icon.svg";
import cardIcon from "../../assets/images/card-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";
import coinIcon from "../../assets/images/coin-icon.svg";
import moneyIconBig from "../../assets/images/money-icon-big.svg";

import { useNavigate } from "react-router-dom";
import showModal from "../../utils/showModal";

import Reward from "../../components/Modals/Reward";

const q2correctAnswer = ["escambo", "moeda", "cédula", "cartão", "digital"];

const q2answerAtom = atom(["", "", "", "", ""]);

function Lesson1(/*{ lives }*/) {
  const [currentPhase, setCurrentPhase] = useState(1);

  const logo = (
    <svg
      className={`h-8 xs:h-10 sm:h-12 lg:h-16 lg:w-auto`}
      viewBox="0 0 1145 1098"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M707.064 53.7375C924.294 258.987 1079.13 529.568 1140.14 834.048L1140.15 834.058C1160 933.138 1101.48 1031.04 1004.87 1060.69C994.684 1063.82 984.454 1066.83 974.164 1069.74C955.344 1075.05 936.384 1062.36 933.574 1043.01C933.564 1042.94 933.554 1042.88 933.544 1042.82C933.534 1042.76 933.524 1042.69 933.514 1042.63C895.364 782.618 798.564 551.568 662.744 376.298C615.334 315.138 541.234 315.138 493.834 376.298C358.014 551.568 261.194 782.618 223.044 1042.63C222.864 1043.86 222.694 1045.1 222.534 1046.33C220.034 1065.63 201.004 1078.31 182.234 1073.18C167.774 1069.23 153.404 1065.06 139.124 1060.68C42.5138 1031.03 -16.0062 933.128 3.86376 834.048C64.8738 529.568 219.694 258.987 436.924 53.7375C512.744 -17.9125 631.244 -17.9125 707.064 53.7375ZM753.014 962.357C753.534 966.127 753.884 969.897 754.074 973.657V973.647C754.094 973.977 754.114 974.317 754.114 974.647C755.344 1016.21 737.224 1054.91 708.974 1067.33C704.864 1069.13 700.744 1070.86 696.604 1072.51C617.194 1104.08 532.214 1105.75 450.274 1074.12C449.464 1074.11 448.624 1073.93 447.794 1073.6C443.184 1071.76 438.604 1069.82 434.054 1067.78C432.224 1066.96 430.434 1066.03 428.694 1064.99C401.144 1048.57 385.004 1005.71 390.954 962.357C392.534 950.867 394.304 939.477 396.274 928.207C415.814 816.027 454.304 714.907 506.484 632.497C513.714 621.087 521.204 610.017 528.944 599.337C540.284 583.687 554.624 575.397 569.154 574.447C581.504 576.567 593.514 583.977 603.494 596.727C677.714 691.557 728.154 815.787 751.264 950.197C751.874 954.227 752.454 958.287 753.014 962.357Z"
          fill="white"
        />
      </g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M707.064 53.7375C924.294 258.987 1079.13 529.568 1140.14 834.048L1140.15 834.058C1160 933.138 1101.48 1031.04 1004.87 1060.69C994.684 1063.82 984.454 1066.83 974.164 1069.74C955.344 1075.05 936.384 1062.36 933.574 1043.01C933.564 1042.94 933.554 1042.88 933.544 1042.82C933.534 1042.76 933.524 1042.69 933.514 1042.63C895.364 782.618 798.564 551.568 662.744 376.298C615.334 315.138 541.234 315.138 493.834 376.298C358.014 551.568 261.194 782.618 223.044 1042.63C222.864 1043.86 222.694 1045.1 222.534 1046.33C220.034 1065.63 201.004 1078.31 182.234 1073.18C167.774 1069.23 153.404 1065.06 139.124 1060.68C42.5138 1031.03 -16.0062 933.128 3.86376 834.048C64.8738 529.568 219.694 258.987 436.924 53.7375C512.744 -17.9125 631.244 -17.9125 707.064 53.7375ZM753.014 962.357C753.534 966.127 753.884 969.897 754.074 973.657V973.647C754.094 973.977 754.114 974.317 754.114 974.647C755.344 1016.21 737.224 1054.91 708.974 1067.33C704.864 1069.13 700.744 1070.86 696.604 1072.51C617.194 1104.08 532.214 1105.75 450.274 1074.12C449.464 1074.11 448.624 1073.93 447.794 1073.6C443.184 1071.76 438.604 1069.82 434.054 1067.78C432.224 1066.96 430.434 1066.03 428.694 1064.99C401.144 1048.57 385.004 1005.71 390.954 962.357C392.534 950.867 394.304 939.477 396.274 928.207C415.814 816.027 454.304 714.907 506.484 632.497C513.714 621.087 521.204 610.017 528.944 599.337C540.284 583.687 554.624 575.397 569.154 574.447C581.504 576.567 593.514 583.977 603.494 596.727C677.714 691.557 728.154 815.787 751.264 950.197C751.874 954.227 752.454 958.287 753.014 962.357Z"
          fill={document.body.classList.contains("dark") ? "white" : "black"}
        />
      </g>
    </svg>
  );

  let lives = 1;

  const [isCheerVisible, setIsCheerVisible] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const checkAnswer = (correctAnswer = "", currentAnswer = "") => {
    console.log(currentAnswer);
    console.log(correctAnswer);

    // console.log(
    //   currentAnswer.every((value, index) => value === correctAnswer[index]),
    // );

    if (currentPhase === 2) {
      if (
        currentAnswer.every((value, index) => value === correctAnswer[index])
      ) {
        setIsCheerVisible(true);
      } else {
        setWrongAnswer(true);
      }
    } else {
      if (currentAnswer === correctAnswer) {
        setIsCheerVisible(true);
      } else {
        setWrongAnswer(true);
      }
    }
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    if (currentPhase < 5) {
      setCurrentPhase((prev) => prev + 1); // Avança para a próxima fase
    } else {
      showModal("reward"); // Redireciona para a página de lições
    }
  };

  const [q2currentAnswer, setQ2CurrentAnswer] = useAtom(q2answerAtom);

  return (
    <main className="mx-20 mt-5 dark:text-white">
      <Reward />
      {isCheerVisible && (
        <FinCheer
          title={"Olha só quem tá arrasando!"}
          text={"Tá mais afiado que minhas garras quando vejo um sofá novo!"}
          hide={() => setIsCheerVisible(!isCheerVisible)}
          next={() => {
            handleContinue();
            setIsCheerVisible(!isCheerVisible);
          }}
        />
      )}
      {wrongAnswer && (
        <WrongAnswer
          title={"Não foi dessa vez!"}
          text={"Mas calma, todo mundo tropeça às vezes!"}
          hide={() => setWrongAnswer(!wrongAnswer)}
          next={() => {
            setWrongAnswer(!wrongAnswer);
          }}
        />
      )}

      <header className="flex justify-between">
        <span>{logo}</span>

        <h1 className="text-base">A História do Dinheiro</h1>

        <span className="flex">
          <Icon
            icon={"mdi:thunder"}
            width={48}
            className={
              lives >= 1 ? "text-secondary-200" : "text-secondary-200/30"
            }
          />
          <Icon
            icon={"mdi:thunder"}
            width={48}
            className={
              lives >= 2 ? "text-secondary-200" : "text-secondary-200/30"
            }
          />
          <Icon
            icon={"mdi:thunder"}
            width={48}
            className={
              lives >= 3 ? "text-secondary-200" : "text-secondary-200/30"
            }
          />
        </span>
      </header>

      {/* Progressbar */}
      <div className="my-5 h-5 w-full rounded bg-secondary-200/30">
        <div className="h-full w-2 rounded bg-secondary-200"></div>
      </div>

      {currentPhase === 1 && <Question1 />}
      {currentPhase === 2 && <Question2 />}
      {currentPhase === 3 && <Question3 />}
      {currentPhase === 4 && <Question4 />}
      {currentPhase === 5 && <Question5 />}
      {currentPhase === 6 && <Question6 />}

      <div className="text-right">
        <button
          onClick={() => {
            switch (currentPhase) {
              case 1:
                checkAnswer(
                  "China",
                  document.getElementById("answer").innerText,
                );
                break;
              case 2:
                checkAnswer(q2correctAnswer, q2currentAnswer);
                break;
              case 3:
                checkAnswer(
                  "Valor",
                  document.getElementById("answer").innerText,
                );
                break;
              case 4:
                checkAnswer(
                  "Celular",
                  document.getElementById("answer").innerText,
                );
                break;
              case 5:
                checkAnswer(
                  "Depois",
                  document.getElementById("answer").innerText,
                );
                break;
              case 6:
                checkAnswer(
                  "Dinheiro",
                  document.getElementById("answer").innerText,
                );
                break;
              default:
                break;
            }
          }}
          className="rounded-md border-4 bg-white p-3 text-base text-black transition-all duration-200 hover:border-primary-200 hover:text-primary-200"
        >
          Verificar
        </button>
      </div>
    </main>
  );
}

function Question1() {
  const changeAnswer = (answer) => {
    document.getElementById("answer").innerText = answer;
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">Complete a frase</h2>

      <div className="my-5 flex flex-col justify-between gap-56">
        <span className="flex items-center gap-5">
          <img src={moneyIcon} alt="icone de dinheiro" />
          <p className="text-base">
            As primeiras notas de papel foram criadas na .{" "}
            <span
              id="answer"
              className="inline-block w-44 border-b-4 border-b-white"
            ></span>
            .
          </p>
        </span>

        <ul className="flex w-fit gap-4 rounded-md bg-secondary-200/10 p-5">
          <li>
            <button
              onClick={() => changeAnswer("Brasil")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Brasil
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("França")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              França
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("China")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              China
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Portugal")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Portugal
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Alemanha")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Alemanha
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Itália")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Itália
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Question2() {
  const [q2currentAnswer, setQ2CurrentAnswer] = useAtom(q2answerAtom);

  const handleAddAnwswer = (item) => {
    const index = q2currentAnswer.indexOf("");

    if (index >= 0) {
      const newAnswer = [...q2currentAnswer];
      newAnswer[index] = item;

      setQ2CurrentAnswer(newAnswer);
    }
  };

  const handleRemoveAnwswer = (item) => {
    const index = q2currentAnswer.indexOf(item);

    if (index >= 0) {
      const newAnswer = [...q2currentAnswer];
      newAnswer[index] = "";

      setQ2CurrentAnswer(newAnswer);
    }
  };

  const showAnswerImage = (item) => {
    switch (item) {
      case "escambo":
        return (
          <button onClick={() => handleRemoveAnwswer("escambo")}>
            <img src={appleIcon} alt="ícone de maçã" />
          </button>
        );
      case "moeda":
        return (
          <button onClick={() => handleRemoveAnwswer("moeda")}>
            <img src={coinIcon} alt="ícone de celular" />
          </button>
        );
      case "cédula":
        return (
          <button onClick={() => handleRemoveAnwswer("cédula")}>
            <img src={moneyIconBig} alt="ícone de celular" />
          </button>
        );
      case "cartão":
        return (
          <button onClick={() => handleRemoveAnwswer("cartão")}>
            <img src={cardIcon} alt="ícone de cartão" />
          </button>
        );
      case "digital":
        return (
          <button onClick={() => handleRemoveAnwswer("digital")}>
            <img src={smartphoneIcon} alt="ícone de celular" />
          </button>
        );
      default:
        return "erro";
    }
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">
        Organize os eventos na ordem de acontecimento
      </h2>

      <div className="mt-16 flex flex-col items-center gap-20">
        <div className="rounded-md border-[6px] border-[#8D8D8D] p-8">
          <ul className="flex flex-row gap-20">
            {q2currentAnswer.map((item, index) => (
              <li key={index} id={`answer-${index}`}>
                {item != "" ? (
                  showAnswerImage(item)
                ) : (
                  <div className="flex h-44 w-44 items-center justify-center rounded-[50px] border-[10px] border-dashed">
                    {q2correctAnswer[index].toUpperCase()}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="flex gap-20">
            <li>
              <button onClick={() => handleAddAnwswer("digital")}>
                <img src={smartphoneIcon} alt="ícone de celular" />
              </button>
            </li>
            <li>
              <button onClick={() => handleAddAnwswer("cartão")}>
                <img src={cardIcon} alt="ícone de cartão" />
              </button>
            </li>
            <li>
              <button onClick={() => handleAddAnwswer("escambo")}>
                <img src={appleIcon} alt="ícone de maçã" />
              </button>
            </li>
            <li>
              <button onClick={() => handleAddAnwswer("moeda")}>
                <img src={coinIcon} alt="ícone de celular" />
              </button>
            </li>
            <li>
              <button onClick={() => handleAddAnwswer("cédula")}>
                <img src={moneyIconBig} alt="ícone de celular" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Question3() {
  const changeAnswer = (answer) => {
    document.getElementById("answer").innerText = answer;
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">Complete a frase</h2>

      <div className="my-5 flex flex-col justify-between gap-56">
        <span className="flex items-center gap-5">
          <img src={apple} className="w-24" alt="icone de maçã" />
          <p className="text-base">
            No escambo era difícil calcular o .
            <span
              id="answer"
              className="inline-block w-44 border-b-4 border-b-white"
            ></span>
            justo entre os itens.
          </p>
        </span>

        <ul className="flex w-fit gap-4 rounded-md bg-secondary-200/10 p-5">
          <li>
            <button
              onClick={() => changeAnswer("Peso")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Peso
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Cor")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Cor
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Tipo")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Tipo
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Forma")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Forma
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Valor")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Valor
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Dinheiro")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Dinheiro
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Question4() {
  const changeAnswer = (answer) => {
    document.getElementById("answer").innerText = answer;
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">Complete a frase</h2>

      <div className="my-5 flex flex-col justify-between gap-56">
        <span className="flex items-center gap-5">
          <img src={smarthphone} className="w-24" alt="icone de celular" />
          <p className="text-base">
            Hoje em dia, muitos pagamentos são feitos apenas com .
            <span
              id="answer"
              className="inline-block w-44 border-b-4 border-b-white"
            ></span>
          </p>
        </span>

        <ul className="flex w-fit gap-4 rounded-md bg-secondary-200/10 p-5">
          <li>
            <button
              onClick={() => changeAnswer("Celular")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Celular
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Dinheiro")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Dinheiro
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Cheque")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Cheque
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Moeda")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Moeda
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Valor")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Valor
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Boleto")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Boleto
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Question5() {
  const changeAnswer = (answer) => {
    document.getElementById("answer").innerText = answer;
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">Complete a frase</h2>

      <div className="my-5 flex flex-col justify-between gap-56">
        <span className="flex items-center gap-5">
          <img src={card} className="w-24" alt="icone de cartão" />
          <p className="text-base">
            O cartão de crédito permite que você compre agora e pague .
            <span
              id="answer"
              className="inline-block w-44 border-b-4 border-b-white"
            ></span>
          </p>
        </span>

        <ul className="flex w-fit gap-4 rounded-md bg-secondary-200/10 p-5">
          <li>
            <button
              onClick={() => changeAnswer("Nunca")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Nunca
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Agora")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Agora
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Depois")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Depois
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Antecipado")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Antecipado
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Antes")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Antes
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Logo")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Logo
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Question6() {
  const changeAnswer = (answer) => {
    document.getElementById("answer").innerText = answer;
  };

  return (
    <div className="block h-[60vh] w-full">
      <h2 className="text-base">Complete a frase</h2>

      <div className="my-5 flex flex-col justify-between gap-56">
        <span className="flex items-center gap-5">
          <img src={coin} className="w-24" alt="icone de moeda" />
          <p className="text-base">
            As primeiras moedas eram feitas de .
            <span
              id="answer"
              className="inline-block w-44 border-b-4 border-b-white"
            ></span>
          </p>
        </span>

        <ul className="flex w-fit gap-4 rounded-md bg-secondary-200/10 p-5">
          <li>
            <button
              onClick={() => changeAnswer("Cerâmica")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Cerâmica
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Plástico")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Plástico
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Borracha")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Borracha
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Metal")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Metal
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Papel")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Papel
            </button>
          </li>

          <li>
            <button
              onClick={() => changeAnswer("Madeira")}
              className="cursor-pointer rounded-md bg-white/20 p-3 text-base transition-all duration-200 hover:bg-white hover:text-black"
            >
              Madeira
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Lesson1;
