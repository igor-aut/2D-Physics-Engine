const hero = document.getElementById('hero');

async function gameLoop() {
    for (let i = 0; i <= 300; i++) {
        y = 9 * i;
        hero.style.top = y + 'px';
        console.log(i);
        await sleep(16.667);
    }
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

gameLoop();