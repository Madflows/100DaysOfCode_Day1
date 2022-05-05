import "./styles.css";

var myForm = document.querySelector("#form");
const sent = document.querySelector(".input-sentence");
const unwanted = document.querySelector(".filter");
const output = document.querySelector(".output");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  highlight();
});

function highlight() {
  var text = unwanted.value.toLowerCase();

  var innerHTML = sent.value
    .toLowerCase()
    .replaceAll(/\<span class\=\"highlight\"\>(.*?)\<\/span\>/gi, "$1")
    .replaceAll(text, "<mark>" + text + "</mark>");
  output.innerHTML = innerHTML;
}

sent.addEventListener("input", () => {
  output.innerHTML = sent.value;
});
