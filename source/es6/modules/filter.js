import SwitchElement from "./SwitchElement";

const filter = () => {
  const params = {
    triggerSelector: ".catalog__filter-button",
    elementSelector: ".filter__form",
    classActive: "filter__form--active",
    closeButtonSelector: ".filter__button--close",
    isListenerOnBody: true
  };
  console.log(params);

  if (!document.querySelector(params.triggerSelector)) {
    return;
  }

  const filterInteractive = new SwitchElement();
  filterInteractive.init(params);
  console.log(filterInteractive);
};

export default filter;
