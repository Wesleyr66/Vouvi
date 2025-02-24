import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Slider from "react-slick";

import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import AvatarBasic from "../../components/Header/AvatarBasic";
import Trail from "./Trail";
import QuestionStart from "../../components/Modals/QuestionStart";

import { useState, useEffect } from "react";
import trailImage1Dark from "../../assets/images/learning-trail-1-dark.svg";
import trailImage2Dark from "../../assets/images/learning-trail-2-dark.svg";
import trailImage3Dark from "../../assets/images/learning-trail-3-dark.svg";
import trailImage4Dark from "../../assets/images/learning-trail-4-dark.svg";
import trailImage5Dark from "../../assets/images/learning-trail-5-dark.svg";
import trailImage6Dark from "../../assets/images/learning-trail-6-dark.svg";

function Learn() {
  const stages = [
    {
      id: 0,
      icon: "ic:round-menu-book",
      iconWidth: 50,
      top: 1,
      left: 1,
      open: true,
    },
  ];

  const nextArrow = (
    <svg
      tabIndex="0"
      width="49"
      height="84"
      viewBox="0 0 49 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group absolute right-8 hidden cursor-pointer lg:block"
    >
      <path
        d="M2.08181 81.7755C0.910111 80.6035 0.251889 79.0141 0.251889 77.3568C0.251889 75.6995 0.910111 74.1101 2.08181 72.938L33.0193 42.0005L2.08181 11.063C0.943324 9.88428 0.313357 8.30551 0.327598 6.66678C0.341838 5.02805 0.999145 3.46048 2.15794 2.30167C3.31675 1.14287 4.88433 0.485569 6.52306 0.471333C8.16178 0.457089 9.74055 1.08706 10.9193 2.22554L46.2756 37.5818C47.4473 38.7538 48.1055 40.3433 48.1055 42.0005C48.1055 43.6578 47.4473 45.2472 46.2756 46.4193L10.9193 81.7755C9.74725 82.9472 8.15783 83.6055 6.50055 83.6055C4.84328 83.6055 3.25385 82.9472 2.08181 81.7755Z"
        className="fill-secondary-400 transition-all duration-200 group-hover:fill-secondary-200 dark:fill-white"
      />
    </svg>
  );

  const [levelUser, setLevelUser] = useState(1);
  const [xp, setXp] = useState(0);
  const [vcoin, setVcoin] = useState(0);

  return (
    <>
      <QuestionStart />
      <Header iconActiveNumber={0}>
        <AvatarBasic />
      </Header>

      <main className="flex w-[100vw] flex-col items-center justify-center px-0 md:px-[1vw] xl:px-[7vw]">
        {/* Heading */}
        <TopSection
          xpLeft={levelUser * 100 - xp}
          section={1}
          sectionName={"Fundamentos"}
          playerCoins={vcoin}
          playerLevel={levelUser}
          playerXP={xp}
          progressionBar={((xp % 100) / 100) * 100}
        />

        {/* Trail 1 */}
        <div className="relative flex h-full w-full items-center justify-center">
          <Slider
            infinite={false}
            className="top-56 min-w-[600px] rotate-90 lg:top-0 lg:rotate-0"
          >
            <Trail stages={stages} bg={trailImage1Dark} />

            <img src={trailImage2Dark} alt="trilha 2" />
            <img src={trailImage3Dark} alt="trilha 3" />
            <img src={trailImage4Dark} alt="trilha 4" />
            <img src={trailImage5Dark} alt="trilha 5" />
            <img src={trailImage6Dark} alt="trilha 6" />
          </Slider>
        </div>

        {/* {nextArrow} */}

        <LifeMeter lives={3} />
      </main>

      <div className="fixed bottom-0 w-screen">
        <HeaderMobile iconId={0} />
      </div>
    </>
  );
}

function LifeMeter({ lives = 3 }) {
  return (
    <div className="absolute bottom-20 left-10 flex h-fit w-fit gap-2 rounded-sm bg-secondary-200/20 p-3 lg:bottom-5">
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 1 ? "text-secondary-200" : "text-secondary-200/30"}
      />
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 2 ? "text-secondary-200" : "text-secondary-200/30"}
      />
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 3 ? "text-secondary-200" : "text-secondary-200/30"}
      />
    </div>
  );
}

LifeMeter.propTypes = {
  lives: PropTypes.number,
};

export default Learn;
