//function getRandomNumber (size){}
//EtmaScript6

let getRandomNumber = size => {
    return Math.floor(Math.random()*size)
}

let getDistance = (e,target)=> {
    let diffX = e.offsetx - target.offsetx
    let diffY = e.offsety - target.offsety
    return Math.sqrt(diffX**2 + diffY**2)
}

let getDistanceHint = distance => {
    if (distance < 30){
        return "Boiling Hot"
    } else if (distance< 40 ){
        return "Really Hot"
    } else if (distance< 60 ){
        return "Hot"
    } else if (distance< 100 ){
        return "Warm"
    } else if (distance< 180 ){
        return "Cold"
    } else if (distance< 360 ){
        return "Really Cold"
    } else {
        return "Freezing"
    }         
}