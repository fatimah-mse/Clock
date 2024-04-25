//analog
let analog_clock = document.getElementById('analog-clock')
let hour = document.getElementById('h')
let minute = document.getElementById('min')
let second = document.getElementById('sec')

//digital
let digital_clock = document.getElementById('digital-clock')
let hours = document.getElementById('hrs')
let minutes = document.getElementById('mins')
let seconds = document.getElementById('secs')

function switch_clock() {
    if (analog_clock.style.display =='none')  {
        analog_clock.style.display ='flex'
        digital_clock.style.display ='none'
    }
    else {
        analog_clock.style.display ='none'
        digital_clock.style.display ='flex'
    }
}

function clockTick() {
    const date = new Date() 
    const sec = date.getSeconds() / 60
    const min = (sec + date.getMinutes()) / 60
    const h = (min + date.getHours()) / 12

    //analog
    rotateClockHand(second,sec)
    rotateClockHand(minute,min)
    rotateClockHand(hour,h)

    //digital
    seconds.innerHTML = date.getSeconds()
    minutes.innerHTML = date.getMinutes()
    hours.innerHTML = date.getHours()
}

function rotateClockHand(element , rotation) {
    element.style.setProperty('--rotate' , rotation * 360)
}

setInterval(clockTick,1000)