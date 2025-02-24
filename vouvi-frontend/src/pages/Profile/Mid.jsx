// Import components
import Quest from "../../components/Cards/Quest";
import Rewards from "../../components/Cards/Rewards";
import Insigne from "../../components/Cards/Insigne";

// Import Assets
import VcoinIcon from "../../assets/images/vcoin-reward-icon.svg";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";
import Newbie from "../../assets/images/newbie-insigne.svg";
import { Icon } from "@iconify/react";

function Mid({ openModal }) {
  return (
    <section className="m-auto mt-20 flex w-[93%] flex-wrap justify-between xl:flex-nowrap 2xl:w-11/12">
      <div className="w-full xl:w-fit">
        <div className="flex w-[200px] justify-center rounded-t-md bg-[rgba(124,32,190,0.50);] text-[32px] font-medium text-[#471650] xl:text-[40px] dark:bg-[#1e1e1e] dark:text-white">
          Missões
        </div>
        <div className="flex flex-col rounded-[0px_24px_24px] bg-[rgba(124,32,190,0.50);] p-7 dark:bg-[#1e1e1e]">
          <div className="mb-10 flex">
            <Quest
              quest={"Missão Diária"}
              amount={"(04/05)"}
              text={"Anote três pequenas economias"}
            >
              <Rewards
                hidden={`lg:hidden`}
                pad={"py-2 px-3 flex-1"}
                xp={"150"}
                pad2={"mx-2 "}
                vicon={""}
                vcoin={""}
                pad3={"py-2 px-3 flex-1 "}
                gift={
                  <Icon icon="solar:gift-bold" width={38} color="#81340A" />
                }
                tgift={"1 Gift"}
              />
            </Quest>
            <Rewards
              hidden={"hidden lg:flex"}
              pad={"py-2 px-3 flex-1"}
              xp={"150"}
              pad2={"mx-2 "}
              vicon={""}
              vcoin={""}
              pad3={"py-2 px-3 flex-1 "}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>

          <div className="mb-10 flex">
            <Quest
              quest={"Missão Semanal"}
              amount={""}
              text={"Complete todas as missões diárias 02/05"}
              hidden={"hidden"}
            >
              <Rewards
                hidden={`lg:hidden`}
                pad={"py-2 px-3 flex-1 "}
                xp={"150"}
                pad2={"py-2 px-3 flex-1 mx-2 "}
                vicon={VcoinIcon}
                vcoin={"25"}
                pad3={"py-2 px-3 flex-1"}
                gift={
                  <Icon icon="solar:gift-bold" width={38} color="#81340A" />
                }
                tgift={"1 Gift"}
              />
            </Quest>
            <Rewards
              hidden={"hidden lg:flex"}
              pad={"py-2 px-3 flex-1 "}
              xp={"150"}
              pad2={"py-2 px-3 flex-1 mx-2 "}
              vicon={VcoinIcon}
              vcoin={"25"}
              pad3={"py-2 px-3 flex-1 "}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>

          <div className="mb-10 flex">
            <Quest
              quest={"Missão Mensal"}
              amount={""}
              text={"Compartilhe seu objetivo financeiro com um amigo"}
              hidden={"hidden"}
            >
              <Rewards
                hidden={`lg:hidden`}
                pad={"py-2 px-3 flex-1 "}
                xp={"150"}
                pad2={"py-2 px-3 flex-1 mx-2 "}
                vicon={VcoinIcon}
                vcoin={"25"}
                pad3={"py-2 px-3 flex-1"}
                gift={
                  <Icon icon="solar:gift-bold" width={38} color="#81340A" />
                }
                tgift={"1 Gift"}
              />
            </Quest>
            <Rewards
              hidden={"hidden lg:flex"}
              pad={"py-2 px-3 flex-1 "}
              xp={"150"}
              pad2={"py-2 px-3 flex-1 mx-2 "}
              vicon={VcoinIcon}
              vcoin={"25"}
              pad3={"py-2 px-3 flex-1"}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>
        </div>
      </div>
      <div className="group w-full xl:ml-5 xl:w-fit">
        <div className="mt-20 flex w-[240px] justify-center rounded-t-md bg-[rgba(124,32,190,0.50);] text-[32px] font-medium text-[#471650] transition-colors duration-500 group-hover:bg-primary-200 group-hover:text-white xl:mt-0 xl:text-[40px] dark:bg-[#1e1e1e] dark:text-white dark:group-hover:bg-[#282828]">
          Conquistas
        </div>
        <div className="flex flex-col rounded-[0px_24px_24px] bg-[rgba(124,32,190,0.50);] p-7 transition-colors duration-500 group-hover:bg-primary-200 xl:h-[92%] dark:bg-[#1e1e1e] dark:group-hover:bg-[#282828]">
          <Insigne
            icon={VouviLover}
            title={"Vouvi lover"}
            text={"Seja Premium"}
          />
          <Insigne
            icon={Newbie}
            title={"Iniciante Financeiro"}
            text={"Faça sua primeira aula"}
          />
          <div
            tabIndex="0"
            onClick={openModal}
            className="mx-5 mt-auto flex w-auto cursor-pointer items-center justify-center text-[#471650] duration-500 group-hover:text-white dark:text-white"
          >
            <p className="mx-2 text-[32px] font-medium">Ver todos</p>
            <Icon
              icon="prime:sort-down-fill"
              width="35px"
              className="group-[1]:"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mid;
