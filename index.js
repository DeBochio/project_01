const btn = document.getElementById("btn");
const name = document.getElementById("name");
const email = document.getElementById("email");

btn.addEventListener("click", () => {
  if (email.value !== "" && name.value !== "")
    alert("Are you shure you want to submit");
  else return;
});
