import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useState } from "react";
import { Link } from "react-router-dom";

function AvatarColors({ Eyes, Necklace, Pendant, Texture, Background }) {
  const Border = "outline lg:outline-[6px] md:outline-[3px] outline-white";
  const [IconBorder, NoBorder] = useState(0);

  const Bg = ["#002952", "#A30000", "#067D00", "#390062", "#784000", "#610132"];
  const [BgColor, NoBgColor] = useState();
  const Color = [
    "#007FFF",
    "#FF2D2D",
    "#37FF2D",
    "#7C20BE",
    "#FF8800",
    "#FF0084",
  ];
  const [IconColor, NoIconColor] = useState(0);

  const IconStates = (index) => {
    NoBorder(index); // Atualiza o estado IconBorder para o índice do ícone clicado
    NoBgColor(Bg[index]);
    NoIconColor(Color[index]);
  };

  const fillColor = Texture || IconColor || "#007fff";

  const AvatarStyle = (
    <svg
      className="lg:w-308 h-auto w-[100%] pr-7 pt-7 md:w-[74%] md:p-0"
      width="308"
      height="346"
      viewBox="0 0 308 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.229 50.5064C182.84 47.5291 194.266 45.9082 206.172 45.9082C218.008 45.9082 229.37 47.5102 239.928 50.4543C248.671 30.6513 268.348 13.8648 282.015 4.76306C283.105 4.03684 284.157 3.35954 285.163 2.73354C286.302 2.02403 287.381 1.38042 288.388 0.806152C288.756 1.90964 289.109 3.01323 289.447 4.11655L289.528 4.3815C298.506 33.8431 297.193 63.0866 293.132 84.8259C302.235 96.8178 307.468 110.849 307.468 125.845C307.468 152.198 291.308 175.572 266.383 190.134L266.432 190.917C268.533 224.029 273.848 255.07 278.738 283.606L278.801 283.973C284.896 319.547 290.374 351.521 287.682 378.195C286.323 391.654 282.877 403.915 276.297 414.705C269.705 425.515 260.068 434.683 246.58 442.09L245.879 442.475H166.268L165.567 442.09C152.079 434.683 142.442 425.515 135.85 414.705C132.658 409.472 130.204 403.892 128.367 397.997C128.311 397.999 128.254 398.002 128.197 398.004C115.383 398.454 97.8577 394.09 82.328 381.316C66.3537 368.176 53.6438 347.122 49.2418 316.223C42.4514 268.56 18.4501 256.143 14.5231 255.132C4.17811 252.467 -2.04836 241.921 0.615899 231.576C3.28015 221.231 13.8262 215.005 24.1712 217.669C46.6006 223.446 79.0793 251.379 87.5401 310.767C90.7647 333.402 99.3515 345.228 106.903 351.44C113.152 356.58 119.541 358.592 123.808 359.164C124.3 336.769 128.639 311.445 133.346 283.973L133.409 283.606C138.298 255.07 143.614 224.029 145.715 190.917L145.771 190.023C120.953 175.453 104.876 152.131 104.876 125.845C104.876 110.941 110.044 96.9906 119.044 85.0476C114.95 63.2857 113.598 33.9434 122.606 4.3815C122.969 3.18991 123.349 1.99797 123.747 0.806152C124.753 1.38042 125.832 2.02403 126.972 2.73354C140.588 11.2121 162.802 29.1002 172.229 50.5064ZM84.4248 378.766C99.0401 390.788 115.434 394.975 127.419 394.723L127.419 394.724C115.435 394.976 99.04 390.789 84.4245 378.767C69.1694 366.219 56.8107 345.953 52.5089 315.758C45.5744 267.083 20.842 253.351 15.3462 251.936C6.7662 249.726 1.60206 240.979 3.81175 232.399C3.88081 232.131 3.95624 231.867 4.03786 231.605C3.95638 231.866 3.88106 232.131 3.8121 232.398C1.60241 240.978 6.76654 249.725 15.3465 251.935C20.8424 253.35 45.5748 267.082 52.5093 315.757C56.811 345.952 69.1697 366.218 84.4248 378.766Z"
        className="transition-all duration-500"
        fill={fillColor}
      />
    </svg>
  );

  const Face = (
    <svg
      viewBox="0 0 1833 943"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-[22%] w-24 md:left-[14px] md:top-8 md:w-28 lg:left-9 lg:top-16 lg:w-[340px]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M824.97 896.456C826.376 892.559 830.674 890.54 834.57 891.945C849.159 897.207 875.137 903.66 904.886 905.54C934.66 907.422 967.607 904.683 996.538 892.121C1000.34 890.471 1004.76 892.214 1006.4 896.013C1008.05 899.812 1006.31 904.23 1002.51 905.88C970.644 919.717 935.091 922.479 903.94 920.51C872.764 918.54 845.392 911.794 829.481 906.055C825.585 904.65 823.565 900.352 824.97 896.456Z"
        fill="#1D1D1D"
      />
      <path
        d="M948.006 733H888.351C874.591 733 867.249 749.22 876.33 759.559L908.512 796.197C915.216 803.829 927.241 803.363 933.335 795.237L960.807 758.599C968.716 748.051 961.19 733 948.006 733Z"
        fill="#1B1B1B"
      />
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M297.612 4.06315C298.087 1.90565 300.221 0.541578 302.378 1.01642C421.64 27.2643 499.689 83.1877 552.044 147.416C604.335 211.567 630.838 283.809 647.384 342.492C647.983 344.618 646.746 346.828 644.619 347.427C642.493 348.027 640.284 346.789 639.684 344.663C623.264 286.424 597.131 215.391 545.843 152.471C494.618 89.6291 418.143 34.6862 300.659 8.82943C298.501 8.35459 297.137 6.22065 297.612 4.06315Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M260.049 190.574C260.284 188.377 262.256 186.787 264.452 187.023C444.869 206.364 562.691 313.237 599.285 364.682C600.566 366.482 600.144 368.979 598.344 370.26C596.544 371.54 594.047 371.119 592.766 369.319C557.278 319.429 441.386 214.036 263.599 194.977C261.403 194.742 259.813 192.77 260.049 190.574Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5357 57.7161C32.6926 55.5125 34.6061 53.8534 36.8097 54.0103C425.452 81.6845 587.405 260.537 619.777 348.113C620.543 350.185 619.485 352.486 617.412 353.252C615.34 354.018 613.04 352.959 612.274 350.887C581.313 267.13 422.799 89.5158 36.2415 61.9901C34.0379 61.8332 32.3788 59.9196 32.5357 57.7161Z"
          fill="#F5F5F4"
        />
      </g>
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1530.71 4.06315C1530.23 1.90565 1528.1 0.541578 1525.94 1.01642C1406.68 27.2643 1328.63 83.1877 1276.27 147.416C1223.98 211.567 1197.48 283.809 1180.93 342.492C1180.34 344.618 1181.57 346.828 1183.7 347.427C1185.83 348.027 1188.03 346.789 1188.63 344.663C1205.05 286.424 1231.19 215.391 1282.48 152.471C1333.7 89.6291 1410.18 34.6862 1527.66 8.82943C1529.82 8.35459 1531.18 6.22065 1530.71 4.06315Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1568.27 190.574C1568.03 188.377 1566.06 186.787 1563.87 187.023C1383.45 206.364 1265.63 313.237 1229.03 364.682C1227.75 366.482 1228.17 368.979 1229.97 370.26C1231.77 371.54 1234.27 371.119 1235.55 369.319C1271.04 319.429 1386.93 214.036 1564.72 194.977C1566.92 194.742 1568.51 192.77 1568.27 190.574Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1795.78 57.7161C1795.63 55.5125 1793.71 53.8534 1791.51 54.0103C1402.87 81.6845 1240.91 260.537 1208.54 348.113C1207.77 350.185 1208.83 352.486 1210.91 353.252C1212.98 354.018 1215.28 352.959 1216.04 350.887C1247.01 267.13 1405.52 89.5158 1792.08 61.9901C1794.28 61.8332 1795.94 59.9196 1795.78 57.7161Z"
          fill="#F5F5F4"
        />
      </g>
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1490.33 744.41C1400.43 767.719 1322.35 799.999 1277.85 822.68C1275.88 823.683 1275.1 826.092 1276.1 828.06C1277.1 830.028 1279.51 830.811 1281.48 829.807C1325.47 807.386 1403.01 775.315 1492.33 752.154C1581.7 728.984 1682.54 714.819 1773.28 727.923C1775.46 728.238 1777.49 726.722 1777.81 724.535C1778.12 722.349 1776.61 720.321 1774.42 720.005C1682.2 706.687 1580.19 721.11 1490.33 744.41Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1268.03 887.875C1267.96 890.083 1269.69 891.929 1271.9 891.998C1322.49 893.579 1404.83 898.024 1487.33 906.218C1569.94 914.423 1652.35 926.352 1703.3 942.807C1705.4 943.486 1707.65 942.332 1708.33 940.23C1709.01 938.127 1707.86 935.873 1705.76 935.194C1653.9 918.448 1570.73 906.461 1488.12 898.257C1405.41 890.043 1322.89 885.588 1272.15 884.002C1269.94 883.933 1268.1 885.667 1268.03 887.875Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1529.99 834.039C1424.97 836.99 1325.77 847.104 1266.46 855.54C1264.28 855.851 1262.76 857.876 1263.07 860.064C1263.38 862.251 1265.4 863.771 1267.59 863.46C1326.62 855.063 1425.52 844.977 1530.21 842.036C1634.98 839.093 1745.21 843.317 1827.07 863.385C1829.22 863.911 1831.39 862.598 1831.91 860.453C1832.44 858.307 1831.12 856.141 1828.98 855.615C1746.04 835.283 1634.93 831.091 1529.99 834.039Z"
          fill="#F5F5F4"
        />
      </g>
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M341.727 744.41C431.627 767.719 509.704 799.999 554.204 822.68C556.172 823.683 556.954 826.092 555.951 828.06C554.948 830.028 552.539 830.811 550.571 829.807C506.579 807.386 429.046 775.315 339.719 752.154C250.355 728.984 149.517 714.819 58.7748 727.923C56.5884 728.238 54.5599 726.722 54.2442 724.535C53.9285 722.349 55.445 720.321 57.6314 720.005C149.856 706.687 251.863 721.11 341.727 744.41Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M564.025 887.875C564.094 890.083 562.36 891.929 560.151 891.998C509.561 893.579 427.227 898.024 344.722 906.218C262.11 914.423 179.705 926.352 128.756 942.807C126.654 943.486 124.399 942.332 123.72 940.23C123.041 938.127 124.195 935.873 126.297 935.194C178.148 918.448 261.326 906.461 343.931 898.257C426.642 890.043 509.158 885.588 559.902 884.002C562.11 883.933 563.956 885.667 564.025 887.875Z"
          fill="#F5F5F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M302.064 834.039C407.085 836.99 506.286 847.104 565.59 855.54C567.777 855.851 569.298 857.876 568.987 860.064C568.675 862.251 566.65 863.771 564.463 863.46C505.434 855.063 406.535 844.977 301.839 842.036C197.068 839.093 86.8401 843.317 4.97871 863.385C2.8331 863.911 0.667342 862.598 0.141356 860.453C-0.38463 858.307 0.928332 856.141 3.07394 855.615C86.0126 835.283 197.118 831.091 302.064 834.039Z"
          fill="#F5F5F4"
        />
      </g>
    </svg>
  );

  return (
    <div className="relative flex flex-none flex-col items-center bg-[#C9C9C8] md:w-[182px] md:rounded-bl-md md:rounded-tl-md md:py-5 lg:w-[520px] lg:rounded-l-md lg:py-10 2xl:rounded-md dark:bg-[#151515]">
      <h1 className="mb-5 mt-8 text-[24px] font-semibold md:hidden dark:text-white">
        Crie seu avatar!
      </h1>
      <div
        style={{
          backgroundImage: `url(${Background})`, // caminho para a imagem
          backgroundSize: "120%", // faz a imagem cobrir todo o contêiner
          backgroundPosition: "center", // centraliza a imagem
          backgroundRepeat: "no-repeat", // impede a repetição da imagem
          backgroundColor: Bg[IconBorder], // cor de fundo como fallback
        }}
        className={`relative flex h-[140px] w-[130px] rounded-md border-[6px] border-white transition-all duration-500 md:h-[160px] md:w-10/12 md:pt-8 lg:h-auto lg:border-[10px] lg:pt-16 dark:border-black`}
      >
        {AvatarStyle}
        <div className="absolute ml-[34.17%] mt-[43%] w-[40px] md:ml-[33%] md:mt-7 md:w-12 lg:ml-[33%] lg:mt-[19.5%] lg:w-[140px]">
          <img width="140px" src={Eyes} alt="" />
        </div>
        <div className="absolute ml-[32.5%] mt-[71.5%] w-[45px] md:ml-[31.95%] md:mt-[66px] md:w-12 lg:ml-[33%] lg:mt-[183px] lg:w-[130px]">
          <img width="140px" src={Necklace} alt="" />
        </div>
        <div className="absolute ml-[44.5%] mt-[75%] w-[15px] md:ml-[44%] md:mt-[70px] md:w-3.5 lg:ml-[44.5%] lg:mt-[195px] lg:w-[140px]">
          <img width="40px" src={Pendant} alt="" />
        </div>
        {Face}
      </div>
      <div className="flex w-[230px] justify-around py-6 md:w-10/12 md:py-6">
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 0 ? Bg[0] : "#007fff" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-secondary-200 transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 0 ? Border : ""} `}
          onClick={() => IconStates(0)}
        ></div>
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 1 ? Bg[1] : "#FF2D2D" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-[#FF2D2D] transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 1 ? Border : ""} `}
          onClick={() => IconStates(1)}
        ></div>
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 2 ? Bg[2] : "#37FF2D" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-[#37FF2D] transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 2 ? Border : ""} `}
          onClick={() => IconStates(2)}
        ></div>
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 3 ? Bg[3] : "#7C20BE" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-primary-200 transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 3 ? Border : ""} `}
          onClick={() => IconStates(3)}
        ></div>
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 4 ? Bg[4] : "yellow" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-yellow transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 4 ? Border : ""} `}
          onClick={() => IconStates(4)}
        ></div>
        <div
          tabIndex="0"
          style={{ backgroundColor: IconBorder === 5 ? Bg[5] : "#FF0084" }}
          className={`h-6 w-6 cursor-pointer rounded-full bg-[#FF0084] transition-all duration-300 md:h-5 md:w-5 lg:h-14 lg:w-14 ${IconBorder === 5 ? Border : ""} `}
          onClick={() => IconStates(5)}
        ></div>
      </div>
      <Link className="hidden w-full md:flex md:justify-center" to={"/profile"}>
        <SecondaryButton
          color={
            "w-9/12 lg:h-[75px] md:h-[125%] lg:text-[32px] md:text-sm hover:bg-opacity-100 hover:text-primary-200 bg-white"
          }
          text={"Pronto!"}
        />
      </Link>
    </div>
  );
}
export default AvatarColors;
