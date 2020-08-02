const input = {
  checkedRadioByEnter(parentSelector, labelClassName) {
    const enterKeyCode = 13;
    const parent = document.querySelector(parentSelector);
    const arrInput = parent.querySelectorAll("input[type = radio]");

    function removeChecked() {
      arrInput.forEach(inputEl => {
        inputEl.removeAttribute("checked");
      });
    }

    parent.addEventListener("keydown", e => {
      if (e.keyCode === enterKeyCode && e.target.className === labelClassName) {
        removeChecked();

        const labelAttrFor = e.target.getAttribute("for");
        const inputEl = parent.querySelector(`#${labelAttrFor}`);

        inputEl.setAttribute("checked", "checked");
      }
    });

    parent.addEventListener("change", e => {
      removeChecked();

      e.target.setAttribute("checked", "checked");
    });
  }
};

export default input;
