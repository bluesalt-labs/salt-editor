// http://codepen.io/rstrahl/pen/eJZQej
$("#sidebar-tree").resizable({
    handleSelector: "#divider-1",
    resizeHeight: false
});


/*

$(function(){
    resizerX("divider-1", function(e){ resizeX(e.pageX, 'sidebar-tree'); });
});



/*-------------------------- Resizer Code --------------------------*/
/* Adapted from [anhr/resizer](https://github.com/anhr/resizer)     */
/*------------------------------------------------------------------
function resizer(resizerID, mousemove, cursor) {
    var resizer = document.getElementById(resizerID);
    resizer.style.cursor = cursor;
    resizer.mousemove = mousemove;

    resizer.onmousedown = function(e) {
        try {
            document.documentElement.addEventListener('mousemove', resizer.doDrag, false);
            document.documentElement.addEventListener('mouseup', resizer.stopDrag, false);
        } catch(e) {
            console.log("resizer.onmousedown(...) failed! Your browser does not support this feature. " + e.message);
        }
    };

    resizer.doDrag = function(e) {
        if(e.which != 1){ resizer.stopDrag(e); }
        resizer.mousemove(e);
    };

    resizer.stopDrag = function(e) {
        document.documentElement.removeEventListener('mousemove', resizer.doDrag, false);
        document.documentElement.removeEventListener('mouseup', resizer.stopDrag, false);
    }
}

function resizerX(resizerID, mousemove) {
    resizer(resizerID, mousemove, "e-resize");
}

function resizeX(x, element1ID) {
    var element2 = document.getElementById(element1ID);
    element2.style.width = x + 'px';
}
/*------------------------ End Resizer Code ------------------------*/
