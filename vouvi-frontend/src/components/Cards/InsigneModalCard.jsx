function InsigneModalCard({ img, title, text, color, imgSize }) {
  return (
    <div
      className={`flex h-56 w-72 sm:h-72 sm:w-[340px] flex-col items-center justify-center rounded-md font-medium leading-[0.9] text-black dark:text-white ${color}`}
    >
      <img src={img} className={`${imgSize}`} alt="" />
      <h3 className="whitespace-nowrap text-[30px] sm:text-[38px] tracking-tight">{title}</h3>
      <p className="text-[19px] sm:text-[24px]">{text}</p>
    </div>
  );
}
export default InsigneModalCard;
