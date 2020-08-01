import polyfill from "./modules/polyfill";
import navMenu from "./modules/navMenu";
import filter from "./modules/filter";

window.addEventListener("DOMContentLoaded", () => {
  polyfill();
  navMenu();
  filter();
});
