import $ from 'jquery';
import MenuEntryComponent from './menuentry';

const MenuComponent = function ($selector, entries) {

  // Store entries inside component
  this.entries = entries;

  // Store jQuery object inside the component
  this.$el = $selector;

  // Update the component view
  this.render();
}

MenuComponent.prototype = {

  render() {

    // Create UL DOM node
    let $ul = $('<ul />');

    // Add each menu entry to UL node
    for (let entry in this.entries) {
      // Use new component for menu entry
      let $menuEntry = new MenuEntryComponent(entry, this.entries[entry]);
      $ul.append( $menuEntry.$el );
    }

    // insert UL node into the DOM
    this.$el.append($ul);
  }

};

export default MenuComponent;
