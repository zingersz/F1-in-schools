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