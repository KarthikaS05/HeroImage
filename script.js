let header = document.querySelector("header");
console.log(header);
let home = document.querySelector("#home");

window.addEventListener("scroll", () => {
  /* since we ave given margin top= 30px for header ; do the following once the vertical scroll is over 30 px  */
  if (scrollY > 30) {
    header.style.marginTop = "0";
    header.style.background = "#fff";
  } else {
    header.style.marginTop = "30px";
    header.style.background = "none";
  }
});

let navItems = document.querySelectorAll(".navItem");
removeActiveClass = () => {
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
};

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    removeActiveClass();
    navItem.classList.add("active");
  });
});
