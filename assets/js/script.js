var app1Modal = document.getElementById("app1-modal");
var app1Div = document.getElementById("tech-blog");
var app1Close = document.getElementById("app1-close");

app1Div.onclick = function() {
    app1Modal.style.display = "block";
};

app1Close.onclick = function() {
    app1Modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == app1Modal) {
        app1Modal.style.display = "none";
    }
};

var app2Modal = document.getElementById("app2-modal");
var app2Div = document.getElementById("motorcycle-club");
var app2Close = document.getElementById("app2-close");

app2Div.onclick = function() {
    app2Modal.style.display = "block";
};

app2Close.onclick = function() {
    app2Modal.style.display = "none";
};

var app3Modal = document.getElementById("app3-modal");
var app3Div = document.getElementById("safe-trip-planner");
var app3Close = document.getElementById("app3-close");

app3Div.onclick = function() {
    app3Modal.style.display = "block";
};

app3Close.onclick = function() {
    app3Modal.style.display = "none";
};

var app4Modal = document.getElementById("app4-modal");
var app4Div = document.getElementById("weather-dashboard");
var app4Close = document.getElementById("app4-close");

app4Div.onclick = function() {
    app4Modal.style.display = "block";
};

app4Close.onclick = function() {
    app4Modal.style.display = "none";
};

var app5Modal = document.getElementById("app5-modal");
var app5Div = document.getElementById("note-taker");
var app5Close = document.getElementById("app5-close");

app5Div.onclick = function() {
    app5Modal.style.display = "block";
};

app5Close.onclick = function() {
    app5Modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == app1Modal) {
        app1Modal.style.display = "none";
    } if (event.target == app2Modal) {
        app2Modal.style.display = "none";
    } if (event.target == app3Modal) {
        app3Modal.style.display = "none";
    } if (event.target == app4Modal) {
        app4Modal.style.display = "none";
    } if (event.target == app5Modal) {
        app5Modal.style.display = "none";
    }
};