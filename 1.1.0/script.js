//varibles
let elements = {
    buttons :{
        drink: {
            element: document.getElementById("drink"),
            down: false
        },
        pee: {
            element: document.getElementById("pee"),
            down: false
        },
        bottommenu: {
            element: document.getElementById("bottombuttons")
        }
    },
    bar: {
        outline: document.getElementById("outline"),
        bar: {
            element: document.getElementById("bar"),
            width: 0
        }
    },
    colors: document.querySelectorAll("#change ul li"),
    sidebar: {
        sidebar: document.getElementById("sidebar"),
        button: document.getElementById("mi"),
        open: false
    }
}

//check buttons pressed
elements.buttons.drink.element.addEventListener("mousedown", () => {
    elements.buttons.drink.down = true;
});
document.body.addEventListener("mouseup", ()=>{
    elements.buttons.pee.down = false;
    elements.buttons.drink.down = false;
})
elements.buttons.pee.element.addEventListener("mousedown", () => {
    elements.buttons.pee.down = true;
});

//move bar
function repeat () {
    if (elements.buttons.drink.down == true && elements.bar.bar.width < 100) {
        elements.bar.bar.element.style.width = elements.bar.bar.width + "%";
        elements.bar.bar.width += 0.1;
    }
    if (elements.buttons.pee.down == true && elements.bar.bar.width > -1) {
        elements.bar.bar.element.style.width = elements.bar.bar.width + "%";
        elements.bar.bar.width -= 0.1;
    }
    setTimeout(repeat, 1)
}
repeat()

//make colors interactive
for (let i = 0; i <= elements.colors.length; i++) {
    elements.colors[i].addEventListener("click", ()=>{
        elements.bar.bar.element.style.backgroundColor = elements.colors[i].getAttribute("color")
    })
}

//open sidebar
let sbs = () => {
    console.log('test')
    if (elements.sidebar.open == false) {
        elements.sidebar.sidebar.style.left = 0
        elements.sidebar.button.style.left = "260px"
    } else {
        elements.sidebar.sidebar.style.left = '-250px'
        elements.sidebar.button.style.left = "10px"
    }
}