const HEIGHT = 400
const WIDTH = 400

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};



let $map = document.getElementById('map')

$map.addEventListener('click',function (e) {
    let distance = getDistance(e,target)
    console.log(distance)
    

})