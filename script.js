// Assignment 1 | COMP1073 Client-Side JavaScript by Deepesh Talwar done on 11th June 2023

/* Variables */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.getElementById('textToSpeak');

var Nouns = document.getElementById('nouns');
var Places = document.getElementById('Places');
var Animals = document.getElementById('Animals');
var Adjectives = document.getElementById('Adjectives');
var Verbs = document.getElementById('Verbs');
var Reset = document.getElementById('Reset');

var nouns_Array = ['The Turkey', 'Mom', 'Dad', 'Dog', 'The Elephant', 'The Cat', 'The Teacher'];
var adjective_Array = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var verb_Array = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
var animal_Array = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places_Array = ['on the moon', 'on the chair', 'in my soup', 'in the grass', 'in my spaghetti', 'in my shoes'];

/* Functions */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

/* Event Listeners */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

Nouns.onclick = function() {
  var int = Math.floor(Math.random() * (nouns_Array.length - 1));
  var randomString = nouns_Array[int];
  textToSpeak = textToSpeak.concat(' ' + randomString);
  speakNow(textToSpeak);
};

Places.onclick = function() {
  var int = Math.floor(Math.random() * (places_Array.length - 1));
  var randomString = places_Array[int];
  textToSpeak = textToSpeak.concat(' ' + randomString);
  speakNow(textToSpeak);
};

Animals.onclick = function() {
  var int = Math.floor(Math.random() * (animal_Array.length - 1));
  var randomString = animal_Array[int];
  textToSpeak = textToSpeak.concat(' ' + randomString);
  speakNow(textToSpeak);
};

Adjectives.onclick = function() {
  var int = Math.floor(Math.random() * (adjective_Array.length - 1));
  var randomString = adjective_Array[int];
  textToSpeak = textToSpeak.concat(' ' + randomString);
  speakNow(textToSpeak);
};

Verbs.onclick = function() {
  var int = Math.floor(Math.random() * (verb_Array.length - 1));
  var randomString = verb_Array[int];
  textToSpeak = textToSpeak.concat(' ' + randomString);
  speakNow(textToSpeak);
};

speakButton.onclick = function() {
  speakNow(textToSpeak);
};
