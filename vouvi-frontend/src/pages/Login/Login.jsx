import PasswordInput from "../../components/Forms/PasswordInput";
import KeepConected from "../../components/Forms/Radio";
import bgVideo from "../../assets/videos/video_do_login.mp4";
import vouvi from "../../assets/images/logo-vouvi-branco1.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Form() {
  useEffect(() => {
    document.getElementById("bg-video").play();
  });

  return (
    <>
      <video
        src={bgVideo}
        className="pointer-events-none fixed left-0 top-0 -z-10 h-[1080px] w-full object-cover opacity-100"
        autoPlay
        muted
        loop
        id="bg-video"
      ></video>
      <div className="align-center flex items-center justify-center">
        <div className="align-center mt-5 flex h-[100px] w-[300px] justify-center sm:h-[850px] md:h-[750px]">
          <div className="flex flex-col items-center">
            <div className="itens-center align-center mb-[30px] mt-[50px] flex w-[170px] justify-center">
              <img src={vouvi} alt="" />
            </div>
            <form
              className="flex w-[350px] flex-col items-center justify-around gap-4 rounded-sm bg-white bg-opacity-90 p-10 sm:w-[680px] lg:w-[600px]"
              action=""

            >
              <h1 className="w-full text-center text-[30px] font-bold sm:text-lg">
                Bem-vindo de volta!
              </h1>
              <div className="items-align flex h-[300px] w-[280px] flex-col justify-evenly sm:w-[500px]">
                <label
                  className="w- text-[24px] font-light sm:text-base"
                  htmlFor="email"
                >
                  E-mail:
                </label>
                <input
                  className="pb-100px h-[64px] w-[280px] border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base transition-colors duration-300 ease-in-out hover:border-b-primary-200 focus:outline-none sm:w-[500px]"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="on"
                  required
                />
                <label className="w-full text-[24px] font-light sm:text-base">
                  Senha:
                </label>
                <PasswordInput
                  id="password"
                />

                <KeepConected />
              </div>
              <div className="flex w-full items-center justify-center">
                <input
                  className="h-full w-[500px] rounded-md bg-primary-200 text-[20px] font-bold text-white transition-colors duration-500 ease-in-out hover:cursor-pointer hover:bg-secondary-200 hover:text-secondary-300 sm:h-[70px] sm:py-4 sm:text-base"
                  type="submit"
                  value="Entrar"
                />
              </div>
              <div className="flex w-full items-center justify-evenly text-center font-light">
                <Link
                  className="login-link sx:text-base text-md"
                  to="/create-account"
                  title="clique aqui para criar uma conta"
                >
                  criar conta
                </Link>{" "}
                <Link
                  className="login-link"
                  to="/forget-password"
                  title="Clique aqui para alterar a senha"
                >
                  esqueci a senha
                </Link>
              </div>
              <div className="my-5 flex w-full flex-row items-center justify-center gap-5">
                <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
                OU
                <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
                  <Icon icon={"flat-color-icons:google"} width={"60px"} />
                </span>
                <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
                  <Icon icon={"ic:baseline-facebook"} width={"60px"} />
                </span>
                <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
                  <Icon icon={"ic:baseline-apple"} width={"60px"} />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
