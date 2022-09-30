const kebabize = (str) => {
  return str
    ?.split(" ")
    ?.map((letter, idx) => {
      return letter.toLowerCase();
    })
    ?.join("-");
};

export default kebabize;
