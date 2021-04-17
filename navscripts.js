if (document.location.hash == "" || document.location.hash == "#")
    document.location.hash = "#home";

function toggleNavDrawer() {
    document.getElementById("top-nav").classList.toggle("mobile");
}

function onBtnClick(e) {
    clearSelected();
    e.classList.add("selected");
}

function clearSelected() {
    var head = document.getElementById("top-nav");
    for (btn of head.getElementsByClassName("btn")) btn.classList.remove("selected");
    document.getElementById("top-nav").classList.remove("mobile");
}