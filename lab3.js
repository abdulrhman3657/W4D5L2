// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...


let stop_btn = document.getElementById("stopButton");
let slow_btn = document.getElementById("slowButton");
let go_btn = document.getElementById("goButton");

let stop_light = document.getElementById("stopLight");
let slow_light = document.getElementById("slowLight");
let go_light = document.getElementById("goLight");


stop_btn.addEventListener("click", () => {
    stop_light.style.backgroundColor = "red";
    
    slow_light.style.backgroundColor = "black"; 
    go_light.style.backgroundColor = "black"; 
})

slow_btn.addEventListener("click", () => {
    slow_light.style.backgroundColor = "yellow";
    
    stop_light.style.backgroundColor = "black"; 
    go_light.style.backgroundColor = "black"; 
})

go_btn.addEventListener("click", () => {
    go_light.style.backgroundColor = "green";  

    stop_light.style.backgroundColor = "black"; 
    slow_light.style.backgroundColor = "black"; 
})