// query selectors

let nextBtnsEl = document.querySelectorAll(".next-btn")
let backBtnsEl = document.querySelectorAll(".back-btn")
let forms = document.querySelectorAll("form")


// event listeners

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
})

nextBtnsEl.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        changeSelectedStep(e, "+")
    })
})

backBtnsEl.forEach(btn => {
    btn.addEventListener('click', (e) => {
        changeSelectedStep(e, "-")
    })
})


// functions
function returnNumberOfStep(event) {
    let regex = /\d+/;
    let classOfStep = event.target.parentElement.parentElement.parentElement.parentElement.classList.value
    let numberOfStep = classOfStep.match(regex)[0]
    return numberOfStep
}

function increaseSelectedStepNumber(number) {
    if (number == 4) {
        return 4
    } else {
        return Number(number) + 1
    }
}

function decreaseSelectedStepNumber(number) {
    if (number == 1) {
        return 1
    } else {
        return Number(number) - 1
    }
}

function clearAllStepLinks() {
    let stepLinks = document.querySelectorAll(".step-link")
    stepLinks.forEach(step => {
        step.classList.remove("selected-step")
    })
}

function clearAllStepSectionsActiveStatus() {
    let stepSections = document.querySelectorAll(".step-section")
    stepSections.forEach(stepSection => {
        stepSection.classList.remove("active")
    })
}

function changeSelectedStep(event, action) {
    let newNumber = increaseSelectedStepNumber(returnNumberOfStep(event))
    if (action == "-") {
        newNumber = decreaseSelectedStepNumber(returnNumberOfStep(event))
    }
    // query selectors
    let stepSectionEl = document.querySelector(`.step-${newNumber}-section`)
    let stepLinkEl = document.querySelectorAll(".step-link")[newNumber-1]
    // making sure there is no active step links and step sections 
    clearAllStepLinks()
    clearAllStepSectionsActiveStatus()
    // activating step link and step section
    stepSectionEl.classList.add("active")
    stepLinkEl.classList.add("selected-step")
}




