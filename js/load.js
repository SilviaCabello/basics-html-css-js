const load6Btn = document.querySelectorAll('.three_columns_card--load6 button.load_btn');

for (var i=0,l=load6Btn.length;i<l;i++) {
    load6Btn[i].addEventListener("click", (ev) => {
        ev.target.previousElementSibling.classList.toggle("display");

        if(ev.target.innerHTML == "Alle laden") {
            ev.target.innerHTML = "Weniger laden";
        } else {
            ev.target.innerHTML = "Alle laden"
        }
    })
}

const load4Btn = document.querySelectorAll('.two_columns_pic--load4 button.load_btn');

for (var i=0,l=load4Btn.length;i<l;i++) {
    load4Btn[i].addEventListener("click", (ev) => {
        ev.target.parentNode.classList.toggle("display4");

        if(ev.target.innerHTML == "Alle laden") {
            ev.target.innerHTML = "Weniger laden";
        } else {
            ev.target.innerHTML = "Alle laden"
        }
    })
}