/***
 * Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets. Chaque objet est un livre qui possède 4 clés (soit 4 propriétés) :
Titre,
auteur,
image : une url,
déjàRead : qui est un booléen (vrai ou faux).

Initiez le tableau avec 2 livres de votre choix (c'est-à-dire ajoutez manuellement 2 objets livres dans le tableau)
Exigences : Toutes les instructions ci-dessous doivent être codées dans le fichier js :
À l'aide du DOM, rendez les livres dans un tableau HTML (le tableau HTML doit être ajouté au <div>créé dans la partie 1).
Pour chaque livre :
Vous devez afficher le titre du livre et l'auteur du livre.
Exemple : HarryPotter écrit par JKRolling.
La largeur de l'image doit être définie sur 100px.
Si le livre est déjà lu. Définissez la couleur des détails du livre sur rouge.
 */

let book_1={
    title:"climbie",
    author:" bernard"  ,
    image:"https://picsum.photos/",
    already:false
}

let book_2={
    title:"climbie 1",
    author:" bernard dadier"  ,
    image:"https://picsum.photos/",
    already:false
}
let book_3={
    title:"climbie3",
    author:" bernard berlin dadier"  ,
    image:"https://picsum.photos/",
    already:false
}
let book_4={
    title:"climbie",
    author:" bernard"  ,
    image:"https://picsum.photos/",
    already:false
}

let allBooks=(book_1,book_2,book_3,book_4)
allBooks("allBooks",allBooks)

let table=document.createElement("table")
table.innerHTML=
<thead>
    <th>
    Book list
    </th>
</thead>

//console.log(table)

let listBook=document.querySelector("listBooks")
console.log("listBook",listBook)
listBook?.appendChild(table)
