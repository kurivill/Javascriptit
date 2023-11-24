'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target')

for (let i = 0; i < names.length; i++) {
  let listaitemi = document.createElement('li');
  listaitemi.textContent = names[i];
  target.appendChild(listaitemi);
}







