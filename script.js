const createButton = () => {
  const button = document.createElement("button");
  button.id = "super-button";
  button.innerText = "Kliknij mnie";
  document.body.appendChild(button);
  return button;
};
const getButton = document.getElementByID("super-button");
const openAlert = () => {
  alert("super");
};
getButton.addEventListener("click", openAlert());
