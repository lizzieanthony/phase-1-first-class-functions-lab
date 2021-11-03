// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers() {
    return drivers.slice(-2) 
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(fare) {
        return fare * x;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}


