let drone = document.getElementById('drone')
let angle=0

document.getElementById('left').onclick = function() {
    angle-=90
    drone.style.transform = `rotate(${angle}deg)`
    console.log(angle)
    if(angle===-360){angle=0}
}

document.getElementById('right').onclick = function() {
    angle+=90
    drone.style.transform = `rotate(${angle}deg)`
    console.log(angle)
    if(angle===360){angle=0}
}

let move = document.getElementById('move')
let surface = document.getElementById('surface')
let moveRight = drone.offsetLeft, moveUp = drone.offsetTop ,
moveDown = 320, moveLeft = 0

let dropdown = document.getElementById('directionOptions')
let okButton = document.getElementById('okButton')
let placeBtn = document.getElementById('place')
let reportBtn = document.getElementById('report')


function OkClickHandler(){
    switch(dropdown.value){
        case 'north':
            drone.style.transform = `rotate(0deg)`
            angle=0
            break;
        case 'east':
            drone.style.transform = `rotate(90deg)`
            angle=90
            break;
        case 'south':
            drone.style.transform = `rotate(180deg)`
            angle=180
            break;
        case 'west':
            drone.style.transform = `rotate(270deg)`
            angle=-90
            break;
    }
    document.getElementById('placeDialogue').style.display = 'none'
    document.getElementById('left').disabled = false
    document.getElementById('right').disabled = false
    placeBtn.disabled = false
    reportBtn.disabled = false
    move.disabled = false
}

function CancelClickHandler(){
    document.getElementById('placeDialogue').style.display = 'none'
    document.getElementById('left').disabled = false
    document.getElementById('right').disabled = false
    placeBtn.disabled = false
    reportBtn.disabled = false
    move.disabled = false
}

placeBtn.onclick = ()=>{
    document.getElementById('placeDialogue').style.display = 'block'
}


move.onclick = function moveDrone(){

    switch(angle){
        case 0:
        case -360:
        case 360:
            if(moveUp!==0){
                moveUp-=40;
                drone.style.top =  moveUp +'px'
                console.log('moveUp ' + moveUp)
            }
            break;
        
        case 90:
        case -270:
            if(moveRight!==(surface.offsetWidth-80)){
                moveRight+=40;
                drone.style.left = moveRight +'px'
                console.log('moveRight ' + moveRight)
            }
            break;
        case 180:
        case -180:
            if(moveDown!==0){
                moveDown-=40;
                drone.style.bottom = moveDown +'px' 
                console.log('moveDown ' + moveDown) 
            }
            break;
        case 270:
        case -90:
            if(moveLeft!==(surface.offsetWidth-80)){
                moveLeft+=40;
                drone.style.right = moveLeft +'px'
                console.log('moveLeft ' + moveLeft)
            }
            break;
    }
    
}

function Report(){
    var direction = document.getElementById('directionOptions')
    var text = direction.options[direction.selectedIndex].text
    alert('Direction: ' + text)
}
