let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let totalCount = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    totalCount += count

     // Save the totalCount instead of count
    let saveScore = totalCount + " - "
    saveEl.textContent += saveScore

    // Reset the current count back to 0
    countEl.textContent = 0
    count = 0
}


