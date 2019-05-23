class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelectorAll(".hamburger");
    console.log(this.button);
    this.content = this.element.querySelector(".navtab-content");
    console.log(this.content);
    this.button.addEventListener("click", () => this.toggleNav());
  }
  toggleNav() {
    this.content.classList.toggle("navtab-hidden");
  }
}

const ham = document
  .querySelectorAll(".navtab")
  .forEach(dropdown => new Dropdown(dropdown));

// function hamburger() {
//   let burger = document.getElementsByClassName("navtab");
//   if (burger.style.display === "block") {
//     burger.style.display = "none";
//   } else {
//     burger.style.display = "block";
//   }
// }
