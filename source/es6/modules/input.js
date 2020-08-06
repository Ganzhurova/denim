import keyCode from "./keyCode";

const input = {
  checkedRadioByEnter(parentSelector, labelClassName) {
    const parent = document.querySelector(parentSelector);

    parent.addEventListener("keydown", e => {
      if (
        e.keyCode === keyCode.enter &&
        e.target.className === labelClassName
      ) {
        const labelAttrFor = e.target.getAttribute("for");
        parent.querySelector(`#${labelAttrFor}`).checked = true;
      }
    });
  }
};

export default input;
