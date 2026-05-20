
let secondElapsed = 0
let interval = null

const time = document.getElementById("timer")
function padStart(value){
    return String(value).padStart(2, "0")
}
function setTime(){
    const minuted  = Math.floor(secondElapsed/60)
    const seconds = secondElapsed %60
    time.innerHTML = `${padStart(minuted)}:${padStart(seconds)}`

}
function timer(){
    secondElapsed++
    setTime()
}
function startClock(){
    if(interval) stopClock()
    interval = setInterval(timer,1000)
}
function stopClock(){
    clearInterval(interval)
}
function resetClock(){
    stopClock()
    secondElapsed = 0
    setTime()
}