function Till() {
  this._currentOrder = []
  var menu = new Menu
  this._items = menu._items
}

Till.prototype = {

  addItem: function(item) {
    itemObj = {name: item, price: this._items[item]}
    this._currentOrder.push(itemObj)
  }
};
