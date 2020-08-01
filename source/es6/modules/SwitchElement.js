class SwitchElement {
  constructor() {
    this.bodyClickHandler = this.bodyClickHandler.bind(this);
  }

  init(params) {
    this.trigger = document.querySelector(params.triggerSelector);
    this.elementSelector = params.elementSelector;
    this.element = document.querySelector(params.elementSelector);
    this.classActive = params.classActive;
    this.closeButton = document.querySelector(params.closeButtonSelector);
    this.isListenerOnBody = params.isListenerOnBody;
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

      if (!this.element.classList.contains(this.classActive)) {
        this.showElement();
      } else {
        this.closeElement();
      }
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

  // addClosureOnBody() {
  //   document.body.addEventListener("click", e => {
  //     this.bodyClickHandler(e);
  //   });
  // }
}

export default SwitchElement;
