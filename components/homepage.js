//homepage.js
// ################################################################
class FeatureLink {
  constructor(link) {
    this.link = link;
    console.log("line 6" + this.link);

    this.data = this.link.dataset.tab;

    this.featureElement = document.querySelector(
      `.feature-content[data-tab='${this.data}']`
    );
    this.featureItem = new FeatureItem(this.featureElement);
    this.link.addEventListener("click", () => this.select());
  }

  select() {
    const links = document.querySelectorAll(".feature");
    links.forEach(link => link.classList.remove("active"));
    this.link.classList.add("active");
    this.featureItem.select();
  }
}
// ################################################################

class FeatureItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".feature-content");
    items.forEach(link => link.classList.remove("active-item"));
    this.element.classList.add("active-item");
  }
}

// ################################################################
const links = document.querySelectorAll(".feature");
console.log("line 40" + links);

links.forEach(link => {
  new FeatureLink(link);
});
