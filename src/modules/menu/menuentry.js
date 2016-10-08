const MenuEntryComponent = function (title, url) {

  this.title = title;
  this.url = url;

  // Create jQuery object
  this.$el = $('<li />');

  // Update the component view
  this.render();
}

MenuEntryComponent.prototype = {

  render() {

    // Create A element
    let $a = $('<a />');

    // Update DOM element with entry stored data
    $a.text(this.title).attr('href', this.url);

    // Append to entry
    this.$el
          .append($a);

  }

};

export default MenuEntryComponent;
