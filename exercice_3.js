let modif = document.querySelector("#navBar")
modif.setAttribute("id", "socialNetworkNavigation ")

let newLi = document.createElement("li")
console.log("li", newLi)

/*********
 * 
 * We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
 */
let logout = document.createTextNode("logout")
console.log("logout", logout)

/***
 * Use the firstElementChild and the lastElementChild properties to retrieve the
 *  first and last <li> elements from their parent element (<ul>). Display the text
 *  of each link. (Hint: use the textContent property).
 */