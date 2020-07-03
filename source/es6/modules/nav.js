const navMenu = () => {
  const navButton = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");

  const elem = document.querySelector(".nav__list--inner");
  const elemStyle = getComputedStyle(elem);

  const elHeight = `${elem.clientHeight}px`;
  const elPaddingTop = elemStyle.paddingTop;
  const elPaddingBottom = elemStyle.paddingBottom;
  const elVisibility = "visible";
  const elOverflow = "visible";

  console.log(elHeight);
  console.log(elPaddingTop);
  console.log(elPaddingBottom);

  const elHeightDefault = 0;
  const elPaddingTopDefault = 0;
  const elPaddingBottomDefault = 0;
  const elVisibilityDefault = "hidden";
  const elOverflowDefault = "hidden";

  elem.style.height = elHeightDefault;
  elem.style.paddingTop = elPaddingTopDefault;
  elem.style.paddingBottom = elPaddingBottomDefault;
  elem.style.visibility = elVisibilityDefault;
  elem.style.overflow = elOverflowDefault;

  function onTransitionEnd() {
    elem.style.overflow = elOverflow;
  }

  console.log(elHeight);
  console.log(elPaddingTop);
  console.log(elPaddingBottom);

  navButton.addEventListener("click", () => {
    if (nav.classList.contains("nav--closed")) {
      nav.classList.remove("nav--closed");
      nav.classList.add("nav--opened");

      elem.style.height = elHeight;
      elem.style.paddingTop = elPaddingTop;
      elem.style.paddingBottom = elPaddingBottom;
      elem.style.visibility = elVisibility;
      elem.addEventListener("transitionend", onTransitionEnd, false);
    } else {
      nav.classList.add("nav--closed");
      nav.classList.remove("nav--opened");

      elem.removeEventListener("transitionend", onTransitionEnd, false);
      elem.style.height = elHeightDefault;
      elem.style.paddingTop = elPaddingTopDefault;
      elem.style.paddingBottom = elPaddingBottomDefault;
      elem.style.visibility = elVisibilityDefault;
      elem.style.overflow = elOverflowDefault;
    }
  });
};

export default navMenu;
