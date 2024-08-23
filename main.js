function appear() {
  let content = document.getElementById("content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function Theme() {
  let img = document.getElementById("img");
  if (
    img.src.includes(
      "https://img.icons8.com/?size=100&id=45475&format=png&color=000000"
    )
  ) {
    img.src =
      "https://img.icons8.com/?size=100&id=SyBDr18WdUcD&format=png&color=000000";
  } else {
    img.src =
      "https://img.icons8.com/?size=100&id=45475&format=png&color=000000";
  }
  let body = document.body;
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "#92b2ce";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
}
let demo1 = document.getElementById("demo1");

demo1.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
