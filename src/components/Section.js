export default class Section {
  constructor({ renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItemAppend(item) {
    this._container.append(item);
  }

  addItemPrepend(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
}
