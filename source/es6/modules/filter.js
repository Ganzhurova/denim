import SwitchElement from "./SwitchElement";

const filter = () => {
  // filter initialization
  const params = {
    triggerSelector: ".catalog__filter-button",
    elementSelector: ".filter__form",
    classActive: "filter__form--active",
    closeButtonSelector: ".filter__button--close",
    isListenerOnBody: true
  };

  if (!document.querySelector(params.triggerSelector)) {
    return;
  }

  const filterInteractive = new SwitchElement();
  filterInteractive.init(params);

  // initialization of filter fields
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
  }
};

export default filter;
