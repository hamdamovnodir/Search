let input = document.querySelector(".input input");
let input2 = document.querySelector("input");
let main_sec = document.querySelector(".main_sec");
let body = document.querySelector("body");
let list = document.querySelectorAll(".nav_link ");
let list2 = document.querySelectorAll(".nav_list ");
let link = document.querySelectorAll(".nav_link a");
let listImg = document.querySelectorAll(".nav_list img ");
let type = document.querySelector(".type2 h5");

input.addEventListener("input", () => {
  let filter = lotinga(input.value.toLocaleLowerCase());
  for (let i = 0; i < link.length; i++) {
    let city = lotinga(link[i].innerHTML.toLocaleLowerCase());
    if (city.indexOf(filter) == -1) {
      list2[i].classList.add("show2");
      type.classList.remove('type3')
    } else {
      list2[i].classList.remove("show2");
       type.classList.add('type3')
     
    }
    link[i].addEventListener("click", () => {
      input.value = "";
    });
  }
});
input.addEventListener("input", () => {
  main_sec.classList.add("show");
  if (input.value == "") {
    main_sec.classList.remove("show");
  }
});

body.addEventListener("dblclick", () => {
  main_sec.classList.remove("show");
});

var typed = new Typed(".text", {
  strings: ["Welcome", "movie", "and", "series"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const sr = ScrollReveal({
  distance: "95px",
  duration: 2500,
  delay: 450,
  reset: true,
});

sr.reveal(".type", { delay: 500, origin: "top" });
sr.reveal(".input", { delay: 500, origin: "bottom" });
