function Debounce(func, wait = 0) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

const input = document.querySelector("input");
const display = document.querySelector("#display");

const handleOnKeyUp = (ev) => {
  display.textContent = ev.target.value;
};

const debouncedHandler = Debounce(handleOnKeyUp, 500);
input.addEventListener("keyup", debouncedHandler);
