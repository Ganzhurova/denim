import keyCode from "./keyCode";

class SwitchElement {
  constructor() {
    this.bodyClickHandler = this.bodyClickHandler.bind(this);
    this.bodyPressEnterHandler = this.bodyPressEnterHandler.bind(this);
    this.escPressHandler = this.escPressHandler.bind(this);
  }

  init(params) {
    this.trigger = document.querySelector(params.triggerSelector);
    this.elementSelector = params.elementSelector;
    this.element = document.querySelector(params.elementSelector);
    this.classActive = params.classActive || false;
    if (params.closeButtonSelector) {
      this.closeButton = this.element.querySelector(params.closeButtonSelector);
    } else {
      this.closeButton = false;
    }
    this.isListenerOnBody = params.isListenerOnBody || false;
    this.elementDisplay = params.display || false;
    this.isClosedByEsc = params.isClosedByEsc || false;
    this.manage();
  }

  closeElement() {
    if (this.classActive) {
      this.element.classList.remove(this.classActive);
    }

    if (this.elementDisplay) {
      this.element.removeAttribute("style");
    }

    if (this.isListenerOnBody) {
      document.body.removeEventListener("click", this.bodyClickHandler);
      document.body.removeEventListener("keydown", this.bodyPressEnterHandler);
    }

    if (this.isClosedByEsc) {
      document.removeEventListener("keydown", this.escPressHandler);
    }
  }

  showElement() {
    if (this.classActive) {
      this.element.classList.add(this.classActive);
    }

    if (this.elementDisplay) {
      this.element.style.display = this.elementDisplay;
    }

    if (this.isListenerOnBody) {
      document.body.addEventListener("click", this.bodyClickHandler);
      document.body.addEventListener("keydown", this.bodyPressEnterHandler);
    }

    if (this.isClosedByEsc) {
      document.addEventListener("keydown", this.escPressHandler);
    }
  }

  selectToggle() {
    let condition;

    if (this.classActive) {
      condition = !this.element.classList.contains(this.classActive);
    } else if (this.elementDisplay) {
      condition = !this.element.hasAttribute("style");
    }

    return condition;
  }

  toggleElement() {
    if (this.selectToggle()) {
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

  bodyPressEnterHandler(e) {
    if (e.keyCode === keyCode.enter) {
      this.bodyClickHandler(e);
    }
  }

  escPressHandler(e) {
    if (e.keyCode === keyCode.esc) {
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
    this.trigger.addEventListener("keydown", e => {
      if (e.keyCode === keyCode.enter) {
        if (e.target) {
          e.preventDefault();
        }
        this.toggleElement();
      }
    });
  }
}

export default SwitchElement;
