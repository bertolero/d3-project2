import db from "./data/firebase-utils";

const btns = document.querySelectorAll("button");
const forms = document.querySelector("form");
const formAct = document.querySelector("form span");
const input = document.querySelector("input");
const error = document.querySelector(".error");

let activity = "cycling";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // get activity
    activity = e.target.dataset.activity;

    // remove and active class
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    input.setAttribute("id", activity);

    formAct.textContent = activity;
  });
});

//form submit
forms.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const distance = parseInt(input.value);
  if (distance) {
    db.collection("activities")
      .add({
        distance: distance,
        activity: activity,
        date: new Date().toString(),
      })
      .then(() => {
        error.textContent = "";
        input.value = "";
      });
  } else {
    error.textContent = "Please enter a valid distance";
  }
});
