const loadBtn = document.querySelectorAll('button.load_btn');

for (var i=0,l=loadBtn.length;i<l;i++) {
    loadBtn[i].addEventListener("click", (ev) => {
        ev.target.previousElementSibling.classList.toggle("display");

        if(ev.target.innerHTML == "Alle laden") {
            ev.target.innerHTML = "Weniger laden";
        } else {
            ev.target.innerHTML = "Alle laden"
        }
    })
}