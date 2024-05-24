/* Stwórz funkcję createButton tworzącą element <button> o identyfikatorze (id) "super-button", dowolnej nazwie (tekście) w środku i dodaj go do elementu <body>. Funkcja powinna również zwracać (return) tego buttona. Następnie stwórz funkcję openAlert, która będzie uruchamiała wbudowaną funkcję window.alert z tekstem "super". Funkcja openAlert powinna zostać wywołana w momencie kliknięcia na utworzony przycisk "super-button". */

const createButton = () => {
  const button = document.createElement("button");
  button.id = "super-button";
  button.innerText = "Kliknij mnie";
  document.body.appendChild(button);
  return button;
};
const getButton = document.getElementByID("super-button");
const openAlert = () => {
 alert(super);
}
getButton.addEventListener("click", openAlert ());

