let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `Movies To Watch`

// let movieElements = document.querySelectorAll(`.movies-to-watch li`)
// // loop through all the elements (all of the li )

// for (let i=0; i < movieElements.length; i++){
//     let movieElement = movieElements[i]

//     movieElement.innerHTML = `Spaceballs`
// }

let moviesList = document.querySelector(`.movies-to-watch`)
moviesList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
    <li>Star Wars</li>
`)