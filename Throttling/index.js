function Throttle(func, delay = 0) {
  let timer;
  let canInvoke = true;
  return function (...args) {
    if (canInvoke) {
      if (timer) clearTimeout(timer);
      func(...args);
      canInvoke = false;
      timer = setTimeout(() => {
        canInvoke = true;
      }, delay);
    }
  };
}

const root = document.querySelector("#root");
const point = document.querySelector("#point");

const handleOnMouseMove = (ev) => {
  point.style.top = `${ev.clientY - 16}px`;
  point.style.left = `${ev.clientX - 16}px`;
};

const throttledMouseMove = Throttle(handleOnMouseMove, 300);

root.addEventListener("mousemove", throttledMouseMove);
