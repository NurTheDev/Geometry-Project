getCalculateRhombus = () => {
  const [rhombusDiagonal1, rhombusDiagonal2] = getInput(
    "rhombusDiagonal1",
    "rhombusDiagonal2"
  );
  if (isNaN(rhombusDiagonal1) || isNaN(rhombusDiagonal2)) {
    alert("Please insert a valid number");
    return;
  } else {
    const total = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "";
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.appendChild(span);
    resultArea.appendChild(p);
    p.innerHTML = `1. rhombus: ${(span.innerText = total)} cm<sup>2</sup>`;
    p.style.fontSize = "20px";
    const button = document.createElement("button");
    resultArea.appendChild(button);
    button.innerHTML = "convert to m<sup>2</sup>";
    const buttonObj = {
      background: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      marginLeft: "10px",
    };
    for (let i in buttonObj) {
      button.style[i] = buttonObj[i];
    }
    button.addEventListener("mouseenter", () => {
      button.style.background = "#0056b3";
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.background = "#007bff";
      button.style.transform = "scale(1.00)";
    });
    button.addEventListener("click", () => {
      const meters = total / 10000;
      p.innerHTML = `1. rhombus: ${(span.innerText = meters)} m<sup>2</sup>`;
    });
  }
};
getInput = (data1, data2) => {
  const input1 = parseFloat(document.getElementById(data1).value);
  const input2 = parseFloat(document.getElementById(data2).value);
  return [input1, input2];
};
getRandomColor = () => {
  const color = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
  return color;
};
const rhombus = document.getElementById("rhombus");
rhombus.addEventListener("mouseenter", () => {
  rhombus.style.background = getRandomColor();
});
rhombus.addEventListener("mouseleave", () => {
  rhombus.style.background = "white";
});
