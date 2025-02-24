function Cards({ title, text, img, color, gradient }) {
  return (
    <div
      style={{
        background: gradient,
      }}
      className={`relative ${color} mx-5 flex lg:w-[26%] w-11/12 flex-col items-center rounded-md py-14 text-center`}
    >
      <img className="h-[140px] w-[140px]" src={img} alt="" />
      <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
      <p className="mt-5 w-3/4 text-md sm:text-base font-light">{text}</p>
    </div>
  );
}

export default Cards;
