import SwitchElement from "./SwitchElement";

const filter = () => {
  const filterForm = document.querySelector(".filter__form");
  console.log(filterForm);

  const params = {
    triggerSelector: ".catalog__filter-button",
    element: filterForm,
    // elementSelector: ".filter__form",
    classActive: "filter__form--active",
    closeButtonSelector: ".filter__button--close",
    isListenerOnBody: true
  };

  if (!document.querySelector(params.triggerSelector)) {
    return;
  }

  const filterInteractive = new SwitchElement();
  filterInteractive.init(params);

  const itemParams = {
    triggerSelector: ".filter__subject",
    elementSelector: ".filter__item",
    classActive: "filter__item--active"
  };

  const filterItems = document.querySelectorAll(itemParams.elementSelector);

  // filterItems.forEach(item => {
  //   item = new
  // });
  const item = new SwitchElement();
  item.init(itemParams);

  console.log(item);
};

export default filter;
