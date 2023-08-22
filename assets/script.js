const solution = document.querySelector(".solution");
const pseudoEl = window.getComputedStyle(solution, "::after");
const imgdiv = document.querySelector(".boro-div");
console.log(pseudoEl.visibility);
console.log(solution);

const what = function () {
  document.querySelector(".eye-icon").classList.toggle("hidden");
  solution.classList.toggle("after-it");
};

// imgdiv.addEventListener("mousedown", what);
imgdiv.addEventListener("click", what);
