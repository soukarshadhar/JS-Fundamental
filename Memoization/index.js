const numberInput = document.getElementById("numberInput");
const resultElement = document.getElementById("result");

// const fibonnaci = (index) => {
//   if (index === 0 || index === 1) return index;
//   return fibonnaci(index - 1) + fibonnaci(index - 2);
// };

const fibonnaciMemo = (index) => {
  const map = {};
  const fibonnaci = (index) => {
    if (map[index]) return map[index];
    if (index <= 1) return index;
    map[index] = fibonnaci(index - 1) + fibonnaci(index - 2);
    return map[index];
  };
  return fibonnaci(index);
};

const handleOnInputBlur = (ev) => {
  const value = ev.target.value;
  if (value.length === 0) return;
  const fibAtGivenIndex = fibonnaciMemo(Number(value));
  resultElement.textContent = fibAtGivenIndex;
};

numberInput.addEventListener("blur", handleOnInputBlur);
