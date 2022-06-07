function distanceFromHqInBlocks(blockNumber) {
    let hq = 42;
    return Math.abs(blockNumber - 42);
    
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = Math.abs(start - destination);
    let feetTravelled = blocksTravelled * 264;
    return feetTravelled;

}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    console.log(feetTravelled);
    
    if (feetTravelled < 400) {
        return 0;
    } else if (feetTravelled < 2000){
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}