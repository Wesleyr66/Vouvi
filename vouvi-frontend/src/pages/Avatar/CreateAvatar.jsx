// Import Assets
import Avatar from "../../assets/images/avatar.svg";

// Import Components
import PrimaryButton from "../../components/Buttons/PrimaryButton";

function CreateAvatar({ onClick }) {
  return (
    <section className="flex lg:w-[600px] md:w-[500px] w-full h-full md:h-auto flex-col items-center md:rounded-md bg-[#C9C9C8] py-10 dark:bg-[#151515]">
      <div className="mb-8 w-10/12 text-center">
        <h1 className="lg:text-lg md:text-base text-[24px] font-medium text-secondary-200">Sucesso!</h1>
        <div className="mt-4 rounded-md bg-secondary-200 lg:py-2 md:py-1 py-1"></div>
      </div>

      <p className="mb-8 text-center lg:text-[32px] md:text-[24px] text-[24px] font-light leading-[1.3] dark:text-white">
        Comece a <br /> criar seu avatar!
      </p>

      <div className="lg:h-[301px] lg:w-[301px] md:h-[240px] md:w-[240px] w-[180px] h-[180px] rounded-full bg-[#7C20BE80]">
        <img width={"400"} src={Avatar} alt="Imagem do avatar do usuário com um constraste roxo" title="Este é o seu avatar, pronto para ser personalizado!"  />
      </div>

      <PrimaryButton
        onClick={onClick}
        color={"md:mt-[45px] mt-[20px]"}
        text={"Criar agora"}
      />
    </section>
  );
}
export default CreateAvatar;
