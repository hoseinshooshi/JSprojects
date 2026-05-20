let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();
console.log(currentTime);
console.log(hrs)
setInterval(() => {
    
    let currentTime = new Date(); 
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes(); 
    const seconds = currentTime.getSeconds();
    document.getElementById("hrs").textContent = hour; 
    min.innerHTML = currentTime.getMinutes(); 
    sec.innerHTML = currentTime.getSeconds();
}, 1000)
