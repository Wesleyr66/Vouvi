const convertFloat = (value) => {
  return String(value.toFixed(2)).replace(".", ",");
};

export default convertFloat;
