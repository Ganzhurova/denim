const bindModal = () => {
  const navButton = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".overlay");
  const pathException = "/index";

  function closeModal() {
    if (nav.classList.contains("nav--active")) {
      nav.classList.remove("nav--active");
      overlay.classList.remove("overlay--active");
    }
  }

  function toggleModal() {
    nav.classList.toggle("nav--active");
    overlay.classList.toggle("overlay--active");
  }

  if (window.location.pathname.indexOf(pathException) === -1) {
    navButton.addEventListener("click", e => {
      if (e.target) {
        e.preventDefault();
      }

      toggleModal();
    });

    overlay.addEventListener("click", () => {
      closeModal();
    });
  }
};

export default bindModal;
