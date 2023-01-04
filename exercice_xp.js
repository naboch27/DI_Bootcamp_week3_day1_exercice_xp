
/*************Exercice 1*********/

/****
 * 
 * Exercise 1 : Users
 * 
 * Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Change each first name of the two <ul>'s to your name.
Delete the <li> that contains the text node “Sarah”
 */


let retrieveDiv = document.getElementById("container")
console.log(retrieveDiv)
let changeName = document.querySelector("ul li:last-child")
changeName.setAttribute("li", "Richard")
console.log(changeName)

let changeNameAll = document.querySelectorAll(".list")
changeNameAll.forEach(elem => elem.firstElementChild.textContent = "Mouhamed")

let deleteSarah = document.querySelectorAll(".list")
deleteSarah[1].children[1].remove()

document.querySelectorAll("ul")[0].classList.add("student_list")
document.querySelectorAll("ul")[1].classList.add("student_list")
//changeNameAll[0].classList("student_list")

/******
 * 
 * Bonus - Utilisation de Javascript :
Ajoutez une classe appelée student_listaux deux <ul>'s.
Ajoutez les classes universityet attendanceau premier <ul>
 */
document.querySelectorAll("ul")[0].classList.add("university")
document.querySelectorAll("ul")[0].classList.add("attendance")






