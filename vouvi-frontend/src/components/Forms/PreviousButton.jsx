function PreviousButton({ setStep }) {
  return (
    <input
      className="w-full rounded-md bg-black bg-opacity-15 py-4 text-[25px] sm:text-base font-bold text-black transition-all hover:cursor-pointer hover:bg-opacity-70 hover:text-white"
      id="previous-button"
      type="button"
      value="Voltar"
      onClick={() => setStep((s) => s - 1)}
    />
  );
}

export default PreviousButton;
