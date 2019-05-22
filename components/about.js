//aboutpage.js
// ################################################################
class AboutFeatureLink {
  constructor(link) {
    this.link = link;
    // console.log(this.link);

    this.data = this.link.dataset.tab;
    // console.log(this.data);
    // this.featureElement = document.querySelector(
    //   `.feature-content[data-tab='${this.data}']`
    // );
    if (this.data === "all") {
      this.blurbs = document.querySelectorAll(".about-bottom-blurb");
    } else {
      this.blurbs = document.querySelectorAll(
        `.about-bottom-blurb[data-tab=${this.data}]`
      );
    }

    this.blurbs = Array.from(this.blurbs).map(
      blurb => new AboutFeatureItem(blurb)
    );
    this.link.addEventListener("click", () => this.selectFeature());
  }

  selectFeature() {
    const links = document.querySelectorAll(".feature-about");
    links.forEach(link => link.classList.remove("active-about"));
    const aboutBlurbs = document.querySelectorAll(".about-bottom-blurb");
    console.log(aboutBlurbs);
    aboutBlurbs.forEach(blurb => (blurb.style.display = "none"));
    this.link.classList.add("active-about-blurb");
    this.aboutBlurbs.forEach(blurb => blurb.selectBlurb());
    // this.link.classList.add("active");
    // this.featureItem.select();
  }
}
// ################################################################

class AboutFeatureItem {
  constructor(element) {
    this.element = element;
  }

  selectBlurb() {
    this.element.style.display = "flex";
    // const items = document.querySelectorAll(".feature-content");
    // items.forEach(link => link.classList.remove("active-item"));
  }
}

// ################################################################
const links = document.querySelectorAll(".feature-about");
// console.log(links);

links.forEach(link => {
  new AboutFeatureLink(link);
});
