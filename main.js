class Stopwatch {
    constructor(display, times) {
        this.running = false;
        this.display = display;
        this.laps = [];
        this.times = times;
        this.reset(this.times);
        this.print(this.times); 
    }
    
    reset(resetTimes) {
        this.running = false;
        this.time = null;
        this.times = resetTimes;  
        this.print(this.times);
        this.display.style.color = "black";  
    }
    
    start() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }
    
    stop() {
        this.running = false;
        this.time = null;
    }

    restart() {
        this.time = null;
        this.reset();
    }
    
    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    }
    
    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] > 100) {
            this.times[1] -= 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] < 0 && this.times[0] > 0){
            this.times[0] -= 1;
            this.times[1] += 60;
        } 
        else if (this.times[1] == 0 && this.times[0] == 0){ // Time gets to 0 
            this.display.style.color = "red";   
        }
        else if (this.times[1] == -20 && this.times[0] == 0){ // Time gets to 0 
            this.stop();  
        }
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    format(times) {
        if(times[1]<0){
            return `-\
${pad0(times[0], 2)}:\
${pad0(Math.abs(times[1]), 2)}`;
        }else{
        return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}`;
        }
    }
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function clearChildren(node) {
    while (node.lastChild)
        node.removeChild(node.lastChild);
}

function hideClock(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch1');
    var buttons = document.getElementById('controls1');
    var arrow = document.getElementById('downArrow1');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock2(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch2');
    var buttons = document.getElementById('controls2');
    var arrow = document.getElementById('downArrow2');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock3(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch3');
    var buttons = document.getElementById('controls3');
    var arrow = document.getElementById('downArrow3');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock4(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch4');
    var buttons = document.getElementById('controls4');
    var arrow = document.getElementById('downArrow4');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock5(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch5');
    var buttons = document.getElementById('controls5');
    var arrow = document.getElementById('downArrow5');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock6(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch6');
    var buttons = document.getElementById('controls6');
    var arrow = document.getElementById('downArrow6');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock7(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch7');
    var buttons = document.getElementById('controls7');
    var arrow = document.getElementById('downArrow7');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function hideClock8(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch8');
    var buttons = document.getElementById('controls8');
    var arrow = document.getElementById('downArrow8');
    clock.style.display = "none";
    buttons.style.display = "none";
    arrow.style.display = "block";
}

function showClock(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch1');
    var buttons = document.getElementById('controls1');
    var arrow = document.getElementById('upArrow1');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock2(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch2');
    var buttons = document.getElementById('controls2');
    var arrow = document.getElementById('upArrow2');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock3(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch3');
    var buttons = document.getElementById('controls3');
    var arrow = document.getElementById('upArrow3');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock4(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch4');
    var buttons = document.getElementById('controls4');
    var arrow = document.getElementById('upArrow4');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock5(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch5');
    var buttons = document.getElementById('controls5');
    var arrow = document.getElementById('upArrow5');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock6(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch6');
    var buttons = document.getElementById('controls6');
    var arrow = document.getElementById('upArrow6');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock7(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch7');
    var buttons = document.getElementById('controls7');
    var arrow = document.getElementById('upArrow7');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function showClock8(elem){
    elem.style.display= "none";
    var clock = document.getElementById('stopwatch8');
    var buttons = document.getElementById('controls8');
    var arrow = document.getElementById('upArrow8');
    clock.style.display = "block";
    buttons.style.display = "block";
    arrow.style.display = "block";
}

function switchTabs(active, button){
    var elements = document.getElementsByClassName("container");
    var buttons = document.getElementsByClassName("btnTab");
    var tab = document.getElementById(active);
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
    for (var j = 0; j < buttons.length; j++){
        buttons[j].classList.remove("active");
    }
    button.classList.add("active");
    if (active == 'tab5'){
        calculateTimes();
    }

    tab.style.display = "block";

}

function calculateTimes(){
    stopwatch.stop();
    let clock1 = document.getElementById('stopwatch1');
    let clock1res = document.getElementById('stopwatch1res');
    clock1res.innerHTML = clock1.innerHTML;
    stopwatch2.stop();
    let clock2 = document.getElementById('stopwatch2');
    let clock2res = document.getElementById('stopwatch2res');
    clock2res.innerHTML = clock2.innerHTML;
    stopwatch3.stop();
    let clock3 = document.getElementById('stopwatch3');
    let clock3res = document.getElementById('stopwatch3res');
    clock3res.innerHTML = clock3.innerHTML;
    stopwatch4.stop();
    let clock4 = document.getElementById('stopwatch4');
    let clock4res = document.getElementById('stopwatch4res');
    clock4res.innerHTML = clock4.innerHTML;
    stopwatch5.stop();
    let clock5 = document.getElementById('stopwatch5');
    let clock5res = document.getElementById('stopwatch5res');
    clock5res.innerHTML = clock5.innerHTML;
    stopwatch6.stop();
    let clock6 = document.getElementById('stopwatch6');
    let clock6res = document.getElementById('stopwatch6res');
    clock6res.innerHTML = clock6.innerHTML;
    stopwatch7.stop();
    let clock7 = document.getElementById('stopwatch7');
    let clock7res = document.getElementById('stopwatch7res');
    clock7res.innerHTML = clock7.innerHTML;
    stopwatch8.stop();
    let clock8 = document.getElementById('stopwatch8');
    let clock8res = document.getElementById('stopwatch8res');
    clock8res.innerHTML = clock8.innerHTML;
}

let stopwatch = new Stopwatch(document.getElementById('stopwatch1'), [ 5, 0, 0 ]);
let stopwatch2 = new Stopwatch(document.getElementById('stopwatch2'), [ 5, 0, 0 ]);
let stopwatch3 = new Stopwatch(document.getElementById('stopwatch3'), [ 7, 0, 0 ]);
let stopwatch4 = new Stopwatch(document.getElementById('stopwatch4'), [ 7, 0, 0 ]);
let stopwatch5 = new Stopwatch(document.getElementById('stopwatch5'), [ 7, 0, 0 ]);
let stopwatch6 = new Stopwatch(document.getElementById('stopwatch6'), [ 7, 0, 0 ]);
let stopwatch7 = new Stopwatch(document.getElementById('stopwatch7'), [ 4, 0, 0 ]);
let stopwatch8 = new Stopwatch(document.getElementById('stopwatch8'), [ 4, 0, 0 ]);


