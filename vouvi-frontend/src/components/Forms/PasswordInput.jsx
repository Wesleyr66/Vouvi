import { Icon } from "@iconify/react";
import { useState } from "react";
import PropTypes from "prop-types";

function PasswordInput({ id = "", name = "", value, onChange }) {
  const [icon, setIcon] = useState("mdi:eye-off");

  const showPassword = () => {
    setIcon(icon === "mdi:eye" ? "mdi:eye-off" : "mdi:eye");
    const password = document.getElementById(id);
    password.type = password.type === "password" ? "text" : "password";
  };

  return (
    <>
      <div className="relative flex h-[64px] sm:w-[500px] w-[280px] flex-row items-center border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base outline-primary-200 transition-colors duration-500 ease-in-out focus-within:outline-none hover:border-b-primary-200">
        <input
          className="text-[25px] sm:text-[40px] w-full bg-white bg-opacity-0 focus:outline-none"
          type="password"
          name={name}
          id={id}
          value={value}
          onChange={onChange || (() => console.log("Hello"))}
          autoComplete="current-password"
          required
        />
        <div
          className="absolute right-5 hover:cursor-pointer"
          onClick={showPassword}
        >
          <Icon tabIndex="0" icon={icon} />
        </div>
      </div>
    </>
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default PasswordInput;
