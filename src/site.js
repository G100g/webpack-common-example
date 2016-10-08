// Vendor Modules
import $ from 'jquery';

import MenuComponent from './modules/menu';
import menudata from './modules/menudata';

$(function () {

  // Render menu entries
  let menu = new MenuComponent(
                    $('#mainMenu'), // DOM element
                    menudata.getEntries() // Main menu's entries
                  );

});
