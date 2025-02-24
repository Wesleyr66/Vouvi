function Feedback({ text, color, img }) {
  return (
    <div
      className={`${color} hover:outline-[7px] hover:outline transition-all duration-300 m-auto mx-2.5 mr-2.5 flex h-[200px] sm:h-[250px] md:h-[300px] xl:h-[18vw] w-6/12 flex-col items-center justify-center rounded-3xl text-center xl:text-lg sm:text-base text-md font-medium`}
    >
      <p>{text}</p>
      <img src={img} className="w-9/12" alt="" />
    </div>
  );
}
export default Feedback;
