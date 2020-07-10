class MediaQuery {
  constructor(size) {
    this.size = size;
    this.mql = "";
    this.getSize();
  }

  getSize() {
    if (this.size === "mobile") {
      this.mql = window.matchMedia("(max-width: 767px)");
    }
  }
}

export default MediaQuery;
