const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let li = document.createElement('li');
let deleteButton = document.createElement; Element('button');

li.textContent = input.value || "Alma 5";
deleteButton.textContent = "X";

deleteButton.setAttribute('aria-label', `Delete ${li.textContent}`);

li.appendChild(deleteButton);
list.appendChild(li);