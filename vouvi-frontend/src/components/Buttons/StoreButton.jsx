function  StoreButton({ children, text, color }) {
  return (
    <div
      className={`${color} flex cursor-pointer items-center rounded-[16px] px-2 py-2 md:px-4 md:py-3 text-[30px] xs:text-base font-medium lg:rounded-md`}
    >
      {children}
      <p className="mx-1 md:mx-2 hidden lg:block">{text}</p>
    </div>
  );
}
export default StoreButton;
