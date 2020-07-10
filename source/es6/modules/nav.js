// import Animation from "./Animation";
// import MediaQuery from "./MediaQuery";

const navMenu = () => {
  const navButton = document.querySelector(".nav__toggle");
  // const navList = document.querySelector(".nav__list");
  const nav = document.querySelector(".nav");
  // const mediaQuery = new MediaQuery("mobile");
  // const classes = navListDropdown.classList;
  // console.log(navListDropdown);
  // console.log(classes);
  //
  // if (!navButton || !navListDropdown) {
  //   return;
  // }
  //
  // const animatedEl = new Animation(navListDropdown, 200);
  //
  // function init(e) {
  //   if (e.matches) {
  //     animatedEl.animationInit();
  //   } else {
  //     document.querySelector(classes).removeAttribute("style");
  //     // for (let i = 0; i < classes.length; i += 1) {
  //     //   const classItem = document.querySelector(`.${classes[i]}`);
  //     //   if (
  //     //     classItem.classList.contains(".nav__list--inner-mobile") &&
  //     //     classItem.hasAttribute("style")
  //     //   ) {
  //     //     classItem.removeAttribute("style");
  //     //   }
  //     //   console.log(classItem);
  //     // }
  //     // navList.removeAttribute("style");
  //   }
  // }
  //
  // mediaQuery.mql.addListener(init);
  // init(mediaQuery.mql);

  navButton.addEventListener("click", e => {
    if (e.target) {
      e.preventDefault();
    }
    if (nav.classList.contains("nav--active")) {
      nav.classList.remove("nav--active");
      // navButton.classList.add("nav__toggle--opened");
      // animatedEl.show();
    } else {
      nav.classList.add("nav--active");
      // navButton.classList.remove("nav__toggle--opened");
      // animatedEl.hide();
    }
  });
};

export default navMenu;
