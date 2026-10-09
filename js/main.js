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
  //listen for clicks on ANY card inside section
  const section = document.querySelector('.cards');
  section.addEventListener('click', selectCard);
}
function one() {
  log('function one in da house!');
  //add a new paragraph inside <main>
  const main = document.querySelector('main');
  const p = document.createElement('p');
  p.title = 'Mouse over text';
  const txt = document.createTextNode('Lorem to the Ipsum');
  p.append(txt);
  p.textContent = 'the new text in the paragraph';
  p.className = 'red'; // <p class="red" title="">
  p.classList.add('blue'); // <p class="red blue" title="">
  p.className = 'orange purple'; // <p class="orange purple" title="">
  main.append(p);
  //also add an anchor inside <nav>
  const nav = document.querySelector('nav');
  const a = `<a href="${media.basePosterURL}" 
                target="_blank" 
                class="button">
              Picsum Website
            </a>`;
  // nav.innerHTML += a;
  if (nav.querySelector('a')) return;
  //don't add a new anchor if one already exists
  const anchor = document.createElement('a');
  anchor.href = media.basePosterURL;
  anchor.target = '_blank';
  anchor.classList.add('button');
  anchor.style.textDecorationLine = 'none';
  anchor.textContent = 'Picsum Website';
  nav.append(anchor);

  // const df = document.createDocumentFragment();
  // log(df);
  // log(a);
  // log(nav);
  // df.innerHTML = a; //convert the string to HTML
  // nav.append(df); //dump the document fragment into the <nav>
}
function two() {
  log('who does number two work for?');
  //remove the FIRST card
  const cardfirst = document.querySelector('.cards .card');
  cardfirst.remove();

  //remove the LAST card
  const cardlast = document.querySelector('.cards .card:last-of-type');
  // cardlast ? cardlast.remove() : null;
  cardlast?.remove(); //same as line above
}
function three() {
  log('red fish blue fish');
  //Add a bunch of movie cards...
  const movies = media.movies; //array of movie objects
  const url = media.basePosterURL;
  // <section class="cards"></section>
  document.querySelector('.cards').innerHTML = movies
    .map((movie) => {
      return `<div class="card" data-id="${movie.id}">
          <img src="${url + movie.poster}" class="card__image" alt="${movie.title}" />
          <h3 class="card__title">${movie.title}</h3>
          <p class="card__content">
            ${movie.director}
          </p>
          <p class="card__content">${movie.released}</p>
        </div>`;
    })
    .join(' ');
}

function loaded() {
  log('loaded');
}

function selectCard(ev) {
  //the user clicked somewhere inside of <section cards>
  // log('clicked somewhere in cards');
  // log(ev.target); //the html element that the user clicked
  // log(ev.target.closest('.card')); // null means not inside a card
  const card = ev.target.closest('.card');
  if (card && card.hasAttribute('data-id')) {
    //if truthy we were inside a card with an id
    log(card.getAttribute('data-id'));
    card.classList.toggle('card--selected');

    if (card.hasAttribute('data-selected')) {
      //remove it
      card.removeAttribute('data-selected');
    } else {
      //add it
      card.setAttribute('data-selected', 'yes');
    }
  }
}
