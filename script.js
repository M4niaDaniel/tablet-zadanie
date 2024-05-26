var firstTime = sessionStorage.getItem("first_time");
if(!firstTime) {
    // first time loaded!
    sessionStorage.setItem("first_time","1");
    sessionStorage.setItem("theme", 'cornflowerblue');
}

document.getElementById('weather').addEventListener('click', ()=>{
    document.querySelector('.tablet').innerHTML = '<div class="elfsight-app-617ca15a-8e05-4b0f-9378-b38afb1f2b78" data-elfsight-app-lazy></div>';
});

document.querySelector('.button').addEventListener('click', ()=>{
    location.reload();
});

document.querySelector('#settings').addEventListener('click', ()=>{
    document.querySelector('.tablet').innerHTML = `<label>Accent Colour:</label><input type= "color" class="color_in">`;
    var color_in = document.querySelector('.color_in')
    color_in.addEventListener('change', ()=>{
    sessionStorage.setItem("theme", color_in.value);
    });
});

document.querySelector('#map').addEventListener('click', ()=>{
    document.querySelector('.tablet').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.137048845588!2d18.67567611281131!3d50.308034471446916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711304e89ff6d2d%3A0x814a9a38911a52b1!2zWmVzcMOzxYIgU3prw7PFgiDFgcSFY3pub8WbY2kgdyBHbGl3aWNhY2g!5e0!3m2!1spl!2spl!4v1716747327975!5m2!1spl!2spl" width="984" height="738" style="border:0; border-radius:20.5px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})

document.querySelector('#game').addEventListener('click', ()=>{
    document.querySelector('.tablet').innerHTML = `<iframe src="https://megadrive-emulator.com/game/?game=Spider-Man_World_Sega.bin" width="984" height="738" style="border:0; border-radius:20.5px;" allowfullscreen=""></iframe>`;
})

var icons = document.querySelectorAll('.icons');
var widget = document.querySelectorAll('.widget');
var widget2 = document.querySelectorAll('.widget2');

let icons_2 = Array.from(icons);
let widget_2 = Array.from(widget);
let widget2_2= Array.from(widget2);

let widgets = icons_2.concat(widget_2, widget2_2);

widgets.forEach(icon=>{
    icon.style.backgroundColor = sessionStorage.getItem("theme");
})