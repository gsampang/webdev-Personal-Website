//Navbar Implementation

let navbar = document.querySelector("#navbar");

//Unorder List
let ulElem = document.createElement("ul");
ulElem.className = "flex-container";
navbar.append(ulElem);

//List Element 1
let liElem1 = document.createElement("li");
ulElem.appendChild(liElem1);

let aElem1 = document.createElement("a");
aElem1.classList = "flex-item item1";
aElem1.href = "about.html";
aElem1.textContent = "About";
liElem1.appendChild(aElem1);

//List Element 2
let liElem2 = document.createElement("li");
ulElem.appendChild(liElem2);

let aElem2 = document.createElement("a");
aElem2.classList = "flex-item item1";
aElem2.href = "previous-work.html";
aElem2.textContent = "Previous Work";
liElem2.appendChild(aElem2);

//List Element 3
let liElem3 = document.createElement("li");
ulElem.appendChild(liElem3);

let aElem3 = document.createElement("a");
aElem3.classList = "flex-item item1";
aElem3.href = "projects.html";
aElem3.textContent = "Projects";
liElem3.appendChild(aElem3);

//List Element 4
let liElem4 = document.createElement("li");
ulElem.appendChild(liElem4);

let aElem4 = document.createElement("a");
aElem4.classList = "flex-item item1";
aElem4.href = "contact.html";
aElem4.textContent = "Contact";
liElem4.appendChild(aElem4);
