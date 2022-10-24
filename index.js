const hero = document.getElementById('hero');

for (let i = 0; i <= 300; i++) {

    
    y = i;
    hero.style.top = y + 'px';
    console.log(i);
    setTimeout(function() {}, 16.667)

}