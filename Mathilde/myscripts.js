
window.setInterval("analyseScroll()", 10);

var mouse = {x: 0, y: 0};
var go = false;

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    go = true;
}, false);


// Main function to retrieve mouse x-y pos.s


function analyseScroll() {

    document.getElementById("test").style.marginLeft = mouse.x + "px";
    document.getElementById("test").innerHTML = "";

    var window_width = window.innerWidth;
    var scrollLeft = window_width * 0.9;
    var scrollRight = window_width  * 0.1;
    var scroll = 0;
    var speedSlower = 20;
    if(!go)
    {
        return true;
    }

    if(mouse.x > scrollLeft)
    {
        scroll = Math.round((mouse.x - scrollLeft)/speedSlower);
        document.getElementById("test").innerHTML = scroll + "=>";
    }
    else if(mouse.x < scrollRight)
    {
        scroll = Math.round(-(scrollRight - mouse.x)/speedSlower);
        document.getElementById("test").innerHTML = "<=" + scroll;

    }
    window.scrollBy(scroll, 0);
    return true
}




