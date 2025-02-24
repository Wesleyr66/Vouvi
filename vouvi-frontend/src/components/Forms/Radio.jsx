import { Icon } from "@iconify/react";
import { useState } from "react";

function KeepConected() {
  const [icon, setIcon] = useState("fluent:radio-button-24-regular");
  const [active, setActive] = useState(false);

  const changeKeepConected = () => {
    setIcon(
      icon === "fluent:radio-button-24-filled"
        ? "fluent:radio-button-24-regular"
        : "fluent:radio-button-24-filled",
    );

    setActive(!active);
  };

  return (
    <div className="flex items-center justify-center sm:justify-start">
      <span className="text-primary-200" onClick={changeKeepConected}>
        <Icon icon={icon} width={"30px"} />
      </span>
      <input
        className="hidden"
        type="radio"
        name="keepconected"
        id="keepconected"
        value={active}
      />
      <label className="text-[20px] sm:text-md font-light" htmlFor="keepconected">
        Mantenha-me conectado
      </label>
    </div>
  );
}

export default KeepConected;
