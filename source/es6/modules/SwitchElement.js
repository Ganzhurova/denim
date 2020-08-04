class SwitchElement {
  constructor() {
    this.bodyClickHandler = this.bodyClickHandler.bind(this);
  }

  init(params) {
    this.trigger = document.querySelector(params.triggerSelector);
    this.elementSelector = params.elementSelector;
    this.element = document.querySelector(params.elementSelector);
    this.classActive = params.classActive || false;
    this.closeButton =
      this.element.querySelector(params.closeButtonSelector) || false;
    this.isListenerOnBody = params.isListenerOnBody || false;
    this.manage();
  }

  closeElement() {
    this.element.classList.remove(this.classActive);
    if (this.isListenerOnBody) {
      document.body.removeEventListener("click", this.bodyClickHandler);
    }
  }

  showElement() {
    this.element.classList.add(this.classActive);
    if (this.isListenerOnBody) {
      document.body.addEventListener("click", this.bodyClickHandler);
    }
  }

  toggleElement() {
    if (!this.element.classList.contains(this.classActive)) {
      this.showElement();
    } else {
      this.closeElement();
    }
  }

  bodyClickHandler(e) {
    if (e.target === this.trigger) {
      return;
    }
    if (!e.target.closest(this.elementSelector)) {
      this.closeElement();
    }
  }

  manage() {
    this.trigger.addEventListener("click", e => {
      if (e.target) {
        e.preventDefault();
      }
      this.toggleElement();
    });

    if (this.closeButton) {
      this.closeButton.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }

        this.closeElement();
      });
    }
  }

  addListenerByEnter() {
    const enterKeyCode = 13;
    this.trigger.addEventListener("keydown", e => {
      if (e.keyCode === enterKeyCode) {
        this.toggleElement();
      }
    });
  }
}

export default SwitchElement;
