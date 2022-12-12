const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

// iterate through hours array
// if the item is equal to or above 7, push it to happyhours array
// if not, push it to grumpyhours array
// log the results with a sentence in backticks

for (const hour of hours) {
    if (hour >= 7) {
        happyHours.push(hour);
    } else {
        grumpyHours.push(hour);
    }
}

console.log(`I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.`)