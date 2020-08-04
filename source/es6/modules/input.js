const input = {
  checkedRadioByEnter(parentSelector, labelClassName) {
    const enterKeyCode = 13;
    const parent = document.querySelector(parentSelector);

    parent.addEventListener("keydown", e => {
      if (e.keyCode === enterKeyCode && e.target.className === labelClassName) {
        const labelAttrFor = e.target.getAttribute("for");
        parent.querySelector(`#${labelAttrFor}`).checked = true;
      }
    });
  }
};

export default input;
