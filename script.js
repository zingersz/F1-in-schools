function openNav() {
    document.getElementById("sidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

let timeOut;

function pageLoad() {
    timeOut = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("web-page").style.display = "block";
}

window.onload = function () {
    var elems = document.getElementsByClassName('card');
    for (var i in elems) {
        if (elems[i].nodeType == 1) elems[i].addEventListener('click', function (event) {
            var mailto_link = 'mailto:' + this.id;
            var win = window.open(mailto_link, 'emailWindow');
        });
    }
};