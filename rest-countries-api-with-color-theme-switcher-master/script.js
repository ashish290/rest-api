'use strict';

// ----- Selecting Element -----
const Btn_DarkMode = document.querySelector('.fa-sharp');
const Search_Bar = document.querySelector('.search-bar');
const Card = document.querySelector('.card');
const Card_Body = document.querySelector('.Card-Body');
const toggle = document.querySelectorAll('.mode');

// Dark-Mode
let flag = false;
Btn_DarkMode.addEventListener('click', function () {
  if (flag == false) {
    toggle.style.backgroundColor = "var(--element)";

    document.body.style.backgroundColor = 'var(--background)';
    document.body.style.color = 'var(--white)';
    flag = true;
  } else {
    toggle.style.backgroundColor = "var(--white)";
    document.body.style.backgroundColor = 'var(--whilte)';
    document.body.style.color = 'black';
    flag = false;
  }
});

// ----- Function -----
const renderCountry = function (data) {
  console.log(data);
  data.forEach(data => {
    const html = `
    <div class="card mode">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
    <h3 class = "country__name">${data.name.common}</h3>
      <p class="country__row">Population : <span class = "info"> ${data.population} </span>  </p>
      <p class="country__row">Region : <span class = "info"> ${data.region} </span> </p>
      <p class="country__row">Capital : <span class = "info"> ${data.capital} </span> </p>
    </div>
  </div>
    `;
    Card_Body.insertAdjacentHTML('beforeend', html);
  });
};

const country = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => renderCountry(data));
};
country();