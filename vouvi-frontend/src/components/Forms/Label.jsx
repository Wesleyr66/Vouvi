function Label({ children, htmlFor = "" }) {
  return (
    <label className="w-fit text-[24px] sm:text-base" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
