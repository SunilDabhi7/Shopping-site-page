var images = ['images/slider/poster-1.jpg', 'images/slider/poster-2.jpg', 'images/slider/poster-3.jpg', 'images/slider/poster-4.jpg'];
var num = 0;
setInterval(next,3000);
function next() {
    var slider = document.getElementById('slider');
    var dot = document.getElementsByClassName('dot');
    num ++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    for (let i=0; i < dot.length; i++) {
        if (i == num) {
            continue;
        }
        else {
            dot[i].classList.remove('active');
        }
    }
    dot[num].classList.add('active');
}
function prev() {
    var slider = document.getElementById('slider');
    var dot = document.getElementsByClassName('dot');
    num --;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
    for (let i=0; i < dot.length; i++) {
        if (i == num) {
            continue;
        }
        else {
            dot[i].classList.remove('active');
        }
    }
    dot[num].classList.add('active');
}

// Functions for menu-bar
function back() {
    let element = document.getElementsByClassName('side-bar');
    return element[0].style.width = "0";
}
function show1() {
    let element = document.getElementsByClassName('nestedList');
    var x = element[0];
    if (x.style.height === "auto") {
        x.style.height = "0px";
    } else {
        x.style.height = "auto";
    }
}
function show2() {
    let element = document.getElementsByClassName('nestedList');
    var x = element[1];
    if (x.style.height === "auto") {
        x.style.height = "0px";
    } else {
        x.style.height = "auto";
    }
}

// Functions for hovering categories
let men = document.getElementById('men-list');
let women = document.getElementById('women-list');
let closeMen = document.getElementById('close-men-list');
let closeWomen = document.getElementById('close-women-list');
men.addEventListener("click", () => {
    let id = document.getElementById('hover-type-list')
    id.style.height = "400px";
});
women.addEventListener("click", () => {
    let id = document.getElementById('hover-type-list-2')
    id.style.height = "400px";
});
closeMen.addEventListener("click", () => {
    let id = document.getElementById('hover-type-list')
    id.style.height = "0px";
});
closeWomen.addEventListener("click", () => {
    let id = document.getElementById('hover-type-list-2')
    id.style.height = "0px";
});
// men.addEventListener("mouseout", () => {
//     document.getElementById('hover-type-list').style.display = "none";
// });
// women.addEventListener("mouseout", () => {
//     document.getElementById('hover-type-list-2').style.display = "none";
// });