const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  let num1 = document.getElementById("num1");

  let num2 = document.getElementById("num2");

  let result = document.getElementById("result");

  let opera = document.getElementById("operator");

  if (opera.value === "plus") {
    result.innerHTML = +num1.value + +num2.value;
  } else if (opera.value === "minus") {
    result.innerHTML = +num1.value - num2.value;
  } else if (opera.value === "divide") {
    result.innerHTML = +num1.value / +num2.value;
  } else if (opera.value === "multi") {
    result.innerHTML = +num1.value * +num2.value;
  }
});

const pos = document.getElementById("pos");
pos.classList.add(
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "w-[200px]",
  "h-[100px]"
);

const paras = document.createElement("p");

paras.style.width = "200px";
paras.style.backgroundColor = "green";
paras.style.padding = "10px";
paras.style.textAlign = "center";
paras.style.textTransform = "capitalize";
paras.style.borderRadius = "10px";
paras.style.fontWeight = "bold";
paras.classList.add("hidden", "text-red-900");

pos.appendChild(paras);

const btn = document.createElement("button");
btn.innerHTML = "change";
btn.classList.add("cursor-pointer", "hover:text-black");

pos.appendChild(paras);

pos.appendChild(btn);
btn.style.margin = "10px";
btn.style.width = "200px";
btn.style.backgroundColor = "green";
btn.style.padding = "10px";
btn.style.textAlign = "center";
btn.style.textTransform = "capitalize";
btn.style.borderRadius = "10px";
btn.style.fontWeight = "bold";

btn.addEventListener("click", () => {
  paras.innerHTML = "changing like magic";
  btn.innerHTML = "vibing.........";
  btn.classList.add(
    "focus:border-green-900",
    "focus:border-2",
    "focus:text-green-900"
  );
  paras.classList.toggle("hidden");
});

const area = document.getElementById("area");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");

area.classList.add("border", "rounded-md", "w-70", "h-30");
progress.classList.add("bg-red-500");

area.addEventListener("input", (e) => {
  progress.value = e.target.value.length;
  percent.innerHTML = progress.value + "%";
});
