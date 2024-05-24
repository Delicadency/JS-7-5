/* Stwórz funkcję createButton tworzącą element <button> o identyfikatorze (id) "super-button", dowolnej nazwie (tekście) w środku i dodaj go do elementu <body>. Funkcja powinna również zwracać (return) tego buttona. Następnie stwórz funkcję openAlert, która będzie uruchamiała wbudowaną funkcję window.alert z tekstem "super". Funkcja openAlert powinna zostać wywołana w momencie kliknięcia na utworzony przycisk "super-button". */

const createButton = () => {
  const btn = document.createElement("button");
  btn.id = "super-button";
  btn.innerText = "Kliknij mnie";
  document.body.appendChild(btn);
  return btn;
};
const getButton = document.getElementByID("super-button");
const openAlert = () => {
 alert(super);
}
getButton.addEventListener("click", openAlert ());

