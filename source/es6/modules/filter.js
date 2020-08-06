import SwitchElement from "./SwitchElement";
import input from "./input";

const filter = () => {
  if (!document.querySelector(".catalog__filter-button")) {
    return;
  }

  function initFilter() {
    const params = {
      triggerSelector: ".catalog__filter-button",
      elementSelector: ".filter__form",
      classActive: "filter__form--active",
      closeButtonSelector: ".filter__button--close",
      isListenerOnBody: true,
      isClosedByEsc: true
    };

    const filterInteractive = new SwitchElement();
    filterInteractive.init(params);
  }

  function initFilterFields() {
    const itemParams = {
      classActive: "filter__item--active"
    };

    const numberItems = document.querySelectorAll(".filter__item").length;

    for (let i = 0; i < numberItems; i += 1) {
      const num = i + 1;
      itemParams.elementSelector = `.filter__item:nth-child(${num})`;
      itemParams.triggerSelector = `.filter__item:nth-child(${num}) .filter__subject`;

      const itemInteractive = new SwitchElement();
      itemInteractive.init(itemParams);
      itemInteractive.addListenerByEnter();
    }
  }

  initFilter();
  initFilterFields();

  input.checkedRadioByEnter(".filter__colors", "filter__color-pic");
  input.checkedRadioByEnter(
    ".filter__collections",
    "filter__collection-category"
  );
};

export default filter;
