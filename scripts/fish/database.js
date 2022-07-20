// Define an object with a key:value pair of fish: array of fish objects
    // Create a fish object for each fish with the following properties: 
        // Image 
        // Name 
        // Species 
        // Length 
        // Location Diet
// Push the new fish into the fish collection array

// ----- Question: Do we manually add the new fish objects to the fish property value, or should we push into database.fish?
// ----- Updates that were wrong from class code: 
            // Length propperty should be 'length' not 'size'
            // HTML string in FishList.js should be a let variable not const


const database = {
    fish: [
        {
            image: "https://lh3.googleusercontent.com/2sApcrkH4oGF_MC0UpkmRMqbjAeI6HZySYROwCT4YqQro6R5HQ7u6dcD-bwCBW8dBUfXBA4Adg6iSZI4sx1Y9FIqP--Qmhr9rcuubw=w600",
            name: "Googley",
            species: "Black Moor",
            length: 3,
            location: "Asia",
            food: "Bloodworms"
            
        },
        {
            image: "https://31.media.tumblr.com/37d1293fed8a12117a4d95176d4f79d5/tumblr_moltcva5e51svh7j5o1_500.gif",
            name: "Charlie",
            species: "Magikarpk",
            length: 35,
            location: "Kanto",
            food: "Oran Berries"
        },
        {
            image: "https://c.tenor.com/b7dA4s8bLr4AAAAC/finding-nemo-bloat.gif",
            name: "Fred",
            species: "Pufferfish",
            length: 1,
            location: "Indian Ocean",
            food: "Crustaceans"
        }  
    ],
    tips: ["Go snorkeling!", "Have fun!", "And always make sure you can swim faster than whoever you're with!"],
    locations: ["Asia", "Indian Ocean", "Hawaii", "Austalia", "Indonesia", "Bora Bora"]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // Define a variable whose value is an empty array to store the most holy fish
    // For each fish in the array of fish objects within the database object
        // If the length is a multiple of 3
            // Add that fish object to the array of holy fish
    // Return the array of holy fish
    const holyFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // Define a variable whose value is an empty array to store the soldier fish
    // For each fish in the array of fish objects within the database object
        // If the length is a multiple of 5
            // Add that fish object to the array of soldier fish
    // Return the array of soldier fish
    const soldiers = []
    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
return soldiers
}

export const nonHolyFish = () => {
    // Define a variable whose value is an empty array to store the regular fish
    // For each fish in the array of fish objects within the database object
        // If the length is not a multiple of 3 nor of 5
            // Add that fish object to the array of regular fish
    // Return the array of regular fish
    const regularFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}

