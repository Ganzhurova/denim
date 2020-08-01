import SwitchElement from "./SwitchElement";

const navMenu = () => {
  const params = {
    triggerSelector: ".nav__toggle",
    elementSelector: ".nav",
    classActive: "nav--active",
    isListenerOnBody: true
  };

  if (!document.querySelector(params.triggerSelector)) {
    return;
  }

  const navInteractive = new SwitchElement();
  navInteractive.init(params);
};

export default navMenu;
