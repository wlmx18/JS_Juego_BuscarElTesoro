const HEIGHT = 400
const WIDTH = 400

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};



let $map = document.getElementById('map')
let $distance = document.getElementById('distance')

$map.addEventListener('click',function (e) {
    let distance = getDistance(e,target)
    console.log(distance)
    let distanceHint = getDistanceHint(distance)
    console.log(distanceHint)
    //$distance.innerHTML = distanceHint
    $distance.innerHTML = `<h1> ${distanceHint} </h1>`

})