var screen = document.getElementById("screen");

function clr() {
    screen.innerHTML = " ";
    document.getElementById("scr-down").innerHTML = " ";
    console.log("All cleared")
}

function btn(val) {
    screen.innerHTML = screen.innerHTML + val;
    console.log(val)
    document.getElementById("scr-down").innerHTML = ' = ' + eval(screen.innerHTML)

}

function del() {
    screen.innerHTML = screen.innerHTML.slice(0, -1)
    console.log("1 element deleted from last")
    document.getElementById("scr-down").innerHTML = ' = ' + eval(screen.innerHTML)
    // document.getElementById("scr-down").innerHTML = " ";
}

function equal() {
    document.getElementById("screen").innerHTML = eval(screen.innerHTML)
    document.getElementById("scr-down").innerHTML = ' '
    // console.log("u can double click")
}
