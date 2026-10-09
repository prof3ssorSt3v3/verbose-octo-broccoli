import { media } from './data.js';

const log = console.log;

document.addEventListener('DOMContentLoaded', init);
//browser has finished reading the HTML
window.addEventListener('load', loaded);
//html and all the other files are loaded
// window.document;
// window.location;
// window.navigator;
// window.localStorage;

function init() {
  log('init');
  //I know that the HTML is read
  const btn1 = document.querySelector('#btnOne');
  const btn2 = document.querySelectorAll('nav > .button')[1];
  const btn3 = document.getElementById('btnThree');
  const navBtn = document.querySelector('nav').firstElementChild;
  //navBtn is the same as btn1
  btn1.addEventListener('click', one);
  btn2.addEventListener('click', two);
  btn3.addEventListener('click', three);
}
function one() {
  log('function one in da house!');
}
function two() {
  log('who does number two work for?');
}
function three() {
  log('red fish blue fish');
}

function loaded() {
  log('loaded');
}
