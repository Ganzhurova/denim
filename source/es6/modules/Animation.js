class Animation {
  constructor(element, time) {
    this.element = element;
    this.time = time;
    this.property = {};
    this.propertyDefault = {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      visibility: "hidden",
      overflow: "hidden"
    };
    this.boundListener = this.onTransitionEnd.bind(this);
  }

  getStyle() {
    const style = getComputedStyle(this.element);

    const property = {
      height: `${this.element.clientHeight}px`,
      paddingTop: style.paddingTop,
      paddingBottom: style.paddingBottom,
      visibility: "visible",
      overflow: "visible",
      transition: `all ${this.time}ms`
    };

    this.property = property;
  }

  onTransitionEnd() {
    this.element.style.overflow = this.property.overflow;
  }

  hide() {
    this.element.removeEventListener(
      "transitionend",
      this.boundListener,
      false
    );
    this.element.style.height = this.propertyDefault.height;
    this.element.style.paddingTop = this.propertyDefault.paddingTop;
    this.element.style.paddingBottom = this.propertyDefault.paddingBottom;
    this.element.style.visibility = this.propertyDefault.visibility;
    this.element.style.overflow = this.propertyDefault.overflow;
  }

  show() {
    this.element.style.height = this.property.height;
    this.element.style.paddingTop = this.property.paddingTop;
    this.element.style.paddingBottom = this.property.paddingBottom;
    this.element.style.visibility = this.property.visibility;
    this.element.style.transition = this.property.transition;
    this.element.addEventListener("transitionend", this.boundListener, false);
  }

  animationInit() {
    this.getStyle();
    this.hide();
  }

  // resetStyle(e) {
  //   if (!e.matches) {
  //     this.element.style = null;
  //   }
  // }
}

export default Animation;
