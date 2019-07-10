/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

function menuComponent(inputArr){
  const menudiv = document.createElement('div');
  const menulist = document.createElement('ul');
  const menuCount = [];

  //structure component
  menudiv.appendChild(menulist)
  
  //set class
  menudiv.classList.add('menu')

  //Pass the function an array as it's only argument.
  //inputArr


  //Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  //Add those items to the <ul>
  
  inputArr.forEach(function (item, i)  {
    console.log(item)

    menuCount[i] = document.createElement('li');
    menuCount[i].textContent = item;
    menulist.appendChild(menuCount[i]);

  });

  

  //Step 3: Using a DOM selector, select the menu button currently on the DOM.

  const dropdown = document.querySelector('.menu-button')

    
  //Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  dropdown.addEventListener('click', event =>{
    console.log('clicked menu')
    menudiv.classList.toggle('menu--open')
  })

  //Step 5: return the menu component.

  return menudiv;
}

//Step 6: add the menu component to the DOM.
const headselect = document.querySelector('.header');
headselect.appendChild(menuComponent(menuItems));

