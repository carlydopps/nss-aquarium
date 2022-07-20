import { getFish } from './fish/database.js'

// Define a variable whose value equals the return value (array) of the invoked function
const allFish = getFish()

// For each fish in the array
    // Log each fish
for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import {FishList} from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish")


parentHTMLElement.innerHTML = FishList() // Could call function directly here or the variable that you saved the return result in

 
