// Vendor Modules
import redux from 'redux';
import $ from 'jquery';

// My Modules
import food from './modules/food';

console.log($('body'));

console.log(food);

food.fruits.push('cucumber')

setTimeout(function () {
  console.log(food);
})
