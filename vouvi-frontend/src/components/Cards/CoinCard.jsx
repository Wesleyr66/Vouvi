function Card({ icon, title, text, color, background }) {
  return (
    <div
      style={background}
      className={`${color} flex flex-col items-center justify-center rounded-[16px] sm:rounded-md p-5 font-medium leading-[1] w-[70px] h-[60px] xs:w-[80px] xs:h-[75px] sm:h-[130px] sm:w-[130px]  lg:h-[100px] lg:w-[140px] text-white xl:h-[120px] xl:w-[160px] px-6 sm:px-12 lg:px-12 xl:px-14 2xl:h-[150px] 2xl:w-[200px] 2xl:px-20`}
    >
      <img src={icon} alt="" />
      <h2 className="text-[15px] xs:text-[18px] sm:text-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">{title}</h2>
      <p className="text-[10px] xs:text-[14px] sm:text-[22px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">{text}</p>
    </div>
  );
}
export default Card;
