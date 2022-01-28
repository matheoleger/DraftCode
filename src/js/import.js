let files = ["../html/start.html", "../html/navbar.html", "../html/editor.html", "../html/schema.html"]


const loadPage = (pageElements) => {

  let frag = document.createRange().createContextualFragment(pageElements)
  let clone = document.importNode(frag, true)
  document.querySelector('.content').appendChild(clone)
}

files.forEach((filePath) => {
  fetch(filePath)
  .then(response => response.text())
  .then(loadPage)
})

