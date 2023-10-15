let color = document.querySelector('#i1');
let bt = document.querySelector('.bcolor');
let card = document.querySelector('.se');

bt.onclick = () => {
    console.log(color.value);
    card.style.backgroundColor = color.value;
}

let tcolor = document.querySelector('#i2');
let bt2 = document.querySelector('.tcolor');
let txt = document.querySelector('.inputs');

bt2.onclick = () => {
    console.log(tcolor.value);
    txt.style.color = tcolor.value;
}

let num = document.querySelector('.num');
let nam = document.querySelector('.name');
let mon = document.querySelector('#date1');
let year = document.querySelector('#date2');
let cvv = document.querySelector('#cvv');
let btn = document.querySelector('.inf');

btn.onclick = () => {
    alert('Номер карты: ' + num.value + '\nИмя: ' + nam.value + '\nСрок: ' + mon.value + '.' + year.value + '\nCVV: ' + cvv.value);
}