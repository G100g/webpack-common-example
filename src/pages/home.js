import MenuComponent from '../modules/menu';
import menudata from '../modules/menudata';

$(function () {

  // Render footer menu entries
  let footerMenu = new MenuComponent(
                    $('#footerMenu'), // DOM element
                    menudata.getEntries() // Main menu's entries
                  );
});
