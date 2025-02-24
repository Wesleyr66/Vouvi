function AvatarTrinkets({ color, children, onClick }) {
  return (
    <div
      tabIndex="0"
      onClick={onClick}
      className={`${color} md:outline-3 mx-3 flex h-12 w-12 flex-none cursor-pointer items-center justify-center overflow-hidden rounded-[10px] outline outline-[#002952] md:mx-3 md:h-14 md:w-14 lg:mx-3 lg:h-20 lg:w-20 lg:rounded-sm lg:outline-4 xl:h-32 xl:w-32 dark:outline-none`}
    >
      {children}
    </div>
  );
}
export default AvatarTrinkets;
