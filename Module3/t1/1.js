'use strict';

const target = document.getElementById(`target`);

target.classList.add("my-list");

let html =
    `<li>First item</li>;
    <li>Second item</li>;
    <li>Third item</li>`;


target.innerHTML = html;


