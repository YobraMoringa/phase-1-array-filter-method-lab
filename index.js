// Code your solution here

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(array, searchName) {
    // Loop 1st then check whether the elements inside are objects or not
    for (const element of array) {
        if (typeof element === "object") {
            // check object elements that match searchName and store them in a new array. Both temporarily in lowercase to avoid being case sensitive
            const searchedDrivers = array.filter(object => {
                return object.name.toLowerCase() === searchName.toLowerCase()
            })

            // Create new array which stores the object name value that matched searchName
            const finalResult = [];
            for (const object of searchedDrivers) {
                finalResult.push(object.name);
            }

            return finalResult;
        } else {
            const searchedDrivers = array.filter(element => {
                return element.toLowerCase() === searchName.toLowerCase();
            });

            return searchedDrivers;
        }
    }
}

function fuzzyMatch(array, searchName) {
    for (const element of array) {
        if (typeof element === "object") {
            const matchingElements = array.filter(element => {
                return (element.name.slice(0, 2).toLowerCase() === searchName.toLowerCase())
            });

            const finalResult = [];
            for (const object of matchingElements) {
                finalResult.push(object.name)
            }

            return finalResult;

        } else {
            const result = array.filter(element => {
                return element.slice(0, 2).toLowerCase() === searchName.toLowerCase();
            });

            return result;
        }
    }
}

function matchName(array, searchName) {
    return array.filter(element => {
        return element.name.toLowerCase() === searchName.toLowerCase();
    });
}

// console.log(matchName(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'], "mm"));
console.log(matchName(drivers, 'Bobby'));