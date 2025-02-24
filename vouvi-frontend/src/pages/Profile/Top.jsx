// Import Assets
import Avatar from "../../assets/images/avatar.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";
import purpleBg from "../../assets/images/purple-bg.svg";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";

// Import Components
import ProfileTags from "../../components/Cards/ProfileTags";
import CoinCard from "../../components/Cards/CoinCard";

function Top({ userName, levelUser, xpLeft, progressionbar,vcoin,achievements }) {

  return (
    <section className="m-auto mt-16 flex w-[90%] flex-col items-center border-b-2 border-[#252525] pb-8 lg:pb-16 lg:mt-10 lg:flex-row xl:mt-14 dark:border-[#F5F5F442]">
      <div className="flex flex-none">
        <div className="rounded-full bg-[#7C20BE80] h-[150px] w-[150px] xs:h-[200px] xs:w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[350px] 2xl:w-[350px]">
          <img src={Avatar} alt="Avatar Finn" title="Avatar Finn" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 font-medium text-[#252525] lg:ml-10 lg:w-[90%] lg:items-stretch xl:ml-12 2xl:ml-14 dark:text-white">
        <h1 className="text-[40px] sm:text-[50px] lg:text-[30px] xl:text-base 2xl:text-lg">
          {userName ? userName : "Usuário"}
        </h1>
        <div className="bg-blue-500 mt-10 xs:mt-14 w-full rounded-[15px] md:rounded-md bg-[#014085] px-4 md:px-6 lg:mt-0 lg:w-[80%]">
          <div className="flex justify-between text-right font-semibold text-[15px] xs:text-[20px] sm:text-[30px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
            <h2 className="text-white">Nivel: {levelUser}</h2>
            <h2 className="text-secondary-200">Faltam {xpLeft}XP</h2>
          </div>
          <div className="m-auto mb-2 flex h-[10px] w-[100%] rounded-md bg-[#F5F5F480]">
            <div
              style={{ width: `${progressionbar}%` }}
              className={`rounded-md bg-white`}
            ></div>
          </div>
        </div>
        <div className="flex w-full flex-wrap font-medium lg:w-5/6">
          <ProfileTags text={"Sessão de investimentos"} />
          <ProfileTags text={"15 Amigos"} />
        </div>
      </div>
      <hr className="relative m-8 h-[2px] w-full bg-[#252525] lg:right-[4.5%] lg:m-0 lg:h-72 lg:w-[2px] xl:h-96 dark:bg-[#F5F5F442]" />
      <div
        className="flex w-full items-end justify-center gap-3 lg:w-fit lg:flex-col lg:items-stretch lg:gap-0"
        title="ícone da vouvi, chamado Vcoins com uma estrela em cima  "
      >
        <div className="flex lg:flex-auto gap-2 lg:gap-0">
          <CoinCard
            color={
              "lg:mr-5 xl:mr-8 2xl:mr-10 bg-[linear-gradient(180deg,rgba(255,77,0,0.80)_0%,rgba(255,216,46,0.80)_100%);]"
            }
            icon={Vicon}
            title={vcoin}
            text={"vcoins"}
          />
          <CoinCard
            background={{ backgroundImage: `url(${purpleBg})` }}
            color={"bg-cover bg-center"}
            icon={VouviLover}
            title={achievements}
            text={"emblemas"}
          />
        </div>
        <div className="flex flex-col gap-2 whitespace-nowrap md:gap-0 lg:gap-0">
          <div className="flex justify-center rounded-md bg-[#14A90033] px-2 py-1 font-bold text-[#14A900] sm:mt-4 text-[12px] xs:text-[16px] sm:text-[26px] md:px-4 md:py-2 lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
            Sequência: 1 dias
          </div>
          <div className="flex justify-center rounded-md bg-[#7C20BE33] px-2 py-1 font-bold text-primary-200 sm:mt-4 text-[12px] xs:text-[16px] sm:text-[26px] md:px-4 md:py-2 lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
            Especialista em economia
          </div>
        </div>
      </div>
    </section>
  );
}
export default Top;
