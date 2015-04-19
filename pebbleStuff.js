/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Accel = require('ui/accel');
var Vector2 = require('vector2');
var ajax= require('ajax');

Accel.config(100, 25, false);

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});
Accel.init();
main.show();



Accel.on('tap', function(e) {
 console.log('floppy tits');
  console.log('Tap event on axis: ' + e.axis + ' and direction: ' + e.direction);
  if (e.axis == 'y' && e.direction == -1) {
     ajax({
    url: 'http://3078636f.ngrok.io/facebook',
    method: 'get'
  });
  }
else if (e.axis == 'x' && e.direction == -1) {
  console.log('ITS FUCKING LOGGING');
     ajax({
      
    url: 'http://3078636f.ngrok.io/twitter',
    method: 'get'
  });
  }
 
});



main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
