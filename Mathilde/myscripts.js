
window.setInterval("analyseScroll()", 10);

window.onload = function(){
    document.getElementById("loading").style.zIndex = -999;
}

var mouse = {x: 0, y: 0};
var go = false;

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    go = true;
}, false);

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

$("#test").click(function () {
    alert("123");
});

function showIFrame(url)
{
    var container = document.getElementById('con');
    var iframebox = document.getElementById('iframebox');
    iframebox.src=url;
    container.style.display = 'block';
    iframebox.style.display = 'block';
    container.style.zIndex = "1";
    iframebox.style.zIndex = "1";
}

function closeIFrame(){
    var container = document.getElementById('con');
    var iframebox = document.getElementById('iframebox');
    iframebox.src="";
    container.style.display = 'none';
    iframebox.style.display = 'none';
    container.style.zIndex = "1";
    iframebox.style.zIndex = "1";
}




