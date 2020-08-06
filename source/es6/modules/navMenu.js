import SwitchElement from "./SwitchElement";

const navMenu = () => {
  function initNav() {
    const params = {
      triggerSelector: ".nav__toggle",
      elementSelector: ".nav",
      classActive: "nav--active",
      isListenerOnBody: true,
      isClosedByEsc: true
    };

    if (!document.querySelector(params.triggerSelector)) {
      return;
    }

    const navInteractive = new SwitchElement();
    navInteractive.init(params);
  }

  function initNavItem() {
    const itemParams = {
      display: "block",
      isListenerOnBody: true
    };

    const numberItems = document.querySelectorAll(".nav__item").length;

    for (let i = 0; i < numberItems; i += 1) {
      const num = i + 1;
      itemParams.elementSelector = `.nav__item:nth-child(${num}) .nav__sub`;
      itemParams.triggerSelector = `.nav__item:nth-child(${num}) .nav__category`;

      if (document.querySelector(itemParams.elementSelector)) {
        const itemInteractive = new SwitchElement();
        itemInteractive.init(itemParams);
        itemInteractive.addListenerByEnter();
      }
    }
  }

  initNav();
  initNavItem();
};

export default navMenu;
