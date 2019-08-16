// Declare variables
const form = document.querySelector('form');
const input = document.querySelector('#item');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');

// Conditional statement to retain data on front end
let itemArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Store and get item in local storage
localStorage.setItem('items', JSON.stringify(itemArr));
const storageData = JSON.parse(localStorage.getItem('items'));

// Create li-making function 
const liCreate = text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

const submitItem = evt => {
  // Prevent default submission to server
  evt.preventDefault();

  // Push input value to array
  itemArr.push(input.value);

  // Add array to local storage
  localStorage.setItem('items', JSON.stringify(itemArr));

  // Loop through existing in local storage
  storageData.forEach(item => {
    liCreate(item);
  });

  // Invoke liCreate function
  liCreate(input.value);

  // Set input to empty string
  input.value = '';
}

// Add event listener to submit
form.addEventListener('submit', submitItem);

// Add click event listener to clear existing storage data
btn.addEventListener('click', function(evt) {
  localStorage.clear();

  if(evt.target && confirm('Are you sure?')){
    // UL first child
    let ulChild = ul.lastChild;
    while (ulChild) {
      ul.removeChild(ulChild);
    }
  }
})