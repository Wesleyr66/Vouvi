import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import AvatarBasic from "./AvatarBasic";
import Settings from "./Settings";
import SettingsModal from "../Modals/SettingsModal";

function HeaderMobile({ iconId }) {
  // Borda ao clicar
  const Outline =
    "rounded-full outline outline-8 outline-[rgba(0,127,255,0.15)]";
  const [useOutline, setUseOutline] = useState(false);

  // Background e cor do icone de cada SVG
  const bgFill = "fill-[#003F7F]";
  const iconColor = "fill-[#007fff]";

  // Estado para controlar qual ícone está ativo
  const [activeIcon, setActiveIcon] = useState(false);

  const animationFill = "transition-all duration-300 ease-in-out";

  // Icones
  const Learn = (
    <svg
      tabIndex="0"
      className="w-10 overflow-visible sm:w-14"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={`${animationFill} group-hover:fill-[#003F7F] ${
          iconId === 0 ? bgFill : ""
        }`}
        width="46"
        height="46"
        rx="23"
        fill="#007fff"
      />
      <path
        className={`group-hover:fill-[#007fff] ${
          iconId === 0 ? iconColor : ""
        }`}
        d="M9.66699 22.2713C9.66699 19.2193 9.66699 17.694 10.3603 16.43C11.051 15.1647 12.3163 14.3807 14.8457 12.81L17.5123 11.1553C20.1857 9.49535 21.523 8.66602 23.0003 8.66602C24.4777 8.66602 25.8137 9.49535 28.4883 11.1553L31.155 12.81C33.6843 14.3807 34.9497 15.1647 35.6417 16.43C36.3337 17.6953 36.3337 19.2193 36.3337 22.27V24.2993C36.3337 29.4993 36.3337 32.1007 34.771 33.7167C33.2083 35.3327 30.695 35.3327 25.667 35.3327H20.3337C15.3057 35.3327 12.791 35.3327 11.2297 33.7167C9.66833 32.1007 9.66699 29.5007 9.66699 24.2993V22.2713Z"
        fill="#014085"
      />
    </svg>
  );
  const Planning = (
    <svg
      tabIndex="0"
      className="w-10 overflow-visible sm:w-14"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={`${animationFill} group-hover:fill-[#003F7F] ${
          iconId === 1 ? bgFill : ""
        }`}
        width="46"
        height="46"
        rx="23"
        fill="#007fff"
      />
      <path
        className={`${animationFill} group-hover:fill-[#007fff] ${
          iconId === 1 ? iconColor : ""
        } `}
        d="M35.6323 18.8817C35.9077 18.5183 36.0365 18.0565 35.9911 17.595C35.9457 17.1335 35.7297 16.7089 35.3893 16.4119C35.0489 16.1149 34.6111 15.969 34.1694 16.0055C33.7277 16.042 33.3171 16.2578 33.0253 16.607L28.9587 21.7157C28.1214 22.7701 27.6032 23.4123 27.18 23.8127C27.0693 23.9251 26.9453 24.0223 26.8111 24.1018L26.7862 24.1136L26.7681 24.1042L26.7613 24.1018C26.6263 24.0225 26.5016 23.9253 26.3902 23.8127C25.967 23.4099 25.4511 22.7701 24.6115 21.7157L23.9507 20.8864C23.2084 19.9504 22.5363 19.1092 21.9117 18.5168C21.2305 17.8723 20.3729 17.2989 19.2414 17.2989C18.1099 17.2989 17.2544 17.8723 16.571 18.5168C15.9464 19.1092 15.2766 19.9504 14.5343 20.8864L10.393 26.0851C10.2504 26.2645 10.1429 26.4715 10.0766 26.6944C10.0104 26.9173 9.98676 27.1517 10.007 27.3841C10.048 27.8536 10.2654 28.2868 10.6114 28.5885C10.9574 28.8901 11.4037 29.0355 11.8521 28.9926C12.3004 28.9497 12.7142 28.7221 13.0023 28.3598L17.0689 23.2511C17.9062 22.1967 18.4244 21.5546 18.8476 21.1541C18.9583 21.0417 19.0823 20.9446 19.2165 20.865L19.2323 20.8579L19.2414 20.8556C19.2474 20.8556 19.2557 20.8587 19.2663 20.865C19.4013 20.9444 19.526 21.0415 19.6374 21.1541C20.0606 21.5569 20.5765 22.1967 21.4161 23.2511L22.0769 24.0805C22.8214 25.0164 23.4913 25.8576 24.1159 26.45C24.797 27.0945 25.6547 27.6679 26.7862 27.6679C27.9177 27.6679 28.7731 27.0945 29.4566 26.45C30.0812 25.8576 30.751 25.0164 31.4933 24.0805L35.6323 18.8817Z"
        fill="#014085"
      />
    </svg>
  );

  const Ranking = (
    <svg
      tabIndex="0"
      className="w-10 overflow-visible sm:w-14"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={`${animationFill} group-hover:fill-[#003F7F] ${
          iconId === 2 ? bgFill : ""
        }`}
        width="46"
        height="46"
        rx="23"
        fill="#007fff"
      />
      <path
        className={`${animationFill} group-hover:fill-[#007fff] ${
          iconId === 2 ? iconColor : ""
        }`}
        d="M35.4908 25.0306L35.7898 21.8638C36.0238 19.3782 36.1408 18.1341 35.7144 17.6206C35.6068 17.4871 35.4739 17.3763 35.3233 17.2944C35.1727 17.2125 35.0074 17.1612 34.8369 17.1435C34.2182 17.0889 33.4421 17.9729 31.8886 19.7409C31.0852 20.6561 30.6835 21.1124 30.2364 21.1839C29.9866 21.2231 29.7308 21.1821 29.5058 21.0669C29.0911 20.8589 28.8168 20.2934 28.2643 19.1637L25.3563 13.2045C24.3137 11.0686 23.7924 10 22.9994 10C22.2065 10 21.6852 11.0686 20.6426 13.2045L17.7346 19.1637C17.1834 20.2947 16.9078 20.8589 16.4931 21.0669C16.2678 21.1813 16.0123 21.2222 15.7625 21.1839C15.3153 21.1124 14.9136 20.6561 14.1103 19.7409C12.5568 17.9729 11.7807 17.0889 11.1619 17.1435C10.9915 17.1612 10.8262 17.2125 10.6756 17.2944C10.525 17.3763 10.392 17.4871 10.2845 17.6206C9.85938 18.1341 9.97637 19.3782 10.2104 21.8638L10.5081 25.0306C10.9994 30.2462 11.2438 32.8553 12.783 34.427C14.3183 36 16.6218 36 21.2315 36H24.7661C29.3745 36 31.678 36 33.2159 34.427C34.7537 32.854 34.9994 30.2462 35.4908 25.0306Z"
        fill="#014085"
      />
    </svg>
  );

  const Store = (
    <svg
      tabIndex="0"
      className="w-10 overflow-visible sm:w-14"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={`${animationFill} group-hover:fill-[#003F7F] ${
          iconId === 3 ? bgFill : ""
        }`}
        width="46"
        height="46"
        rx="23"
        fill="#007fff"
      />
      <path
        className={`${animationFill} group-hover:fill-[#007fff] ${
          iconId === 3 ? iconColor : ""
        }`}
        d="M13.245 36C12.4786 36 11.8227 35.7174 11.2774 35.1521C10.7321 34.5868 10.459 33.9065 10.458 33.1111V21.6278C9.92387 21.1222 9.51186 20.4722 9.22201 19.6778C8.93216 18.8833 8.92613 18.0167 9.20389 17.0778L10.6671 12.1667C10.8529 11.5407 11.184 11.0231 11.6606 10.6139C12.1372 10.2046 12.6886 10 13.3147 10H32.6843C33.3113 10 33.8571 10.1989 34.3216 10.5966C34.7861 10.9943 35.1229 11.5176 35.3319 12.1667L36.7951 17.0778C37.0738 18.0167 37.0682 18.8713 36.7784 19.6417C36.4885 20.412 36.076 21.0741 35.5409 21.6278V33.1111C35.5409 33.9056 35.2683 34.5859 34.7229 35.1521C34.1776 35.7183 33.5213 36.001 32.7539 36H13.245ZM26.0652 20.1111C26.6922 20.1111 27.1684 19.8887 27.4935 19.4438C27.8187 18.9989 27.9464 18.4991 27.8767 17.9444L27.1103 12.8889H24.393V18.2333C24.393 18.7389 24.5556 19.1785 24.8807 19.5521C25.2059 19.9257 25.6007 20.1121 26.0652 20.1111ZM19.7944 20.1111C20.3286 20.1111 20.7643 19.9243 21.1015 19.5507C21.4388 19.177 21.6069 18.7379 21.606 18.2333V12.8889H18.8887L18.1223 17.9444C18.0294 18.5222 18.1511 19.0278 18.4874 19.4611C18.8236 19.8944 19.2593 20.1111 19.7944 20.1111ZM13.5934 20.1111C14.0114 20.1111 14.377 19.9546 14.6901 19.6417C15.0032 19.3287 15.195 18.9315 15.2656 18.45L16.032 12.8889H13.3147L11.9212 17.7278C11.7819 18.2093 11.8571 18.7269 12.147 19.2806C12.4368 19.8343 12.9189 20.1111 13.5934 20.1111ZM32.4056 20.1111C33.0791 20.1111 33.5668 19.8343 33.8687 19.2806C34.1707 18.7269 34.2403 18.2093 34.0778 17.7278L32.6146 12.8889H29.967L30.7334 18.45C30.8031 18.9315 30.9949 19.3287 31.3089 19.6417C31.6229 19.9546 31.9884 20.1111 32.4056 20.1111Z"
        fill="#014085"
      />
    </svg>
  );

  const StateChange = (iconId) => {
    setUseOutline(iconId); // Alterna a borda
  };

  useEffect(() => {
    StateChange(iconId); // Define o iconState para 0 ao montar o componente
  }, []);

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {activeModal === "settings" && <SettingsModal closeModal={closeModal} />}
      <header className="sticky bottom-0 left-0 z-10 m-auto flex h-16 w-full items-center justify-around bg-[rgba(2,2,11,0.15)] backdrop-blur-[13px] sm:h-20 lg:hidden dark:bg-[rgba(2,2,11,0.80);]">
        <nav className="flex w-full items-center justify-around">
          <Link to={"/learn"}>
            <div onClick={() => StateChange(0)}>
              <Navigation
                width={`w- group ${useOutline === 0 ? Outline : ""}`}
                icon={Learn}
                textColor={"hidden"}
              />
            </div>
          </Link>

          <Link to={"/planning"}>
            <div onClick={() => StateChange(1)}>
              <Navigation
                width={` group ${useOutline === 1 ? Outline : ""} `}
                icon={Planning}
                textColor={"hidden"}
              />
            </div>
          </Link>

          <Link to={"/profile"}>
            <div onClick={() => StateChange(4)}>
              {iconId === 4 ? (
                <Settings
                  openModal={() => openModal("settings")}
                  width={` ${useOutline === 4 ? Outline : ""}`}
                  textColor={`hidden `}
                />
              ) : (
                <AvatarBasic width={` group w-10 sm:w-14`} />
              )}
            </div>
          </Link>

          <Link to={"/ranking"}>
            <div onClick={() => StateChange(2)}>
              <Navigation
                width={` group ${useOutline === 2 ? Outline : ""} `}
                icon={Ranking}
                textColor={"hidden"}
              />
            </div>
          </Link>

          <Link to={"/store"}>
            <div onClick={() => StateChange(3)}>
              <Navigation
                width={`group ${useOutline === 3 ? Outline : ""} `}
                icon={Store}
                textColor={"hidden"}
              />
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
}
export default HeaderMobile;
