function showSection(elementToShow) {
    const previousShowingEl = document.querySelector('.is-shown:not(.navbar-element)')


    if (previousShowingEl != null) {
        previousShowingEl.classList.remove('is-shown')
    }
    
    
    if(elementToShow == "g-draft") {
        document.querySelector('.gd-element').classList.add('is-shown')      
    } else if (elementToShow == "code") {
        document.querySelector('.editor-element').classList.add('is-shown')
    } else if (elementToShow == "schema") {
        document.querySelector('.schema-element').classList.add('is-shown')
    }

}