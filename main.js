class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.laps = [];
        this.reset();
        this.print(this.times); 
    }
    
    reset() {
        this.running = false;
        this.time = null;
        this.times = [ 5, 0, 0 ];
        this.print(this.times); 
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
        console.log(timestamp -  this.time)
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] > 100) {
            this.times[1] -= 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] < 0) {
            this.times[0] -= 1;
            this.times[1] += 60;
        }
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    format(times) {
        return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}`;
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

    tab.style.display = "block";

}



let stopwatch = new Stopwatch(document.getElementById('stopwatch1'));
let stopwatch2 = new Stopwatch(document.getElementById('stopwatch2'));
let stopwatch3 = new Stopwatch(document.getElementById('stopwatch3'));
let stopwatch4 = new Stopwatch(document.getElementById('stopwatch4'));
let stopwatch5 = new Stopwatch(document.getElementById('stopwatch5'));
let stopwatch6 = new Stopwatch(document.getElementById('stopwatch6'));

